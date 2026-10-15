/*
 * DELIBERATE SONARQUBE TEST FIXTURE - contains intentional security vulnerabilities.
 * Not imported anywhere in the application.
 */
import { exec } from 'node:child_process'
import crypto from 'node:crypto'
import fs from 'node:fs'
import https from 'node:https'
import { type Request, type Response } from 'express'

export function sqlInjection (db: { query: (sql: string) => unknown }, req: Request) {
  return db.query("SELECT * FROM Users WHERE email = '" + req.query.email + "'")
}

export function commandInjection (req: Request) {
  exec('ping -c 1 ' + req.query.host, (err, stdout) => {
    console.log(err, stdout)
  })
}

export function codeInjection (req: Request) {
  // eslint-disable-next-line no-eval
  return eval(String(req.body.expression))
}

export function weakHashMd5 (password: string) {
  return crypto.createHash('md5').update(password).digest('hex')
}

export function weakHashSha1 (password: string) {
  return crypto.createHash('sha1').update(password).digest('hex')
}

export function weakCipher (data: string) {
  const cipher = crypto.createCipheriv('des-ecb', Buffer.from('12345678'), null)
  return cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
}

export function insecureToken () {
  return Math.random().toString(36).substring(2)
}

export function disabledTlsValidation () {
  return https.request({ host: 'example.com', rejectUnauthorized: false })
}

export function openRedirect (req: Request, res: Response) {
  res.redirect(String(req.query.target))
}

export function pathTraversal (req: Request, res: Response) {
  const data = fs.readFileSync('/var/data/' + req.query.file)
  res.send(data)
}

export function reflectedXss (req: Request, res: Response) {
  res.send('<h1>Hello ' + req.query.name + '</h1>')
}

export function regexDos (input: string) {
  return /^(a+)+$/.test(input)
}

export function dynamicRegex (req: Request) {
  return new RegExp(String(req.query.pattern)).test('some text')
}

export function ssrf (req: Request) {
  return fetch(String(req.query.url))
}
