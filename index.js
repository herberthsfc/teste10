const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const { color, bgcolor } = require('./lib/color')
const { help } = require('./lib/help')
const { menu } = require('./lib/menu')
const { menuadmin } = require('./lib/menuadmin')
const { menupremium } = require('./lib/menupremium')
const { serpremium } = require('./lib/serpremium')
const { pagar } = require('./lib/pagar')
const { termosvip } = require('./lib/termosvip')
const { regras } = require('./lib/regras')
const { lshit } = require('./lib/lshit')
const { listcovid } = require('./lib/listcovid')
const { donate } = require('./lib/donate')
const { idiomas } = require('./lib/idiomas')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { nad } = require('./language')
const kagApi = require('@kagchi/kag-api')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const fetch = require('node-fetch')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const imageToBase64 = require('image-to-base64')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const antishit = JSON.parse(fs.readFileSync('./database/json/antishit.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const gadorandom = JSON.parse(fs.readFileSync('./database/json/gado.json'))
const eusourandom = JSON.parse(fs.readFileSync('./database/json/eusou.json'))
const gayrandom = JSON.parse(fs.readFileSync('./database/json/gay.json'))
const gostosarandom = JSON.parse(fs.readFileSync('./database/json/gostosa.json'))
const amorrandom = JSON.parse(fs.readFileSync('./database/json/amor.json'))
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const apikeyG = '8b3591aa6c8d36a033b4d8dd46b68834';
const ZeksApi = 'apivinz';
const zeksApi = 'apivinz';
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Herberth\n' 
            + 'ORG: Duarte;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=5511996237647:+55 (11) 99623-7647\n' 
            + 'END:VCARD' 
prefix = '/'
blocked = []          

/********** LOAD FILE **************/

/********** END FILE ***************/
  
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const bulan = arrayBulan[moment().format('MM') - 1]
const config = {
    XBOT: 'ᏴϴͲ ᎠႮ ᏦᎬᏦᎬ', 
    instagram: 'https://www.instagram.com/kaic_de_paula?r=nametag', 
    nomer: 'wa.me/5511973027044',
    youtube: 'https://youtube.com/channel/UC2a7N-vZ5xrDF-0nfcaUspw', 
    whatsapp: 'Comming soon', 
    tanggal: `TANGGAL: ${moment().format('DD')} ${bulan} ${moment().format('YYYY')}`,
    waktu: time
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Hora(s) ${pad(minutes)} Minuto(s) ${pad(seconds)} Segundo(s)`
}


const { tanggal, waktu, instagram, whatsapp, youtube, nomer, ontime } = config



const { exec } = require("child_process")

const client = new WAConnection()

client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready, subrek dulu yak ambipi team`)
})

