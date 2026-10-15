/*
 * DELIBERATE SONARQUBE TEST FIXTURE - contains FAKE hardcoded credentials in detectable formats.
 * None of these values are real. Not imported anywhere in the application.
 */

export const awsAccessKeyId = 'AKIAIOSFODNN7EXAMPLE'
export const awsSecretAccessKey = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'

export const dbPassword = 'changeme123'
export const adminPassword = 'P@ssw0rd!Fake'

export const dbConnection = 'postgres://admin:SuperSecretFake1@db.example.com:5432/app'

export const githubToken = 'ghp_0123456789abcdefghijklmnopqrstuvwxyz'

export const jwtSecret = 'fake-jwt-signing-secret-do-not-use'
