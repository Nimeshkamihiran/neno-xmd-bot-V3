const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *NIMESHKA MIHIRAN*

> *NENO XMD V3 REPO:*
*|* *https://github.com/Nimeshkamihiran/neno-xmd-bot-V3*

> *SUPPORT CHENNAL:*
*|* *https://whatsapp.com/channel/0029Vb6BQQmFnSz7bmxefu40*
*╰──────────────●●►*

> *CREATED BY NIMESHKA MIHIRAN*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "NENO",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SAN_MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Nimeshkamihiran/neno-xmd-bot-V3" ,
thumbnailUrl: "https://i.imgur.com/nqCsIHZ.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
