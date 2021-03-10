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
const { menuteste } = require('./lib/menuteste');
const { menuadmin } = require('./lib/menuadmin')
const { menupremium } = require('./lib/menupremium')
const { serpremium } = require('./lib/serpremium')
const { termosvip } = require('./lib/termosvip')
const { regras } = require('./lib/regras')
const { lshit } = require('./lib/lshit')
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
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const antishit = JSON.parse(fs.readFileSync('./database/json/antishit.json'))
const gadorandom = JSON.parse(fs.readFileSync('./database/json/gado.json'))
const eusourandom = JSON.parse(fs.readFileSync('./database/json/eusou.json'))
const gayrandom = JSON.parse(fs.readFileSync('./database/json/gay.json'))
const amorrandom = JSON.parse(fs.readFileSync('./database/json/amor.json'))
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
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*OLÁ* @${num.split('@')[0]} ,\n*SEJA BEM VINDO(A) AO GRUPO* *${mdata.subject}* \n\n✨ *APRESENTE-SE:* 🤠\n(SE QUISER)\n\n➽ _NOME_\n➽ _FOTO_\n➽ _IDADE_\n\nDigite 👉 *${prefix}regras*\nPara o Bot enviar as regras do Grupo!\n\n𝑯𝑫𝑩𝑶𝑻.𝐸𝑋𝐸✨\n──━━━━━━━━━━━━━──`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Tchau Corno(a)* @${num.split('@')[0]} 🐂👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
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
				wait: '*[❕] Carregando...*',
				success: '️*Concluído com sucesso ✓*',
				error: {
					stick: '*Aconteceu um erro, tente novamente outra hora!*',
					Iv: 'Desculpe, o link está inválido☹️'
				},
				only: {
					group: '*⊘ | Comando disponível apenas em grupos!*',
					ownerG: '*⊘ | Comando disponível apenas para o grupo proprietário!*',
					ownerB: '*⊘ | Comando disponível apenas para o proprietário do hdbot!*',
					admin: '*⊘ | Comando disponível apenas para admins, seu membro comum!*',
					Badmin: '*⊘ | O hdbot precisa de adm para cumprir as funções!*',
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
		if (isGroupAdmins) return reply('*💎 | Por voce ser administrador(a) do grupo, não irei te remover!*')
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
		if (isGroupAdmins) return reply('*💎 | Por voce ser administrador(a) do grupo, não irei te remover!*')
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
		if (isGroupAdmins) return reply('*💎 | Por voce ser administrador(a) do grupo, não irei te remover!*')
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
		if (isGroupAdmins) return reply('*💎 | Por voce ser administrador(a) do grupo, não irei te remover!*')
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
		if (isGroupAdmins) return reply('*💎 | Por voce ser administrador(a) do grupo, não irei te remover!*')
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
		if (isGroupAdmins) return reply('*💎 | Por voce ser administrador(a) do grupo, não irei te remover!*')
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
			reply("O único bot aqui sou eu... Poderia por obséquio me fazer saber por qual razão, motivo ou circunstância Vossa Excelência invocou o meu precioso nome em vão!?")
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
	
			if (messagesC.includes("videoedit")){
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
			switch(command) {
			case 'menuteste':
               if (!isOwner) return reply(nad.ownerb())
               me = client.user;
               user.push(sender);
               uptime = process.uptime();
               const menuteste = {
                  text: `      「 *_User info_* 」

» Name: ${pushname}
» Prefix: ${prefix}
» Registeed: √


      「 *_Fbot Official_* 」
      
Subscribe : 
https://youtube.com/channel/UCKnzdl1cYOqTnmKvDjvRaOA
Join Group :
https://chat.whatsapp.com/BziYhTyB1UT6Oo09S3c6Ha


      「 *_Fbot Info_* 」

