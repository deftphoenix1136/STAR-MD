const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '917736962907'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mishabpes59:H02jFKvw0ZaplHEe@cluster1.tu86pnu.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'deftphoenix1136@gmail.com'
global.github = 'https://github.com/Xcelsama/STAR-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://www.instagram.com/miishaab__?igsh=amU5YTcwaTcweGdz' // add your username
global.sudo = process.env.SUDO || "917736962907"
global.devs = '917736962907'
global.website = 'https://github.com/Xcelsama/STAR-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VKangzSWNpODJ1b2FNemZjV0JMTHJ1K2NJYXgyRUV1eFhtOUZPaWpYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlZkZDFVZlR3ZEZEVU5oOXhNM0hQdzJGMnFURllSY1dXZjRJWkU5THVrcz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRS055a2dJQTBibTdqT2FpSDNRSjk5c21ZRUhRWk1MdXNsM3Z3aUhNMEcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSE1wVjFJTU9pdU9maERlV3JpUG1DWlV5ZlR5OUJIejNVYUpxcFJZdXlFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCdXFyaGV2UXNXTmN3UXAvVzlMKzJ4VVZqajArVjIxbk4rVzkxTnJtRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp1S2FKdFd6bEZ0TkhlZi94MExpcExVdFNEWExnVUhmdVJtd016bnJqd0E9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ2lYdHhjRCtMeERKcFlsMjJJVzJYZDg0bWs5Mno1aXdTNkRkOVpWNTV6M3JjcFVETU5SN0FLR1Z1bVlDbC9ETWIvRi9mTGV3OGc1MnZQZ1hzSzhoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjk0LCJhZHZTZWNyZXRLZXkiOiJOdFNybmR0L1BZZ2d3QVJKRzVFbHgxdVEyTm9ld3h2cWhTWlYxZ29FSXBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSTFhSaGRMS1M4Nk1WQ2FxYjF2Q2FBIiwicGhvbmVJZCI6Ijc0NjRjYjM3LTMzYjktNGUwOC1hMDFiLTQ2NmM1OGQ1ZTQwNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlWERUbS80eitweHBEZkRVVkxOckxpUXd6dTg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw3c3RBQmVqcVFVY0J0c3kwMGZmOG5GYUlFVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ttUnR6b1FvZXIwc0FZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRyMnA0ZmpNc0NYSUNaaG1KVlRUd01aTVQyV0tjNmJJM2J3M2Q5WjBBQlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikwzc1NaWTBNbVpMcTA1aUdsRCtHQzJoRlNaT1hZU0lXVGV0R0RkQzZKVmJmaEJ4SnVoNXN1YU9wa2dSdDM2NFhYSm84RXBjS0tlNzYzbFQ4SEdROENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHNFBYQlpraG13dXZxYjYvTmFrSm9mdXFOaXZuaEcrU0h6UUVERmZnR3ZYZko4RGVWU1NwVXdIR1FHYmo4NXkvVllGN2N6Z0w3SlhmQ1lZYk5iQmtpdz09In0sIm1lIjp7ImlkIjoiOTE3NzM2OTYyOTA3OjQ2QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNzczNjk2MjkwNzo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRNjlxZUg0ekxBbHlBbVlaaVZVMDhER1RFOWxpbk9teU4yOE4zZldkQUFWIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEzMTkwMTc5fQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '𝗥  𝗢  𝗟  𝗘  𝗫  ୧⍤⃝💬',
  packname:  process.env.PACK_NAME || '𝞒𝞗𝙇𝞢𝞦',
  
  botname:   process.env.BOT_NAME === undefined ? "STAR-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'alexdavid' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝞒𝞗𝙇𝞢𝞦;𝗥  𝗢  𝗟  𝗘  𝗫  ୧⍤⃝💬•* ",   //*『sᴜʙsᴄʀɪʙᴇ •  ᴛᴇᴄʜ x』*\n https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'STAR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
