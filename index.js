const core = require('@actions/core')
const github = require('@actions/github')
const line = require('@line/bot-sdk')
const { buildReplyText } = require('line-message-builder')

const client = new line.Client({ channelAccessToken: core.getInput('channel-access-token') })

try {
  const userId = core.getInput('user-id')
  const message = core.getInput('message')
  client.pushMessage(userId, buildReplyText(message))
} catch (error) {
  core.setFailed(error.message)
}