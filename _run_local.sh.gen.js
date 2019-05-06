module.exports = ctx =>
`#!/bin/bash
export PARSE_SERVER_APPLICATION_ID="${ctx.appId}"
export PARSE_SERVER_MASTER_KEY="${ctx.masterKey}"
export PARSE_SERVER_APP_NAME="${ctx.name}"
export PARSE_SERVER_CLOUD="cloud/main"
export PARSE_SERVER_DATABASE_URI="mongodb://127.0.0.1:27017/dev"
export PARSE_SERVER_MOUNT_PATH="/api/1"
export PARSE_SERVER_START_LIVE_QUERY_SERVER="true"
export PARSE_SERVER_MAX_UPLOAD_SIZE="1000mb"
export PARSE_SERVER_CACHE_MAX_SIZE="20000"
export PARSE_SERVER_LIVE_QUERY='{"classNames":[]}'
export PARSE_PUBLIC_SERVER_URL="http://127.0.0.1:1337/api/1"

export ANYPROXY_PARSE_SERVER_URL="http://127.0.0.1:1337/api/1"

export S3_BUCKET="fxp-1258505122"
export S3_BASEURL="https://fxp-1258505122.cos.ap-chengdu.myqcloud.com"
export S3_REGION="ap-chengdu"
export S3_ACCESS_KEY="AKID0bJF6kGVWtodAgvd6KpuseDb4rSxGkBT"
export S3_SECRET_KEY="KZnaGoRWS5FCzxkJk0CCxhAPZpyvhaf9"
export S3_ENDPOINT="https://cos.ap-chengdu.myqcloud.com"
export S3_ASSUME_BUCKET_IS_PUBLIC_READ=true

export COS_SECRET_ID="AKID0bJF6kGVWtodAgvd6KpuseDb4rSxGkBT"
export COS_SECRET_KEY="KZnaGoRWS5FCzxkJk0CCxhAPZpyvhaf9"
export COS_BUCKET="fxp-1258505122"
export COS_REGION="ap-chengdu"

export PARSE_RUN_MODE='dev'

node index.js
`
