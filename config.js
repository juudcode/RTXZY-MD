global.owner = ['6285742344873']  
global.mods = ['6285742344873'] 
global.prems = ['']
global.nameowner = 'Iyan'
global.numberowner = '6285742344873' 
global.mail = 'teruwoklaut@gmail.com' 
global.gc = 'https://whatsapp.com/channel/0029VaVJKMQ1t90hhLLawG2k' //'https://chat.whatsapp.com/CP5mV2D9IO730HpBgmkuyi'
global.sgc = 'https://whatsapp.com/channel/0029VaVJKMQ1t90hhLLawG2k'
global.instagram = 'https://instagram.com/iyanxvshit'
global.wm = '© Casper bot'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '2' // Peringatan maksimum
global.nomerbot = '6287848721488'
global.nomorwa = '6285742344873'
global.nameown = 'Iyan'
global.nomerown = '6285742344873'
global.namebot = 'Casper Bot'
//per imagean
global.ppKosong = 'https://i.ibb.co/3Fh9V6p/avatar-contact.png'
global.didyou = 'https://telegra.ph/file/d723e79cc63a19e6aeb26.jpg'
global.rulesBot = 'https://telegra.ph/file/1df2325bc0045a4769947.jpg'
// Ubah Foto Kamu Disni
global.thumbnail = 'https://telegra.ph/file/96bc76257b97dc255821f.jpg'
global.thumb = 'https://telegra.ph/file/96bc76257b97dc255821f.jpg'
global.logo = 'https://telegra.ph/file/50258d56b5cf27a7f8016.jpg'

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

// ambil .idgc ketik di grup lu 
// => m.chat 
global.idgc = '-'
// Donasi
global.psaweria = '-'
global.ptrakterr = '-'
global.pdana = '085742344873'
// Info Wait
global.wait = '*Tunggu sebentar..*'
global.eror = '*Terjadi Kesalahan*!'
global.multiplier = 100
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
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
