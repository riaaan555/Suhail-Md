const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745523322";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_33_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg1LFxuICAgICAgICA2MixcbiAgICAgICAgNzksXG4gICAgICAgIDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2NUFTTUZuMlpKQmJORUk1STY0QVRhMHYxNWREMkV5L0NmTGpheEJ6QWlNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGeVFmY2xaUFJzeVlzbzhNMk5UYmRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFhZjg2ZDA1LTgwMzktNDQ4YS04MmRiLTY0MGQwMWMzZGYzN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAxMyxcbiAgICAgIDI1LFxuICAgICAgMTMsXG4gICAgICA3NixcbiAgICAgIDE3NyxcbiAgICAgIDQ3LFxuICAgICAgNzgsXG4gICAgICAyMSxcbiAgICAgIDIyOSxcbiAgICAgIDIyOCxcbiAgICAgIDI1LFxuICAgICAgMTA4LFxuICAgICAgMTA0LFxuICAgICAgMTU0LFxuICAgICAgMjUxLFxuICAgICAgNDYsXG4gICAgICAyMDMsXG4gICAgICA0NSxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgOTEsXG4gICAgICAyMDYsXG4gICAgICAyMzYsXG4gICAgICAxMjYsXG4gICAgICAyMjAsXG4gICAgICA2MCxcbiAgICAgIDIyNCxcbiAgICAgIDEyOCxcbiAgICAgIDM0LFxuICAgICAgNzIsXG4gICAgICAyNCxcbiAgICAgIDEyOSxcbiAgICAgIDIwMSxcbiAgICAgIDE4MyxcbiAgICAgIDQsXG4gICAgICA3NixcbiAgICAgIDE0NSxcbiAgICAgIDE1OCxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxIU0NSRkJaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDU1MjMzMjI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMzQ1MzI5Njc1MDYwNzoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMisrZFVDRU1EeTZiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpnN1dsZGdDeDJ4STlQbFJsMG5SOUNQeWtXTXBTd2JHWkIxbGVDcEpLUkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVRGQ1NtdllvL2l4RGdjYkh6dzlDSk1JaGJsOEpScnNlb1JUam5wQzg1b3JxU0kwQWVvTXVrOGFvU0VOUmhXU1pTRENlMGxsekxqV0MzczBITTJzQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVG52V2xQUlllb0o5UnREdkxMT1M1NlB5TmxSdGpqeXkxV3NuaC9yUmorZmV3enZua21vdVBIY1BWamlnbDZuT2tXOGJjUTNuRi9JWjBqUnBCdTVoaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1NTIzMzIyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzk5NjIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXNwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBc3AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPU0pwWGhZMEdSYXI3aThpbVBIa0lDQi9EZndEeGt4ZGJPZ1MrNUVWb0JVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzExOTMwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI5MDk1OTI1NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Synorita",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