» ${prefix}report
» ${prefix}info
» ${prefix}donasi
» ${prefix}oᴡne
» ${prefix}ᴄooᴡne
» ${prefix}speed
» ${prefix}daftar
» ${prefix}limit
» ${prefix}totaluse
» ${prefix}bloᴄklist
» ${prefix}banlist
» ${prefix}premiumlist
» ${prefix}bahasa

» ${prefix}setppbot
» ${prefix}bᴄ
» ${prefix}bᴄgᴄ
» ${prefix}ban
» ${prefix}unban
» ${prefix}bloᴄk
» ${prefix}unbloᴄk
» ${prefix}ᴄlearall
» ${prefix}delete
» ${prefix}ᴄlone
» ${prefix}leaᴠe


Create By _@fahmicog_`,

                  contextInfo: {
                     mentionedJid: [sender],
                  },
               };
               fahmi.sendMessage(from, menuteste, text, {
                  quoted: {
                     key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) },
                     message: {
                        imageMessage: {
                           url: 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                           mimetype: 'image/jpeg',
                           caption: 'Youtube : Fahmi Cog',
                           fileSha256: '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                           fileLength: '28777',
                           height: 1080,
                           width: 1079,
                           mediaKey: 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                           fileEncSha256: 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=',
                           directPath: '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69',
                           mediaKeyTimestamp: '1610993486',
                           jpegThumbnail: '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',
                           scansSidecar: '1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==',
                        },
                     },
                  },
               });
               break
				case 'helrygf': 
				case 'menjfdh':
					if (isGroup) return  reply( '*⊘ | Comando disponível apenas no privado do hdbot!*')
					client.sendMessage(from, help(prefix), text)
					break
				  case 'ban':
					if (!isOwner) return reply(nad.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Número ${bnnd} banido`)
					break
				case 'unban':
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
					client.sendMessage(from, menu(prefix, sender), text, {quoted: mek})
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
					captionnya = `╭─「 *SEU PERFIL* 」\n│• *Usuário :* *${pushname}*\n│• *Membro:* ✓\n│• *Seu Link :*\n│• *Wa.me//${sender.split("@")[0]}*\n│• *Outro Link :*\n│ *https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n╰────────────────\n\n*Respeita ou Peita🤠👍🏿`
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
                    case 'esquilo':
					if (!isPrem) return reply(nad.premium())
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
					case 'plaquinha1':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*[❕] Carregando...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/plaquinha1.jpg?text.0.text=${teks}&text.0.position.x=-35%25&text.0.position.y=-69%25&text.0.size=30&text.0.color=000000&text.0.opacity=55&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Plaquinha concluída com sucesso ✓*'})
					break
					case 'plaquinha2':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*[❕] Carregando...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/plaquinha2.jpg?text.0.text=${teks}&text.0.position.x=-46%25&text.0.position.y=-16%25&text.0.size=30&text.0.color=000000&text.0.opacity=55&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Plaquinha concluída com sucesso ✓*'})
					break
					case 'googletxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*[❕] Carregando...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/googletxt.jpg?text.0.text=${teks}&text.0.position.x=-55%25&text.0.position.y=-45%25&text.0.size=24&text.0.color=000000&text.0.opacity=94&text.0.font.family=Oswald&text.0.background.opacity=1`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Pesquisa concluída com sucesso ✓*'})
					break
					case 'xvideostxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*[❕] Carregando...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/xvideostxt.jpg?text.0.text=${teks}&text.0.position.x=-46%25&text.0.position.y=-68%25&text.0.size=24&text.0.color=000000&text.0.opacity=90&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Pesquisa concluída com sucesso ✓*'})
					break
					case 'cadernotxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*[❕] Carregando...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/cadernotxt.jpg?text.0.text=${teks}&text.0.position.x=-49%25&text.0.position.y=-78%25&text.0.size=24&text.0.color=000000&text.0.opacity=90&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Concluída com sucesso ✓*'})
					break
					case 'miatxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*[❕] Carregando...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/miatxt.jpg?text.0.text=${teks}&text.0.position.x=-35%25&text.0.position.y=-32%25&text.0.size=18&text.0.color=000000&text.0.opacity=60&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Plaquinha concluída com sucesso ✓*'})
					break
					case 'pvittartxt':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*[❕] Carregando...*')
					buffer = await getBuffer(`https://oxigater.sirv.com/Images/pvittartxt.jpg?text.0.text=${teks}&text.0.position.x=-46%25&text.0.position.y=-35%25&text.0.size=30&text.0.color=000000&text.0.opacity=55&text.0.font.family=Oswald&text.0.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Plaquinha concluída com sucesso ✓*'})
					break
                case 'pngtxt':
                case 'dnobg':
					if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*⏰ | Carregando, por favor, aguarde um momento...*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${teks}&text.0.position.gravity=center&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
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

𝑯𝑫𝑩𝑶𝑻.𝒆𝒙𝒆`
			        reply(ipl)
					break
                case 'teste':
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
				case 'dellprem':
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
                case 'hidetag':
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
                    case 'lofi':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hZBPRo16fIhsIus3t1je2oAU23pQqBpfw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '️amoo lofi'})
					break
					case 'baianor':
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
					case 'indio':
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
			     	case 'pornhub':
			   if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
			   if (!isPrem) return reply(nad.premium())
			   reply(mess.wait)
              	    if (args.length < 1) return reply('onde esta o texto mano?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Titulo: ${bokep.title}\nAtor: ${bokep.author}\nVisualizadores: *${bokep.views}*\nDuracao: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
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
			case 'mia':
		    client.updatePresence(from, Presence.composing) 
		    if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
		    if (!isPrem) return reply(nad.premium())
			data = fs.readFileSync('./lib/mia.js');
            jsonData = JSON.parse(data);
            randIndex = Math.floor(Math.random() * jsonData.length);
            randKey = jsonData[randIndex];
            mia = await getBuffer(randKey.result)
            client.sendMessage(from, mia, image, {quoted: mek, caption: '*🔍 | Mia Khalifa*'})
			break
			case 'tigresavip':
		    client.updatePresence(from, Presence.composing) 
		    if (!isNsfw) return reply(' *O modo +18 está desativado neste grupo, se você é um admin e quer ativa-lo, use o nsfw!* ')
		    if (!isPrem) return reply(nad.premium())
			data = fs.readFileSync('./lib/tigresavip.js');
            jsonData = JSON.parse(data);
            randIndex = Math.floor(Math.random() * jsonData.length);
            randKey = jsonData[randIndex];
            tigresavip = await getBuffer(randKey.result)
            client.sendMessage(from, tigresavip, image, {quoted: mek, caption: '*🔍 | Tigresa Vip*'})
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
			await limitAdd(sender)
			break
			case 'happymod':
			if (!isPrem) return reply(nad.premium())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
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
			case 'darjkjokes':
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
			case 'gerarcpf':
			case 'geradorcpf':
            if (!isPrem) return reply(nad.premium())
            boxx = await fetchJson(`http://geradorapp.com/api/v1/cpf/generate?token=0b858b5f15ae2e7eecad6aa3973d4db3`)
            box =  `*🔎 CPF GERADO!*\n➽ *CPF*: *${boxx.data.number}*\n➽ *FORMATO*: *${boxx.data.number_formatted}*\n➽ *MENSAGEM*: *${boxx.data.message}*\n           *𝑯𝑫𝑩𝑶𝑻.𝒆𝒙𝒆*`
            client.sendMessage(from, box, text, {quoted: mek})
            break
            case 'gado':
            if (isBanned) return reply(nad.baned())
            if (!isGroup) return reply(mess.only.group)
            reply('*🔍 | Gado Localizado!*')
            hasil = gadorandom[Math.floor(Math.random() * (gadorandom.length))]
            client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
            case 'eusou':
            if (isBanned) return reply(nad.baned())
            if (!isGroup) return reply(mess.only.group)
            reply('*Pelos meus cálculos, voce é...*')
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
            case 'gay':
            if (isBanned) return reply(nad.baned())
            if (!isGroup) return reply(mess.only.group)
            hasil = gayrandom[Math.floor(Math.random() * (gayrandom.length))]
            client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
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
			case 'igstalk':
                    if (!isPrem) return reply(nad.premium())
                    vide = body.slice(9)
                    hmm = await fetchJson(`https://videfikri.com/api/igstalk/?username=${vide}`)
                    buffer = await getBuffer(hmm.result.profile_hd)
                    hasil = `*「 User 」* : ${hmm.result.username}\n*「 Nome 」* : ${hmm.result.full_name}\n*「 Seguidores 」* : ${hmm.result.followers}\n*「 Seguindo 」* : ${hmm.result.following}\n*「 Publicações 」* : ${hmm.result.post_count}\n*「 Biografia 」* : ${hmm.result.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    break
                  case 'criadorgp':
                  case 'ownergp':
				  case 'ownergroup':
               if (isBanned) return reply(nad.baned())
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `*Este foi quem criou essa merda de grupo* : @${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break
			case 'gay000':
		  if (!isGroup) return reply(mess.only.group)
					cantik = body.slice(1)
					const can =['5','15','67','45','50','60','70','62','74','83','97','101','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Calculando... *'+cantik+'*\n\nPorcentagem gay🏳️‍🌈 : '+ tik+'%', text, { quoted: mek })
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
					case 'membros2':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Olá, Membros do grupo! 〙✪══\n╠➥'+teks+'╚═〘 HDBot.exe 〙', text, {detectLinks: false, quoted: mek})
					break
                   case 'membros3':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 OLÁ 〙✪══\n╠➥'+teks+'╚═〘 HDBot.exe 〙', text, {quoted: mek})
					break
                  case 'membros':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					if (text.includes('random')){
						conn.sendMessage(id, 'Silakan ulangi command dengan huruf kecil',MessageType.text, { quoted: m } );
						}
						   if (text.includes("random"))
						   {
							var items = ["ullzang girl", "cewe cantik", "cewe hijab", "remaja cantik", "cewek jepang"];
							var cewe = items[Math.floor(Math.random() * items.length)];
							var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
							
							axios.get(url)
							  .then((result) => {
								var b = JSON.parse(JSON.stringify(result.data));
								var cewek =  b[Math.floor(Math.random() * b.length)];
								imageToBase64(cewek) // Path to the image
								.then(
									(response) => {
							conn.sendMessage(id, 'Jaja eu mando sabosta espera', MessageType.text, { quoted: m } )
							var buf = Buffer.from(response, 'base64'); // Ta-da	
							conn.sendMessage(id, buf ,MessageType.image, { caption: `nih gan`, quoted: m } )
							   
									}
								)
								.catch(
									(error) => {
										console.log(error); // Logs an error if there was one
									}
								)
							
							});
							}
							if (text.includes('Bot')){
								conn.sendMessage(id, 'Silakan ulangi command dengan huruf kecil\n_contoh : .bot apa kabar_',MessageType.text, { quoted: m } );
								}
								if (text.includes("bot")){
								const teks = text.replace(/.bot /, "")
								axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then((res) => {
									let hasil = `${res.data.result}\n\n*Simsimi chat*`;
									conn.sendMessage(id, hasil ,MessageType.text, {quoted: m});
								})
								}
						
					mentions('╔══✪〘 Olá, Membros do grupo! 〙✪══\n╠➥'+teks+'╚═〘 HDBot.exe 〙', members_id, true)
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
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('O modo antiracismo já está ativo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('1 para ativar, 2 para desligar')
					}
					break
					case 'antishit':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*Digite 1 para ativar*')
					if ((args[0]) === 'on') {
						if (isAntiShit) return reply('O modo antishit já está ativo')
						antishit.push(from)
						fs.writeFileSync('./database/json/antishit.json', JSON.stringify(antishit))
						reply(`\`\`\`✓Ativado com sucesso o modo anti-palavrões no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antishit.splice(from, 1)
						fs.writeFileSync('./database/json/antishit.json', JSON.stringify(antishit))
						reply(`\`\`\`✓Modo anti-palavrões desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('1 para ativar, 2 para desligar')
					}
					break
				case 'ocr': 
				case 'txtdafoto':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
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
				case 'stiker': 
				case 'sticker':
				case 'fig':
				case 'figurinha':
					if (isBanned) return reply(nad.baned())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
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
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah gagal ;(, tente dnovo ^_^`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(230,iw)':min'(230,ih)':force_original_aspect_ratio=decrease,fps=15, pad=230:230:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Para criar uma figurinha, envie uma foto, gif ou video de até 5 segundos, com a legenda ${prefix}fig`)
					}
					break
				case 'gtts':	
				case 'tts':
				case 'audio':
					if (isBanned) return reply(nad.baned())
					if (!isGroup)return reply(mess.only.group)
					if (args.length < 1) return client.sendMessage(from, '*⊘ | Informe o idioma! exemplo: pt,it,ja,es*', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, '*⊘ | Informe o texto deseja que eu diga!*', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('*⊘ | Seu texto é muito longo, por favor diminua, e tente novamente!*')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('*Erro! tente novamente mais tarde ⊘*')
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
					reply(`✓ | O prefixo foi alterado com sucesso, para : ${prefix} `)
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
					if (!isOwner) return reply('*💎 | Comando disponível apenas para o proprietário do hdbot!*')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('*✓ | Os chats foram limpos com sucesso!*')
					break
			       case 'bloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `*Bloqueado com sucesso ✓* ${body.slice(7)}@c.us`, text)
					break
                    case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Desbloqueado com sucesso ✓* ${body.slice(9)}@c.us`, text)
				break
				case 'sair':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Vou sair do grupo por ordens do adm, até mais rebanho de cornos! 👋🐂', text) // ur cods
					}, 0)
                     break
				case 'ts': 
					if (!isOwner) return reply('*💎 | Comando disponível apenas para o proprietário do hdbot!*') 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*💎 | 𝙃𝘿𝘽𝙊𝙏.𝙚𝙭𝙚,  diz:*\n\n${body.slice(4)}`})
						}
						reply('*✓ | A transmissão foi concluída com sucesso!*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*💎 | 𝙃𝘿𝘽𝙊𝙏.𝙚𝙭𝙚,  diz:*\n\n${body.slice(4)}`)
						}
						reply('*✓ | A transmissão foi concluída com sucesso!*')
					}
					break
					case 'play':   
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
                case 'mp4':
                case 'ytmp4':
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
          text: `*「 Link Whatsapp 」*\n\n *Nome de Usuário:*\n @${sender.split("@s.whatsapp.net")[0]}\n*Link Whatsapp 1:*\n *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Ou ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
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
                        reply('*✓ | Perfil alterado com sucesso!*')
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
					    reply(`*✓ | Grupo aberto para todos os membros!*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`*🔒 | Grupo fechado para todos os membros comuns!*`)
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
       client.sendMessage(from, '*✓ | Este é o contato do meu criador!*',MessageType.text, { quoted: mek} )
           break    
           case 'setname':
           case 'nomegp':
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '*✓ | O nome do grupo foi alterado com sucesso!*', text, {quoted: mek})
                break
                case 'setdesc':
                case 'desc':
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '*✓ | A descrição do grupo foi alterada com sucesso!*', text, {quoted: mek})
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
			case 'banir':
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
				case 'bv':
				case 'bemvindo':
				case 'boasvindas':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('1 ou 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*✓ | As boas vindas neste grupo ja estão ativadas!*')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('*✓ | As boas vindas neste grupo foram ativadas com sucesso!*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('*⊘ | As boas vindas neste grupo foram desativadas com sucesso!* ')
					} else {
						reply('*Use 1 para ativar ou 0 para desativar!*')
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
