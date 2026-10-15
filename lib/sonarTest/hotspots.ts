/*
 * DELIBERATE SONARQUBE TEST FIXTURE - contains intentional security hotspots.
 * Not imported anywhere in the application.
 */
import fs from 'node:fs'
import { type Response } from 'express'

export const permissiveCors = { origin: '*', credentials: true }

export const hardcodedIp = '192.168.12.34'

export const insecureUrl = 'http://api.example.com/v1/data'

export function insecureCookie (res: Response) {
  res.cookie('session', 'abc', { secure: false, httpOnly: false })
}

export function worldWritable (path: string) {
  fs.chmodSync(path, 0o777)
}

export function tempFile () {
  fs.writeFileSync('/tmp/sonar-test.txt', 'data')
}

export function pseudoRandomPick (items: string[]) {
  return items[Math.floor(Math.random() * items.length)]
}
