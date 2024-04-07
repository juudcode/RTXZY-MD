global.owner = ['6285742344873']  
global.mods = ['6285742344873'] 
global.prems = ['']
global.nameowner = 'Iyan'
global.numberowner = '6285742344873' 
global.mail = 'teruwoklaut@gmail.com' 
global.gc = 'https://whatsapp.com/channel/0029VaVJKMQ1t90hhLLawG2k' //'https://chat.whatsapp.com/CP5mV2D9IO730HpBgmkuyi'
global.sgc = 'https://whatsapp.com/channel/0029VaVJKMQ1t90hhLLawG2k'
global.instagram = 'https://instagram.com/iyanxvshit'
global.wm = '© MIKA BOT'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'ApiJuu' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'ApiJuu' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