client.on('credentials-updated', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')

client.connect();

// client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by ig:@affis_saputro123`)

client.on('group-participants-update', async (anu) => {
		const mdata = await client.groupMetadata(anu.jid)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata.id, 'Proibido numeros fakes, Tchau! 👋', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return

		try {

			const mdata = await client.groupMetadata(anu.jid)

			console.log(anu)

			if (anu.action == 'add') {

				num = anu.participants[0]

				teks = `Olá @${num.split('@')[0]} , Seja bem vindo(a) ao grupo *${mdata.subject}*`

				client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})

			} else if (anu.action == 'remove') {

				num = anu.participants[0]

				teks = `1 Minuto de silencio para a saída do(a) corno(a) @${num.split('@')[0]} 👋🐂`

				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})

			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '*❬⚡❭ Aguarde, Carregando...*',
				success: '️*Concluído com sucesso ❬ ✓ ❭*',
				error: {
					stick: '*Aconteceu um erro, tente novamente!*',
					Iv: 'Desculpe, o link está inválido☹️'
				},
				only: {
					group: '*❬❗️❭ Este comando só pode ser ultilizado em grupos!*',
					ownerG: '*❬❗❭ Este comando só pode ser ultilizado pelo proprietário do bot!*',
					ownerB: '*❬💂❭ Este comando só pode ser ultilizado pelo proprietário do bot!*',
					admin: '*❬👮❭ Este comando só pode ser ultilizado por adms do grupo, seu membro comum! 🖕*',
					Badmin: '*❬🤖❭ O Bot precisa de adm para cumprir as funções!*',
					publikG: '*[❕] Desculpe, o Bot está privado no momento. Nenhum membro pode acessar meus comandos!*'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["5511996237647@s.whatsapp.net"] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false 
			const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
			const isAntiShit = isGroup ? antishit.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = premium.includes(sender)
			const isBanned = ban.includes(sender)
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
            const addATM = (sender) => {
                const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (sender) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const confirmATM = (sender, amount) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('*Por você ser adm do grupo, não vou te remover dessa vez, ok?!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*⊘ | LINK DETECTADO!* \n*Número:* ${sender.split("@")[0]} \n*Ação:* removido(a) com sucesso!`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
	}
	if (messagesC.includes("macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('*Por você ser adm do grupo, não vou te remover dessa vez, ok?!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*✓ | Racista fdp ${sender.split("@")[0]} removido(a) com sucesso!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
	}
	if (messagesC.includes("macaca")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('*Por você ser adm do grupo, não vou te remover dessa vez, ok?!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*✓ | Racista fdp ${sender.split("@")[0]} removido(a) com sucesso!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
	}
	if (messagesC.includes("cala boca macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('*Por você ser adm do grupo, não vou te remover dessa vez, ok?!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*✓ | Racista fdp ${sender.split("@")[0]} removido(a) com sucesso!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
	}
	if (messagesC.includes("mamaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('*Por você ser adm do grupo, não vou te remover dessa vez, ok?!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*✓ | Racista fdp ${sender.split("@")[0]} removido(a) com sucesso!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
	}
	if (messagesC.includes("preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('*Por você ser adm do grupo, não vou te remover dessa vez, ok?!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*✓ | Racista fdp ${sender.split("@")[0]} removido(a) com sucesso!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
	}
	if (messagesC.includes("vsf")){
		if (!isGroup) return
		if (!isAntiShit) return
		if (isGroupAdmins) return reply('*Você é adm do grupo, por favor, tenha modos!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*✓ | Palavrão detectado ${sender.split("@")[0]} , por favor, evite falar palavras tóxicas!*`)
		setTimeout( () => {
        client.updatePresence(from, Presence.composing)
		}, 0)
	}
	if (messagesC.includes("fdp")){
		if (!isGroup) return
		if (!isAntiShit) return
		if (isGroupAdmins) return reply('*Você é adm do grupo, por favor, tenha modos!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*✓ | Palavrão detectado ${sender.split("@")[0]} , por favor, evite falar palavras tóxicas!*`)
		setTimeout( () => {
        client.updatePresence(from, Presence.composing)
		}, 0)
	}
	if (messagesC.includes("vadia")){
		if (!isGroup) return
		if (!isAntiShit) return
		if (isGroupAdmins) return reply('*Você é adm do grupo, por favor, tenha modos!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*✓ | Palavrão detectado ${sender.split("@")[0]} , por favor, evite falar palavras tóxicas!*`)
		setTimeout( () => {
        client.updatePresence(from, Presence.composing)
		}, 0)
	}
	if (messagesC.includes("pqp")){
		if (!isGroup) return
		if (!isAntiShit) return
		if (isGroupAdmins) return reply('*Você é adm do grupo, por favor, tenha modos!*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*✓ | Palavrão detectado ${sender.split("@")[0]} , por favor, evite falar palavras tóxicas!*`)
		setTimeout( () => {
        client.updatePresence(from, Presence.composing)
		}, 0)
	}
	if (messagesC.includes("bot")){
			client.updatePresence(from, Presence.composing)
			reply("O único bot aqui sou eu, por que invocou meu precioso nome em vão?!")
	}
	
		if (messagesC.includes("zzxxxww")){
			client.updatePresence(from, Presence.composing)
			reply("kkkkkk")
	}

				if (messagesC.includes("oii")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/ola.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("videoehddit")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/laranjinha.mp4');
            client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})

	}
	
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Sticker'; if (!author) author = 'HDBOT';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
				case 'helrygf': 
				case 'menjfdh':
					if (isGroup) return  reply( '*⊘ | Comando disponível apenas no privado do hdbot!*')
					client.sendMessage(from, help(prefix), text)
					break
				  case 'kic':
					if (!isOwner) return reply(nad.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Número ${bnnd} banido`)
					break
				case 'unkic':
					if (!isOwner) return reply(nad.ownerb())
					ya = body.slice(8)
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Número ${ya} desbanido!`)
					break
					case 'menu':
					if (isBanned) return reply(nad.baned())
					if (!isGroup) return reply(mess.only.group)
					client.sendMessage(from, menu(prefix, pushname, sender), text, {quoted: mek})
				    contextInfo: { mentionedJid: [sender] }
				    break
				  case 'menuadmin':
				  if (!isGroupAdmins) return reply(mess.only.admin)
				  if (!isGroup) return reply(mess.only.group)
		      client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
				  break
				  case 'menupremium':
		      if (!isPrem) return reply(nad.premium())
		      client.sendMessage(from, menupremium(prefix, sender), text, {quoted: mek})
				  break
				  case 'serpremium':
				  case 'ser.premium':
		      client.sendMessage(from, serpremium(prefix, sender), text, {quoted: mek})
				  break
				  case 'pagar':
					if (isGroup) return  reply( '*❬❗❭ Este comando está disponível apenas no privado do bot!*')
					client.sendMessage(from, pagar(prefix, sender), text, {quoted: mek})
				  break
				  case 'termosvip':
		      client.sendMessage(from, termosvip(prefix, sender), text, {quoted: mek})
				  break
				  case 'regrasgp':
				  case 'regras':
					if (isBanned) return reply(nad.baned())
					if (!isGroup) return reply(mess.only.group)
					client.sendMessage(from, regras(prefix, sender), text, {quoted: mek})
				  break
				  case 'lshit':
					if (!isGroup) return reply(mess.only.group)
					client.sendMessage(from, lshit(prefix, sender), text, {quoted: mek})
				  break
				  case 'donate':
					if (isBanned) return reply(nad.baned())
					client.sendMessage(from, donate(prefix, sender), text, {quoted: mek})
				  break
				  case 'idiomas':
					if (isBanned) return reply(nad.baned())
					if (!isGroup) return reply(mess.only.group)
					client.sendMessage(from, idiomas(prefix, sender), text, {quoted: mek})
				  break
				  case 'on':
                  case 'ativo':
                  if (isBanned) return reply(nad.baned())
                  client.updatePresence(from, Presence.composing) 
				  uptime = process.uptime()
                    client.sendMessage(from, `*O bot está ativo há* *${kyun(uptime)}* ✓`, text, { quoted: mek})
                    break
				case 'donhj':
				case 'djjh':
					client.sendMessage(from, donasi(), text)
				break
				case 'info':
					if (isBanned) return reply(nad.baned())
					me = client.user
					uptime = process.uptime()
					teks = `*Nome* : ${me.name}\n*Número* : @${me.jid.split('@')[0]}\n*Sigla:* : ${prefix} \n*Insta:* @herberthsfc \n*Bloqueados* : ${blocked.length} \n\n Respeita ou peita 🤠👍🏿`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'infogp':
					case 'infogrupo':
				if (isBanned) return reply(nad.baned())
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Grupo :* ${groupName} \n *Admins:* ${groupAdmins.length} \n *Membros:* ${groupMembers.length} \n *Descrição:* ${groupDesc}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
					case 'perfil':
					if (isBanned) return reply(nad.baned())
					if (!isGroup)return reply(mess.only.group)
					client.updatePresence(from, Presence.composing)
				    try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `*[ SEU PERFIL ]* \n\n *📝|NOME: ${pushname}* \n *🤠|MEMBRO:* Sim! \n *📱|LINK: wa.me//${sender.split("@")[0]}* \n\n *_HDBOT.exe_* ⚡`
					daftarimg = await getBuffer(ppimg)
					client.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					break
				case 'bloqueados': 
					teks = 'Bloqueados :\n'
					for (let block of blocked) {
						teks += `➢ @${block.split('@')[0]}\n`
					}
					teks += `total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'delete':
				case 'del':
						if (!isPrem) return reply(nad.premium())
						client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
						break
				case 'cantar1':
                    if (isBanned) return reply(nad.baned())
                    tujuh = fs.readFileSync('./assets/cantar1.mp3');
                    client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                case 'normal':                 
					if (isBanned) return reply(nad.baned())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
                case 'slow':
                if (isBanned) return reply(nad.baned())
                encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
                    case 'esquilo':
					if (isBanned) return reply(nad.baned())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'tupai':
                    if (isBanned) return reply(nad.baned())
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
                    if (isBanned) return reply(nad.baned())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
                    if (isBanned) return reply(nad.baned())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'diabolico':                 
					if (isBanned) return reply(nad.baned())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=3:width_type=o:width=50:g=80 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'estourar':                 
					if (isBanned) return reply(nad.baned())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=200:width_type=o:width=200:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
                    case 'plogo':
                    if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*⏰ | Carregando, por favor, aguarde um momento...*')
					buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=18&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'letxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*⏰ | Carregando, por favor, aguarde um momento...*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-23T231504.507.jpeg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=8%25&text.0.position.y=30%25&text.0.size=30&text.0.color=0800ff&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=northwest&text.1.position.x=7%25&text.1.position.y=30%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
					case 'ssweb':
                    if (isBanned) return reply(nad.baned())
					if (!isGroup)return reply(mess.only.group)
					lxrd = body.slice(6)
                    data = await fetchJson(`https://screenshotapi.net/api/v1/screenshot?url=${lxrd}`, {method: 'get'})
                    if (data.error) return reply(data.error)
                    kiny = `Print do site ${lxrd}\n\n *URL:* ${data.url}\n *DATA:* ${data.created_at}`
                    buffer = await getBuffer(data.screenshot)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: kiny})
                    await limitAdd(sender)
                    break
                    case 'nulis':			
				    if (!isPrem) return reply(nad.premium())
				    if (args.length < 1) return reply(ind.wrongf())
				    ct = body.slice(6)
				    reply('*❬❗❭ Carregando, Aguarde...*')
				    ct = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${ct}&apikey=apivinz`)
				    client.sendMessage(from, ct, image, { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "NULIS", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpeg')} } }, {caption: 'Nih kak udah jadi..', quoted: mek})
				    break
					case 'plaquinha1':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/plaquinha1.jpg?text.0.text=${teks}&text.0.position.x=-35%25&text.0.position.y=-69%25&text.0.size=30&text.0.color=000000&text.0.opacity=55&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Plaquinha concluída com sucesso ✓*'})
					break
					case 'plaquinha2':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/plaquinha2.jpg?text.0.text=${teks}&text.0.position.x=-46%25&text.0.position.y=-16%25&text.0.size=30&text.0.color=000000&text.0.opacity=55&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Plaquinha concluída com sucesso ✓*'})
					break
					case 'googletxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/googletxt.jpg?text.0.text=${teks}&text.0.position.x=-55%25&text.0.position.y=-45%25&text.0.size=24&text.0.color=000000&text.0.opacity=94&text.0.font.family=Oswald&text.0.background.opacity=1`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Pesquisa concluída com sucesso ✓*'})
					break
					case 'xvideostxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/xvideostxt.jpg?text.0.text=${teks}&text.0.position.x=-46%25&text.0.position.y=-68%25&text.0.size=24&text.0.color=000000&text.0.opacity=90&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Pesquisa concluída com sucesso ✓*'})
					break
					case 'cadernotxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/cadernotxt.jpg?text.0.text=${teks}&text.0.position.x=-49%25&text.0.position.y=-78%25&text.0.size=24&text.0.color=000000&text.0.opacity=90&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Concluída com sucesso ✓*'})
					break
					case 'miatxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/miatxt.jpg?text.0.text=${teks}&text.0.position.x=-35%25&text.0.position.y=-32%25&text.0.size=18&text.0.color=000000&text.0.opacity=60&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Plaquinha concluída com sucesso ✓*'})
					break
					case 'pvittartxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/pvittartxt.jpg?text.0.text=${teks}&text.0.position.x=-46%25&text.0.position.y=-35%25&text.0.size=30&text.0.color=000000&text.0.opacity=55&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Plaquinha concluída com sucesso ✓*'})
					break
					case 'leaologo':
					if (!isPrem) return reply(nad.premium())
					nobg = `${body.slice(9)}`
					no = nobg.split("/")[0];
					bg = nobg.split("/")[1];
					reply('*Estou fazendo Aguarde...*')
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=303317918cbd497b094a7ad6&text1=${no}&text2=${bg}`, { method: 'get' })
					client.sendMessage(from, buffer, image, { quoted: mek, caption: '*Aqui está*' })
					await limitAdd(sender)
					break
					case 'grafit':
					if (!isPrem) return reply(nad.premium())
					nobg = `${body.slice(7)}`
					no = nobg.split("/")[0];
					bg = nobg.split("/")[1];
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/wallgravity?apikey=303317918cbd497b094a7ad6&text1=${no}&text2=${bg}`, { method: 'get' })
					client.sendMessage(from, buffer, image, { quoted: mek, caption: '*Aqui Está*' })
					await limitAdd(sender)
					break
                case 'pngtxt':
                case 'dnobg':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*[❕] Carregando...*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${teks}&text.0.position.gravity=center&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Concluído com sucesso ✓*'})
					break
               case 'placa':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${teks}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Concluído com sucesso ✓*'})
					break
               case 'freef':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*❬❗❭ Carregando, Aguarde...*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/epep?text=${teks}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Concluído com sucesso ✓*'})
					break
					case 'logohub':
		    	    if (!isPrem) return reply(nad.premium())
		    	    daddy = `${body.slice(8)}`
		    	    no = daddy.split("/")[0];
		    	    bg = daddy.split("/")[1];
		     	    reply('*❬❗❭ Carregando, Aguarde...*')
		    	    buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${no}&msg=${bg}`, {method: 'get'})
			        client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Concluído com sucesso ✓*'})
					break
					case 'iplog':
                    if (!isPrem) return reply(nad.premium())
                    teks = body.slice(7)
                    anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${teks}`)
			        ipl = `🔎 CONSULTA IP

➽ *CIDADE:* ${anu.city}
➽ *Latitude*: ${anu.latitude}
➽ *Longtitude*: ${anu.longitude}
➽ *REGIÃO*: ${anu.region_name}
➽ *UF*: ${anu.region_code}
➽ *IP*: ${anu.ip}
➽ *TIPO*: ${anu.type}
➽ *CEP*: ${anu.zip}
➽ *LOCALIDADE*: ${anu.location.geoname_id}
➽ *CAPITAL*: ${anu.location.capital}
➽ *DDD*: ${anu.location.calling_code}
➽ *PAÍS*: ${anu.location.country_flag_emoji} 

*_HDBOT.exe_*`
			        reply(ipl)
					break
                case 'testte':
                    tujuh = fs.readFileSync('./assets/teste.webp');
                    client.sendMessage(from, tujuh, sticker, {quoted: mek})
                    break
					case 'addprem':
					if (!isOwner) return reply(nad.ownerb())
					addp = body.slice(10)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Sucesso adicionado ${addp} ao Premium`)
					break
				case 'kickprem':
					if (!isOwner) return reply(nad.ownerb())
					oh = body.slice(11)
					delp = premium.indexOf(oh)
					premium.splice(delp, 1)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Excluido com sucesso ${oh} da Lista Premium`)
					break
					case 'listapremium':
					case 'premiumlist':
					if (isBanned) return reply(nad.baned())
					client.updatePresence(from, Presence.composing) 
					teks = `╭─「 *USUÁRIOS PREMIUM* 」\n`
					no = 0
					for (let prem of premium) {
						no += 1
						teks += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					teks += `│ Número de Usuarios Premium: ${premium.length}\n╰──────「 *HDBOT* 」`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
                case 'notifyy':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
                    case 'lofi':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hZBPRo16fIhsIus3t1je2oAU23pQqBpfw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '️amoo lofi'})
					break
					case 'baiano0r':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/oaJFGaX.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*DDD 70,71,72,73,74,75,76,77😴*'})
					break
					case 'porno':
					if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
					if (!isPrem) return reply(nad.premium())
					reply(mess.wait)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://1.bp.blogspot.com/-hTK6rhpNEIg/YEYhcsOBGEI/AAAAAAAAAuo/TMqLxi3IWqsp1M0XJF3R6V7BQLnCSoAJQCNcBGAsYHQ/s1721/PicsArt_03-08-10.05.56.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*MELHORES SITES PORN/+18!*😳 \naproveite com moderação! hihi\n\n1- www.xvideos.com\n2- www.xhamster.com\n3- www.xnxx.com\n4- www.pornhub.com\n5- www.redtube.com\n6- www.youporn.com\n7- www.snapdo.com\n8- www.livejasmin.com\n9- www.youjizz.com\n10- www.tube8.com\n11- www.dmm.co.jp\n12- www.hardsextube.com\n13- www.e-hentai.org\n14- www.beeg.com\n15- www.pornodeanaogay.com\n\n    𝑯𝑫𝑩𝑶𝑻.𝒆𝒙𝒆'})
					break
					case 'indijjo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/5wVbBeh.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*DDD 90,91,92,93,94,95,96,97,98,99*'})
					break
					case 'xvideos':
					if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
					if (!isPrem) return reply(nad.premium())
              	    if (args.length < 1) return reply('*Digite o que você quer ver no Xvideos!*')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Título: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	break
					case '0mem3':
		    client.updatePresence(from, Presence.composing) 
		    if (!isGroup) return reply(mess.only.group)
			data = fs.readFileSync('./lib/meme.js');
            jsonData = JSON.parse(data);
            randIndex = Math.floor(Math.random() * jsonData.length);
            randKey = jsonData[randIndex];
            meme = await getBuffer(randKey.result)
            client.sendMessage(from, meme, image, {quoted: mek, caption: '🔍 | 𝘔𝘦𝘮𝘦 𝘙𝘦𝘨𝘦𝘥𝘪𝘵'})
			break
			case 'meme':
			if (isBanned) return reply(nad.baned())
			if (!isGroup) return reply(mess.only.group)
			reply(mess.wait)
			anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEMESBRASIL`, {method: 'get'})
			ri = JSON.parse(JSON.stringify(anu));
			ze =  ri[Math.floor(Math.random() * ri.length)];
			nye = await getBuffer(ze)
			client.sendMessage(from, nye, image, { caption: '🔎 | _Meme Regedit_️', quoted: mek })
			break 
          case 'gado000':
          reply('*⏰ | Carregando, por favor, aguarde um momento...*')
          if (args.length < 1) return reply('Um gado foi encontrado, cuidado, ele não pode ver uma mulher!')
          break
          case 'iris':
					if (isBanned) return reply(nad.baned())
					hobby = body.slice(1)
					const hob =['Oi rsrs','Sim, Eu acho','Não sei dizer','Sefodê mlkkkkk','Por quê?','Sei lá','Eu não quero falar sobre isso','Foda-se','Voce é uma gostosa','kkkkkk','Não fala comigo','Pesquisa no google','Lixo','Meu pau','Eu acho que voce tentou ser engraçado(a)','Eu quero comer uma bolacha','Fdp','Corno','A verdade é que voce é corno','Vai se foder','Cala a boca vadia','Linda só verdades','Voce só me faz pergunta bosta','Estou triste, manda audio pelada','Não entendi o que você quis dizer']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pergunta : *'+hobby+'*\n\nResposta : '+ by, text, { quoted: mek })
					break
					case 'moddroid':
				  if (!isPrem) return reply(nad.premium())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*• Título*: ${data.result[0].title}\n\n*• Criador*: ${hepi.publisher}\n\n*• Mod:* ${hepi.mod_info}\n\n*• Peso*: ${hepi.size}\n\n*• Última versão*: ${hepi.latest_version}\n\n*• Gênero*: ${hepi.genre}\n\n*Link:* ${hepi.link}\n\n*Download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'happymod':
			if (!isPrem) return reply(nad.premium())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'gplaystore':
            if (!isPrem) return reply(nad.premium())
            client.updatePresence(from, Presence.composing)
            goo = body.slice(12)
            try {
            data = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${goo}`, {
            method: 'get'
            })
            teks = '*Google Play Store*\n\n'
            for (let i of data.result) {
            teks += `        ────────────────\n\n‣ *Nome* : ${i.title}\n‣ *Desenvolvedor* : ${i.developer}\n‣ *Avaliação* : ${i.rating}\n‣ *Link* : ${i.url}\n\n`
            }
            teks += `        ────────────────`
            reply(teks.trim())
            } catch {
            reply('Parece que o recurso está errado')
            }
            break            	
            case 'apkpure':
            if (!isPrem) return reply(nad.premium())
            client.updatePresence(from, Presence.composing)
            goo = body.slice(12)
            try {
            data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${goo}&apikey=apivinz`, {
            method: 'get'
            })
            teks = '*Apk Pure*\n\n'
            for (let i of data.result) {
            teks += `        ────────────────\n\n‣ *Nome* : ${i.title}\n‣ *Desenvolvedor* : ${i.developer}\n‣ *Avaliação* : ${i.rating}\n‣ *Link* : ${i.url}\n\n`
            }
            teks += `        ────────────────`
            reply(teks.trim())
            } catch {
            reply('Parece que o recurso está errado')
            }
            break
			case 'ping':    
			if (isBanned) return reply(nad.baned())
			if (!isGroup) return reply(mess.only.group)
            const timestamp = speed();
            const latensi = speed() - timestamp
            client.updatePresence(from, Presence.composing) 
		    uptime = process.uptime()
            client.sendMessage(from, `_Velocidade: ${latensi.toFixed(4)} milissegundos_ ✓`, text, { quoted: mek})
            break
			case 'darjkdkjokes':
		    client.updatePresence(from, Presence.composing) 
		    if (!isGroup) return reply(mess.only.group)
			reply(mess.wait)
			data = fs.readFileSync('./lib/drak.js');
            jsonData = JSON.parse(data);
            randIndex = Math.floor(Math.random() * jsonData.length);
            randKey = jsonData[randIndex];
            darkjokes = await getBuffer(randKey.result)
            client.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
			await limitAdd(sender) 
			break
			case 'repetir':
			case 'repeat':
            if (!isPrem) return reply(nad.premium())
            teks = body.slice(8)
            if (args.length < 1) return reply('onde está o texto mana?')
            saying = teks
            client.sendMessage(from, saying, text)
            break
            case 'camuflar':
            case 'bitly':					
			if (!isPrem) return reply(nad.premium())
			if (args.length < 1) return reply('*Qual O Link Que Deseja?*\n\n*Nem Todos Os Links São Camuflados, Evite Links Grandes*')
			reply(mess.wait)
			client.updatePresence(from, Presence.composing)
			anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=Tobz2k19`, {method: 'get'})
			if (anu.error) return reply('*_Ocorreu Um Erro, Verifique Se O Link Está Correto_*')
			hasil = `*Link Original:*\n*${args[0]}*\n\n*Link Camuflado:*\n*${anu.result}*\n\n*_HDBOT.exe_*`
		    reply(hasil) 
			break
			case 'gerarcpf':
			case 'geradorcpf':
            if (!isPrem) return reply(nad.premium())
            boxx = await fetchJson(`http://geradorapp.com/api/v1/cpf/generate?token=0b858b5f15ae2e7eecad6aa3973d4db3`)
            box =  `*🔎 CPF GERADO!*\n➽ *CPF*: *${boxx.data.number}*\n➽ *FORMATO*: *${boxx.data.number_formatted}*\n➽ *MENSAGEM*: *${boxx.data.message}*\n\n*_HDBOT.exe_*`
            client.sendMessage(from, box, text, {quoted: mek})
            break
            case 'gerarpessoa':
					if (!isPrem) return reply(nad.premium())
					reply(mess.wait)
					lucasss1 = await fetchJson(`https://pastebin.com/raw/UbxeQbtD`, {method: 'get'})
					lucasss = lucasss1[Math.floor(Math.random() * lucasss1.length)]
		            lucasss2 =  `*Nome :* *${lucasss.first_name}*\n*Nome Do Meio :* *${lucasss.last_name}*\n*Email :* *${lucasss.email}*\n*Gênero :* *${lucasss.gender}*\n*IP :* *${lucasss.ip_address}*`
                    client.sendMessage(from, lucasss2, text, {quoted: mek})
					break
            case 'bin':
					if (!isPrem) return reply(nad.premium())
					lxrd = body.slice(6)
                    data = await fetchJson(`https://binlist.io/lookup/${lxrd}`, {method: 'get'})
                    if (data.error) return reply(data.error)
                    kinybin = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *BIN:*  ${data.number.iin}\n ➸ *Bandeira* : ${data.scheme}\n ➸ *TIPO* : ${data.type}\n ➸ *Categoria* : ${data.category}\n ➸ *UF* : ${data.country.alpha2} \n ➸ *Sigla* : ${data.country.alpha3}\n ➸ *País* : ${data.country.name} ${data.country.emoji} \n ➸ *Banco* : ${data.bank.name} \n ➸ *URL* : ${data.bank.url}`
                    client.sendMessage(from, kinybin, text, {quoted: mek})
                    await limitAdd(sender)
                    break
            case 'cnpj':
					if (!isPrem) return reply(nad.premium())
					lxrd = body.slice(6)
                    data = await fetchJson(`https://www.receitaws.com.br/v1/cnpj/${lxrd}`, {method: 'get'})
                    if (data.error) return reply(data.error)
                    kinycnpj = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *ATIVIDADE PRINCIPAL:* ${data.atividade_principal[0].text} \n\n ➸ *DATA SITUAÇÃO:* ${data.data_situacao}\n\n ➸ *TIPO:* ${data.tipo} \n\n ➸ *NOME:* ${data.nome} \n\n ➸ *UF:* ${data.uf} \n\n ➸ *TELEFONE:* ${data.telefone}\n\n ➸ *SITUAÇÃO:* ${data.situacao} \n\n ➸ *BAIRRO:* ${data.bairro} \n\n ➸ *RUA:* ${data.logradouro} \n\n ➸ *NÚMERO :* ${data.numero} \n\n ➸ *CEP :* ${data.cep} \n\n ➸ *MUNICÍPIO:* ${data.municipio} \n\n ➸ *PORTE:* ${data.porte}\n\n ➸ *ABERTURA:* ${data.abertura}\n\n ➸ *NATUREZA JURÍDICA:* ${data.natureza_juridica} \n\n ➸ *FANTASIA:* ${data.fantasia}\n\n ➸ *CNPJ:* ${data.cnpj}\n\n ➸ *ÚLTIMA ATUALIZAÇÃO:* ${data.ultima_atualizacao}\n\n ➸ *STATUS:* ${data.status}\n\n ➸ *COMPLEMENTO:* ${data.complemento}\n\n ➸ *EMAIL:* ${data.email}`
                    client.sendMessage(from, kinycnpj, text, {quoted: mek})
                    await limitAdd(sender)
                    break
            case 'covidbr':
                    if (isBanned) return reply(nad.baned())   
					if (!isGroup) return reply(mess.only.group)
                    exeb = body.slice(9)
                    if (args.length < 1) return reply(`Qual estado você deseja consultar?\ninforme a sigla.\n\ncaso não saiba a sigla do seu estado,\ndigite ${prefix}listcovid ⚡🇧🇷`)
                   client.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${exeb}`)
                   if (data.error) reply('Você errou a sigla, verifique em *${prefix}lcovidbr*')
                   hasil = `*INFO. COVID BRASIL* 🦠 \n\n*Sigla do Estado* : *${data.uf}*\n*Estado* : *${data.state}*\n*Casos* : *${data.cases}*\n*Mortes* : *${data.deaths}*\n*Suspeitas* : *${data.suspects}*\n*Curados* : *${data.refuses}*\n*Data Atualizada* : \n*${data.datetime}*\n\n*_HDBOT.exe_ ⚡*`
                   reply(hasil) 
                   break
                   case 'listcovid':
					if (isBanned) return reply(nad.baned())
					if (!isGroup) return reply(mess.only.group)
					client.sendMessage(from, listcovid(prefix, sender), text, {quoted: mek})
				  break
            case 'fakemsg':
		            if (!isPrem) return reply(nad.premium())
			    	if (args.length < 1) return reply(`Uso :\n${prefix}fakemsg [@membro|mensagem|respostabot]]\n\nEx : \n${prefix}fakemsg @membro|eai|herberth`)
			    	var gh = body.slice(7)
			    	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			    	var replace = gh.split("/")[0];
			    	var target = gh.split("/")[1];
			    	var bot = gh.split("/")[2];
			    	client.sendMessage(from, `${bot}`, text, {
			     	quoted: {
			    	key: {
 			        fromMe: false, participant: `${mentioned}`, ...(from ? {
			    	remoteJid: from
			        }: {})
			    	}, message: {
	    	        conversation: `${target}`
			    	}}})
			    	break
            case 'gado':
            if (isBanned) return reply(nad.baned())
            if (!isGroup) return reply(mess.only.group)
            if (args.length < 1) return reply('Marque um gado!')
            reply('*[❕] Gado Localizado!*')
            hasil = gadorandom[Math.floor(Math.random() * (gadorandom.length))]
            client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
            case 'eusou':
            if (isBanned) return reply(nad.baned())
            if (!isGroup) return reply(mess.only.group)
            hasil = eusourandom[Math.floor(Math.random() * (eusourandom.length))]
            client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
            case 'dado':
			if (isBanned) return reply(nad.baned())
            if (!isGroup) return reply(mess.only.group)
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			client.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
            case 'emoji000':
            if (isBanned) return reply(nad.baned())
            if (!isGroup) return reply(mess.only.group)
            if (args.length == 0) return reply(`Uso: ${prefix + comando} A pergunta\nExemplo: ${prefix + command} 😭`)
            emoji = args[0]
            try {
            emoji = encodeURI(emoji[0])
            } catch {
            emoji = encodeURI(emoji)
            }
            buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=RamlanID`)
            client.sendMessage(from, buffer, sticker, { quoted: mek })
            break
            case 'emoji':
		     case 'sttc2':
		            if (isBanned) return reply(nad.baned())
		            if (!isGroup) return reply(mess.only.group)
		            reply(mess.wait)
                    if (args.length < 1) return reply('*_Qual o emoji da figurinha??_*\n*_Somente emojis padrões!')
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=RiuApikey`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
            case 'gerarnick': 
            if (isBanned) return reply(nad.baned())
            client.updatePresence(from, Presence.composing)
		    client.updatePresence(from, Presence.composing) 
		    data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
			teks = '=================\n'
			for (let i of data.result) {
			teks += `• Nick : ${i}\n=================\n`
			}
		    reply(teks.trim())
			break
            case 'gay':
            if (isBanned) return reply(nad.baned())
            if (!isGroup) return reply(mess.only.group)
            if (args.length < 1) return reply('Marque um gay!')
            hasil = gayrandom[Math.floor(Math.random() * (gayrandom.length))]
            client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
            case 'gostosa':
            if (isBanned) return reply(nad.baned())
            if (args.length < 1) return reply('Marque uma gostosa!')
            hasil = gostosarandom[Math.floor(Math.random() * (gostosarandom.length))]
            client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
            case 'casal':
					if (isBanned) return reply(nad.baned())
					if (!isGroup) return reply(ind.groupo())
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `*✾─❰ _NOVO CASAL DO GP_ ❱─✾*\n_Pense num casal apaixonado!!😍🤣_\n\n◐❯─┨♡ 👇 👇 ♡┠─❮◑\n@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} \n\n_Felicidades, e usem preservativos!🤰_`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
			case 'cassino':
                    let cassinao = ['🥥','🍒','🍉']
                    let resposta1 = cassinao[Math.floor(Math.random() * cassinao.length)]
                    let resposta2 = cassinao[Math.floor(Math.random() * cassinao.length)]
                    let resposta3 = cassinao[Math.floor(Math.random() * cassinao.length)]
                    if(resposta1==resposta2&&resposta2==resposta3){
                    client.sendMessage(from, `*💰-❮ _CASSINO HDBOT_ ❯-💰*\n_Bem vindo(a) Lindo(a)_\n\n┠➠ ${resposta1} - ${resposta2} - ${resposta3} \n\n *BOOA, ${pushname} VOCÊ GANHOU! AGORA PODE ME MAMAR!*`, text, {quoted: mek})
                    }
                    else if(resposta1==resposta2||resposta2==resposta3){
                    client.sendMessage(from, `*💰-❮ _CASSINO HDBOT_ ❯-💰*\n_Bem vindo(a) Lindo(a)_\n\n┠➠ ${resposta1} - ${resposta2} - ${resposta3} \n\n *Poxa, ${pushname} Não foi dessa vez...*`, text, {quoted: mek})
                    }
                    else{
                    client.sendMessage(from, `*💰-❮ _CASSINO HDBOT_ ❯-💰*\n_Bem vindo(a) Lindo(a)_\n\n┠➠ ${resposta1} - ${resposta2} - ${resposta3} \n\n *Quase, ${pushname} Tente outra vez...*`, text, {quoted: mek})
                    }
                    break
		   case 'gados':
					if (isBanned) return reply(nad.baned())
					if (!isGroup) return reply(ind.groupo())
					jds = []
					const jdiii = groupMembers
					const kosss = groupMembers
                    const qua = groupMembers
					const lindy = groupMembers
					const cinco = groupMembers
					const akuuu = jdiii[Math.floor(Math.random() * jdiii.length)]
					const diaaa = kosss[Math.floor(Math.random() * kosss.length)]
					const quatro = qua[Math.floor(Math.random() * qua.length)]
					const troot = lindy[Math.floor(Math.random() * lindy.length)]	
					const cincor = cinco[Math.floor(Math.random() * cinco.length)]										
					teks = `✾❯──❰ *RANKING* ❱──❮✾\n╔════•⊱✦⊰•════╗\n_Os 5 mais gados do grupo_\n╚════•⊱✦⊰•════╝\n┌──────────────\n🥇├ @${akuuu.jid.split('@')[0]}\n🥈├ @${diaaa.jid.split('@')[0]}\n🥉├ @${quatro.jid.split('@')[0]}\n🏅├ @${troot.jid.split('@')[0]}\n🏅├ @${cincor.jid.split('@')[0]}\n└──────────────\n\n *_HDBOT.exe_* ⚡`
					jds.push(akuuu.jid)
					jds.push(diaaa.jid)
					jds.push(quatro.jid)
					jds.push(troot.jid)		
					jds.push(cincor.jid)										
					mentions(teks, jds, true)
					break
            case 'tapao1':
				case 'slap':
				try {
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(nad.baned())
                var imgbb = require('imgbb-uploader')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Em quem você quer dar o tapa na cara >:] ?')
				mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				reply('*Preparando o tapa... 💪*')
                ghost = mek.participant
                try {
                pp = await client.getProfilePicture(ghost)
                } catch {
                pp = 'https://i.ibb.co/64dN6bQ/imgbb-20201220-WA0024.jpg'
                }
                media = await getBuffer(pp)
                datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                fs.writeFileSync('tapa.jpeg', datae, 'base64')
                res = await imgbb(`${apikeyG}`, 'tapa.jpeg')
                userf1 = `${res.display_url}`
                try {
				ppp = await client.getProfilePicture(`${mentidn.split('@')[0]}@s.whatsapp.net`)
				} catch {
				ppp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                media = await getBuffer(ppp)
                data2e = await imageToBase64(JSON.stringify(ppp).replace(/\"/gi, ''))
                fs.writeFileSync('tapa2.jpeg', data2e, 'base64')
                res2 = await imgbb(`${apikeyG}`, 'tapa2.jpeg')
                userf2 = `${res2.display_url}`
                buffer99 = await getBuffer(`https://api.zeks.xyz/api/slap?apikey=${zeksApi}&img1=${userf1}&img2=${userf2}`)
                client.sendMessage(from, buffer99, image, {quoted: mek, caption: `Você deu um tapa no(a) @${mentidn.split('@')[0]} 👋`, contextInfo: {mentionedJid: [mentidn]}})
                } catch (e) {
                console.log(`Error :`, color(e,'red'))
                }
				break
            case 'fatality':
            if (!isGroup) return reply(ind.groupo())
			if (isBanned) return reply(nad.baned())
            reply('*🗿- AGUARDE UM INSTANTE FI*') 
            fs.readdir('./gf/', async (err, files) => {
            let imagens = files.filter(f => f.split('.').pop() == 'mp4')
            let imagem = imagens[Math.floor(Math.random() * imagens.length)]
            dua = fs.readFileSync(`./gf/${imagem}`)
            var mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if(!mentioned||mentioned.length < 1||mentioned.length > 1) return client.sendMessage(from, 'Você precisa marcar alguém para esse comando', text, {quoted: mek})
            client.sendMessage(from, dua, video, {mimetype: Mimetype.gif, caption: `${pushname} *_~DEU UM FATALITY EM~_* ${body.split(' ').slice(1).join(' ')}`,quoted: mek, contextInfo: {"mentionedJid": mentioned}})
            })
            break
            case 'tapa':
            if (!isGroup) return reply(ind.groupo())
			if (isBanned) return reply(nad.baned())
            reply('*Preparando a mão...*') 
            fs.readdir('./tapa/', async (err, files) => {
            let imagens = files.filter(f => f.split('.').pop() == 'jpg')
            let imagem = imagens[Math.floor(Math.random() * imagens.length)]
            dua = fs.readFileSync(`./tapa/${imagem}`)
            var mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if(!mentioned||mentioned.length < 1||mentioned.length > 1) return client.sendMessage(from, 'Você precisa marcar alguém para esse comando', text, {quoted: mek})
            client.sendMessage(from, dua, image, {mimetype: Mimetype.jpg, caption: `*${pushname}* deu um tapa no(a) ${body.split(' ').slice(1).join(' ')} 👋`,quoted: mek, contextInfo: {"mentionedJid": mentioned}})
            })
            break
            case 'kiss':
            if (!isGroup) return reply(ind.groupo())
			if (isBanned) return reply(nad.baned())
            reply('*Aguarde...*') 
            fs.readdir('src/kiss/', async (err, files) => {
            let imagens = files.filter(f => f.split('.').pop() == 'jpg')
            let imagem = imagens[Math.floor(Math.random() * imagens.length)]
            dua = fs.readFileSync(`src/kiss/${imagem}`)
            var mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if(!mentioned||mentioned.length < 1||mentioned.length > 1) return client.sendMessage(from, 'Você precisa marcar alguém para esse comando', text, {quoted: mek})
            client.sendMessage(from, dua, image, {mimetype: Mimetype.jpg, caption: `*${pushname}* deu um beijo no(a) ${body.split(' ').slice(1).join(' ')} 😘`,quoted: mek, contextInfo: {"mentionedJid": mentioned}})
            })
            break
            case 'nazista':
            client.updatePresence(from, Presence.composing) 
            random = `${Math.floor(Math.random() * 101)}`
            hasil = `O quanto você é nazista\n\nVocê é: *${random}%* ALA O NAZISTA🇩🇪`
            reply(hasil)
            break
            case 'amor':
            if (isBanned) return reply(nad.baned())
            if (!isGroup) return reply(mess.only.group)
            hasil = amorrandom[Math.floor(Math.random() * (amorrandom.length))]
            client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
            case 'chekcep':
                    if (!isPrem) return reply(nad.premium())
                    data = await fetchJson(`https://viacep.com.br/ws/${body.slice(9)}/json/`, {method: 'get'})
                    brno = `*🔍CONSULTA FEITA🔍* \n\n *CEP:* ${data.cep} \n\n *ENDEREÇO:* ${data.logradouro} \n\n *COMPLEMENTO:* ${data.complemento} \n\n *BAIRRO:* ${data.bairro} \n\n *LOCALIDADE:* ${data.localidade} \n\n *UF:* ${data.uf} \n\n *DDD:* ${data.ddd} \n\n *Respeita ou peita*`
                    client.sendMessage(from, brno, text, {quoted: mek})
                    break
                case 'insta':
              if (!isPrem) return reply(nad.premium())
			  if (args.length < 1) return reply('*Infome o nome de usuário do perfil!*')
			  lucasss = body.slice(7)
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/stalk?username=${lucasss}&apikey=Tobz2k19`)
				reply(mess.wait)
				buffer = await getBuffer(anu.Profile_pic)
				teks = `*• Nome: ${anu.Name}*\n*• Usuário: ${anu.Username}*\n*• Seguidores: ${anu.Jumlah_Following}*\n*• Seguindo: ${anu.Jumlah_Followers}*\n*• Postagens: ${anu.Jumlah_Post}*\n*• Biografia: ${anu.Biodata}*\n\n*_HDBOT.exe_* ⚡`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				break
                  case 'criadorgp':
                  case 'ownergp':
				  case 'ownergroup':
               if (isBanned) return reply(nad.baned())
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `*Criador(a) do grupo: wa.me/${from.split("-")[0]}* \n\n *_HDBOT.exe_* ⚡`,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break
			case 'basegay':		
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%', text, { quoted: mek })
					break
                case 'bug':
                case 'reportar':
                case 'reportarbug':
                     if (isBanned) return reply(nad.baned())
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return client.sendMessage(from, '*「 ❗ 」 Texto muito longo!*', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[BUG REPORTADO]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nMOTIVO : ${pesan}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('5511996237647@s.whatsapp.net', options, text, {quoted: mek})
                    reply('*O bug foi reportado com sucesso ✓*')
                    break
					case 'membros':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					teks += `「 *${groupMembers.length} ᴹᵉᵐᵇʳᵒˢ* 」\n`
					for (let mem of groupMembers) {
						teks += `💉├ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'listonline':
        		if (!isGroupAdmins) return reply(mess.only.admin)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Usuarios online neste grupo\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
                case 'pokemon':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
                case 'dog':
                case 'auau':
                case 'cachorro':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
					break
                case 'shorturl':
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'fototiktok':
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${body.slice(8)}`)
			        buff = await getBuffer(anu.result)
                    reply(anu.result)
			        break
			    case 'map':
			case 'mapa': 
                if (isBanned) return reply(nad.baned())
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				break
				case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*Digite 1 para ativar*')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('*✓ | O Antilink ja está ativado!*')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('\`\`\`✓Ativado com sucesso o modo antilink neste grupo!\`\`\`')
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('*⊘ | Antilink desativado com sucesso!*')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('\`\`\`⊘Modo antilink desativado com sucesso neste grupo!\`\`\`️')
					} else {
						reply('*1 para ativar, 0 para desativar!*')
					}
					break
					case 'antiracismo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*Digite 1 para ativar*')
					if ((args[0]) === '1') {
						if (isAntiRacismo) return reply('O modo antiracismo já está ativo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === '0') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('1 para ativar, 0 para desligar')
					}
					break
					case 'antishit':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*Digite 1 para ativar*')
					if ((args[0]) === '1') {
						if (isAntiShit) return reply('O modo antishit já está ativo')
						antishit.push(from)
						fs.writeFileSync('./database/json/antishit.json', JSON.stringify(antishit))
						reply(`\`\`\`✓Ativado com sucesso o modo anti-palavrões no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === '0') {
						antishit.splice(from, 1)
						fs.writeFileSync('./database/json/antishit.json', JSON.stringify(antishit))
						reply(`\`\`\`✓Modo anti-palavrões desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('1 para ativar, 0 para desligar')
					}
					break
					case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
                        antifake.splice(from, 1)
                    fs.writeFileSync('./src/antifake', JSON.stringify(antifake))
                    reply('Modo antifake desativado com sucesso!️')
                    } else {
                    reply('1 para ativar, 0 para desativar')
                    }
					} catch {
				    reply('Deu erro, tente novamente :/')
					}
                    break
				case 'ocr': 
				case 'txtdafoto':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				    if (isBanned) return reply(nad.baned())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Escolha a foto para pegar os txt dela ${prefix} >-<')
					}
					break
				case 's':
				case 'fig':				
				case 'f':
				case 'stiker':	
				case 'sticker':	
				case 'figu':										
					if (isBanned) return reply(nad.baned())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('começando', function (cmd) {
								console.log(`Começando : ${cmd}`)
							})
							.on('erro', function (err) {
								console.log(`Erro : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Figurinha Feita')
								exec(`webpmux -set exif ${addMetadata('Sticker', 'HDBOT')} ${ran} -o ${ran}`, async (error) => {
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(230,iw)':min'(230,ih)':force_original_aspect_ratio=decrease,fps=15, pad=230:230:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('começando', function (cmd) {
								console.log(`Começando : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Figurinha Feita')
								exec(`webpmux -set exif ${addMetadata('Sticker', 'HDBOT')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(230,iw)':min'(230,ih)':force_original_aspect_ratio=decrease,fps=15, pad=230:230:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'IDxO1TFYnKADlX4pxcHa'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde✨🍉.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('Sticker', 'HDBOT')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie uma foto, gif ou vídeo de até 5 segundos com a legenda *${prefix}fig* para criar uma figurinha!`)
					}
					break
					case 'getsticker':
				case 'gets':
					if (!isOwner) return reply(mess.only.ownerB)
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
					case 'hdttp':                   
			     	if (isBanned) return reply(nad.baned())
			     	if (!isGroup) return reply(mess.only.group)
			     	if (args.length < 1) return reply(`*Digite o texto! \n\nExemplo: *${prefix}hdttp bot lindo*`)
                    url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		    		attp2 = await getBuffer(url)
			    	client.sendMessage(from, attp2, sticker, {quoted: mek})
			     	break
				case 'stickerlist':
				case 'liststicker':
					if (!isOwner) return reply(mess.only.ownerB)
					teks = '*Lista de Figurinhas :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isQuotedSticker) return reply('Marque o sticker pfv')
					svst = body.slice(12)
					if (!svst) return reply('Qual é o nome do adesivo?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Adicionando adesivo com sucesso\nVerificar pelo caminho ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
					case 'trigg':
					case 'ger':
                    if (isBanned) return reply(nad.baned())
                    if (!isGroup) return reply(mess.only.group)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply(mess.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(mess.error.stick)
                    nobg = fs.readFileSync(rano)
                    client.sendMessage(from, nobg, sticker, {quoted: mek})
                    fs.unlinkSync(rano)
                    })
                    } else {
                    reply('Use uma foto!')
                    }
                    break	
                    case 'wasted':
                    case 'was':
                    if (isBanned) return reply(nad.baned())
                    if (!isGroup) return reply(mess.only.group)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                    reply(mess.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(mess.error.stick)
                    nobg = fs.readFileSync(rano)
                    client.sendMessage(from, nobg, sticker, {
                    quoted: mek
                    })
                    fs.unlinkSync(rano)
                    })
                    } else {
                    reply('Use uma foto!')
                    }
                    break
                    case 'lgbt':
				    if (isBanned) return reply(nad.baned())
                    if (!isGroup) return reply(mess.only.group)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                    reply(mess.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(mess.error.stick)
                    nobg = fs.readFileSync(rano)
                    client.sendMessage(from, nobg, sticker, {
                    quoted: mek
                    })
                    fs.unlinkSync(rano)
                    })

                    } else {
                    reply('Use uma foto!')
                    }
                    break
                    case 'cry':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', { method: 'get' })
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, { quoted: mek })
						fs.unlinkSync(rano)
					})
					break
                    case 'sfire':
                    if (isBanned) return reply(nad.baned())
                    if (!isGroup) return reply(mess.only.group)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                    reply(mess.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ted)
                    tels = body.slice(7)
                    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                    haehe = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/burning-fire?url=${anu.display_url}`)
                    client.sendMessage(from, haehe, image, {quoted:mek})
                    } else {
                    reply('responda a imagem jovem!')
                    }
                    break
                    case 'laptop':
				    if (isBanned) return reply(nad.baned())
                    if (!isGroup) return reply(mess.only.group)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                    reply(mess.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ted)
                    tels = body.slice(7)
                    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                    dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
                    client.sendMessage(from, dhehe, image, {quoted:mek})
                    } else {
                    reply('Responda com uma foto jovem!')
                    }
                    break
                    case 'nightbeach':
				    if (isBanned) return reply(nad.baned())
                    if (!isGroup) return reply(mess.only.group)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                    reply(mess.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ted)
                    tels = body.slice(7)
                    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                    hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
                    client.sendMessage(from, hehpe, image, {quoted:mek})
                    } else {
                    reply('Responda com uma foto jovem!')
                    }
                    break
                    case 'drawing':
                    if (isBanned) return reply(nad.baned())
                    if (!isGroup) return reply(mess.only.group)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                    reply(mess.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ted)
                    tels = body.slice(7)
                    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
                    client.sendMessage(from, hehe, image, {quoted:mek})
                    } else {
                    reply('Não adicione nada ao comando')
                    }
                    break
				case 'gtts':	
				case 'tts':
				case 'audio':
					if (isBanned) return reply(nad.baned())
					if (!isGroup)return reply(mess.only.group)
					if (args.length < 1) return client.sendMessage(from, '*❬❗❭ Informe o idioma!\n\nExemplo: *${prefix}audio pt oi bot*', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, '*❬❗❭ Informe o texto deseja que eu diga!*', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('*❬😴❭ Texto muito longo, desculpe mas eu sou baianor!*')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('*Erro! tente novamente mais tarde*')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'prefixo':
				case 'sigla':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`❬✔️❭ O prefixo foi alterado com sucesso, para : ${prefix} `)
					break 	
				case 'hilih': 
					if (args.length < 1) return reply('qual txt deseja lindx?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'tiktokstalk':
				case 'tiktokperfil':
					try {
						if (args.length < 1) return client.sendMessage(from, '*「 ❗ 」 Informe o nome da pessoa!', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*nome* : ${user.uniqueId}\n*Nick* : ${user.nickname}\n*seguidores* : ${stats.followerCount}\n*seguindo* : ${stats.followingCount}\n*posts da conta* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*「 ❗ 」 Não foi encontrado!*')
					}
					break
				case 'clearall':
				case 'limpar':
				    if (!isOwner) return reply(mess.only.ownerB)
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('*❬✔️❭ Os chats foram limpos com sucesso!*')
					break
			       case 'bloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `*❬✔️❭ Bloqueado com sucesso* ${body.slice(7)}@c.us`, text)
					break
                    case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*❬✔️❭ Desbloqueado com sucesso* ${body.slice(9)}@c.us`, text)
				break
				case 'sair':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isOwner) return reply(nad.ownerb())
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, '*Vou sair do grupo, até mais rebanho de cornos! 🐂👋*', text) // ur cods
					}, 0)
                     break
				case 'ts': 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*❬🤖❭ _SUPORTE HDBOT.exe:_* ⚡\n\n${body.slice(4)}`})
						}
						reply('*❬✔️❭ Transmissão concluída com sucesso!*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*❬🤖❭ _SUPORTE HDBOT.exe:_* ⚡\n\n${body.slice(4)}`)
						}
						reply('*❬✔️❭ Transmissão concluída com sucesso!*')
					}
					break
					case 'plaghgy':   
	          if (!isPrem) return reply(nad.premium())
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*[ Música encontrada ✓]* \n*「 Título 」*: ${anu.result.title}\n*「 Tamanho 」* : ${anu.result.size}\n\n*Aguarde... caso não seja a musica que procura, tente específicar o título!*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                case 'musica':
                if (!isPrem) return reply(nad.premium())
                if(body.length < 6) return client.reply(from, 'Você precisa dizer a música', mek)
                res = (await fetchJson(`https://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`, {method: 'get'}))[0]
                asize = await fetchJson(`https://st4rz.herokuapp.com/api/yta?url=https://youtu.be/${res.id}`, {method: 'get'})
                if(asize.filesize.replace(' MB', '')>=16||asize.filesize.endsWith('GB')){
                client.reply(from, `O limite de tamanho é 16 MB. Esse áudio possui ${asize.filesize}`, mek)
                }
                else{
                thumb = await getBuffer(res.thumbnail)
                client.sendMessage(from, thumb, image, {quoted: mek, caption: '❬🎵❭ Baixando Musica...'})
                rest = await fetchJson(`http://st4rz.herokuapp.com/api/yta2?url=http://youtu.be/${res.id}`, {method: 'get'})
                buffer = await getBuffer(rest.result)
                client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
                }
                break
                case 'spotifybuscar':
                case 'spotifysearch':
                    if (!isPrem) return reply(nad.premium())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=RamlanID&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Título : ${get_result[x].title}\n`
                        txt += `Artista : ${get_result[x].artists}\n`
                        txt += `Duração : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Preview : ${get_result[x].preview_url}\n\n\n`
                    }
                    reply(txt)
                    break
                case 'ytmp4':
                    if (!isPrem) return reply(nad.premium())
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=RamlanID&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `➩ •Titulo : ${get_result.title}\n`
                    txt += `➩ •Uploader : ${get_result.uploader}\n`
                    txt += `➩ •Duração : ${get_result.duration}\n`
                    txt += `➩ •Views : ${get_result.view}\n`
                    txt += `➩ •Like : ${get_result.like}\n`
                    txt += `➩ •Deslike: ${get_result.dislike}\n`
                    txt += `➩ •Descrição :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytsearch':
					if (!isPrem) return reply(nad.premium())
		            query = args.join(" ")
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=RamlanID&query=${query}`, {method: 'get'})
					teks = '════════════\n'
					for (let i of anu.result) {
						teks += `➩ •Titulo: ${i.title}\n➩ •ID: https://youtu.be/${i.videoId}\n➩ •Publicados: ${i.published}\n➩ •Views: ${h2k(i.views)}\n════════════\n`
					}
					reply(teks.trim())
					break
                case 'mphs4':
                case 'ytmpshhs4':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply('Por favor, informe o link do video do Youtube!')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
					case 'letra':
                    if (isBanned) return reply(nad.baned())
				    if (!isGroup) return reply(mess.only.group)
                    reply('*❬❗❭ Carregando, Aguarde...*')
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('*Letra da musica* '+teks+' *é* :\n\n'+anu.result.lirik)
					break
					case 'pinterest':
					if (isBanned) return reply(nad.baned())
					if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*🔍 | Resultado da pesquisa!*`})
					break
                    case 'mia':
                    if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
					if (!isPrem) return reply(nad.premium())
                    reply('*Aguarde...*') 
                    fs.readdir('src/mia/', async (err, files) => {
                    let imagens = files.filter(f => f.split('.').pop() == 'jpg')
                    let imagem = imagens[Math.floor(Math.random() * imagens.length)]
                   dua = fs.readFileSync(`src/mia/${imagem}`)
                   client.sendMessage(from, dua, MessageType.image, {quoted: mek, caption: '*Aproveite com moderação!*'})
                   })
                   break
                   case 'tigresavip':
                    if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
					if (!isPrem) return reply(nad.premium())
                    reply('*Aguarde...*') 
                    fs.readdir('src/tigresavip/', async (err, files) => {
                    let imagens = files.filter(f => f.split('.').pop() == 'jpg')
                    let imagem = imagens[Math.floor(Math.random() * imagens.length)]
                   dua = fs.readFileSync(`src/tigresavip/${imagem}`)
                   client.sendMessage(from, dua, MessageType.image, {quoted: mek, caption: '*Aproveite com moderação!*'})
                   })
                   break
					case 'blowjob':
					if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
					if (!isPrem) return reply(nad.premium())
					reply(mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'hentaifig':
				   if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
				   if (!isPrem) return reply(nad.premium())
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				    case 'nekofig':
				    if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
				    if (!isPrem) return reply(nad.premium())
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'wa.me':
				  case 'wame':
				  if (isBanned) return reply(nad.baned())
				  if (!isGroup) return reply(mess.only.group)
          client.updatePresence(from, Presence.composing) 
      options = {
          text: `*Olá @${sender.split("@s.whatsapp.net")[0]} , seu link do Whatsapp é https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*_HDBOT.exe_* ⚡`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
			   	case 'perfilgp': 
                        if (!isGroup) return reply(mess.only.group)
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('*❬✔️❭ Perfil alterado com sucesso!*')
                break						
				case 'add':
				case 'adicionar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*⊘ | Por favor, informe o número do contato que deseja adicionar, não tenho bola de cristal!*')
					if (args[0].startsWith('08')) return reply('*⊘ | Informe o código do país!*')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('*⊘ | Não foi possível adicionar o contato, talvez o contato seja privado!*')
					}
					break
					case 'gp':
					case 'group':
					case 'grupo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'abrir') {
					    reply(`*❬✔️❭ Grupo aberto para todos os membros!*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`*❬🔒❭ Grupo fechado para todos os membros comuns!*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
            case 'admin':
            case 'owner':
            case 'creator':
            case 'criador':
            case 'dono':
                  if (isBanned) return reply(nad.baned())
                  client.sendMessage(from, {displayname: "Herberth", vcard: vcard}, MessageType.contact, { quoted: mek})
       client.sendMessage(from, '*Este é o contato do meu criador!*',MessageType.text, { quoted: mek} )
           break    
           case 'setname':
           case 'nomegp':
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '*❬✔️❭ O nome do grupo foi alterado com sucesso!*', text, {quoted: mek})
                break
                case 'setdesc':
                case 'desc':
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '*❬✔️❭ A descrição do grupo foi alterada com sucesso!*', text, {quoted: mek})
                break
           case 'demote':
           case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*⊘ | Marque o adm que deseja rebaixar para membro comum!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*✓ | Sucesso!* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(` @${mentioned[0].split('@')[0]} foi rebaixado(a) para membro(a) comum ⊘`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
				case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*⊘ | Marque o membro que voce deseja promover para adm!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*✓ | Sucesso!* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(` @${mentioned[0].split('@')[0]} foi promovido(a) a administrador(a) ✓`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
			case 'ban':
			case 'remover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*⊘ | Marque o membro que voce deseja remover!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*✓ | Removido(a) do grupo com sucesso!* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`*@${mentioned[0].split('@')[0]} foi removido(a) com sucesso ✓*`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				   case 'linkgroup':
				   case 'linkgp':
                      if (!isGroup) return reply(mess.only.group)
                      if (!isGroupAdmins) return reply(mess.only.admin)
                      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                      linkgc = await client.groupInviteCode(from)
                      reply('https://chat.whatsapp.com/'+linkgc)
                      break
				   case 'listadmins':
				   case 'adms':
				   case 'admsgp':
					 if (isBanned) return reply(nad.baned())
					 client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					teks = `👮 Administradores do grupo *${groupMetadata.subject}* \nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				case 'converter':
					if (!isQuotedSticker) return reply('*✓ | Marque uma figurinha!*')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('*⊘ | Tente novamente outra hora!')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*「 ✔️ 」*'})
						fs.unlinkSync(ran)
					})
					break
				case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('O modo nsfw já está ativo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Ativado com sucesso o modo +18 no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'welcome':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                    if (isWelkom) return reply('Já ativo.')
                    welkom.push(from)
                    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
                    reply('Modo de boas vindas ativo com sucesso!️')
                    } else if (Number(args[0]) === 0) {
                    welkom.splice(from, 1)
                    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
                    reply('Modo de boas vindas desativado com sucesso!️')
                    } else {
                    reply('1 para ativar, 0 para desativar')
                    }
                    break
				case 'clone':
				case 'clonar':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('*💎 | Comando disponível apenas para o proprietário do hdbot!*') 
					if (args.length < 1) return reply('*✓ | O perfil foi clonado com sucesso!*')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*✓*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`*✓ | O perfil foi clonado com sucesso! * @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('*⊘ | Infelizmente aconteceu um erro!*')
					}
					break
				case 'wait':
				case 'pesquisar':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(' *encontrei isso* ')
					}
					break
				default:
			if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
