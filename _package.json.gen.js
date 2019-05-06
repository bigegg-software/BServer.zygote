module.exports = ctx =>
`{
  "name": "${ctx.name}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@bigegg/s3-files-adapter": "^1.2.2",
    "aws-sdk": "^2.449.0",
    "express": "^4.16.4",
    "parse-server": "^3.3.0"
  }
}
`
