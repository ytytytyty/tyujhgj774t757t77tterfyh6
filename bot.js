const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`SN Bot`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
//bc
client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "-";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Dragon-Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
   
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
   
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ |تم ... لقد تم إرسال رسالة برودكاست الى ${message.guild.members.size}للأعضاء`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست')
       .addField('السيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`تم رفض البرودكاست`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
//welcome msg

    //out 
   




//room كتابي 
client.on("message", message => {
    var prefix = "-"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


//server 
client.on('message', function(msg) {
    const prefix = '-'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      .setFooter(`Dragon Bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
      msg.channel.send({embed:embed});
    }
  });
 //help 
client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL) 
.addField('                       **  ╔[════════════════════════════════════]╗ **  ' ,' ** **') 
.addField(' :globe_with_meridians:   **『لغه عربيه』** ' ,':flag_dz:   **-ar**')  
.addField('                       **  |[════════════════════════════════════]| **  ' ,' ** **') 
.addField(' :globe_with_meridians:   **『language english』** ' ,':flag_us:   **-en** ')   
.addField('                       **  ╚[════════════════════════════════════]╝ **  ' ,' ** **')       
.setFooter(`Dragon Bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
     .setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }

//help arabic
client.on('message', message => {
            if (message.content.startsWith(prefix + "ar")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL) 
.addField('                       **  ╔[════════════════════════════════════]╗ **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『اوامر العامة』 **  ' ,' :earth_asia:  **.ar-1**')  
.addField('                       **  |[════════════════════════════════════]| **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『اوامر العاب 』 **  ' ,' :video_game:   **.ar-2** ')   
.addField('                       **  ╚[════════════════════════════════════]╝ **  ' ,' ** **')       
.setFooter(`Dragon Bot`,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
     .setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});
//help english
client.on('message', message => {
            if (message.content.startsWith(prefix + "en")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)  
.addField(' :large_blue_diamond:  **『Help Public』** ' ,':small_orange_diamond: **.en-1**')  
.addField('                       **  ╔[════════════════════════════════════]╗ **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『Help Games 』** ' ,':small_orange_diamond: **.en-2** ')   
.addField('                       **  ╚[════════════════════════════════════]╝ **  ' ,' ** **')       
.setFooter(`Dragon Bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
     .setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "-ar-1"){
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
:small_blue_diamond:『اوامر العامة』   
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:newspaper:『لمعرفة السيرفر』
.server
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:      
:robot: 『لمعرفة البوت』
.bot
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:      
:no_entry: 『لطرد شخص』
.kick
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:      
:warning:  『 لأعطاء شخص بان』
.ban
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:      
:x:        『لمسح الشات』
.clear 
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:   
:signal_strength: 『لرؤية سرعة البوت』
.ping
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:   
:pencil:  『لجعل البوت يكتب ماتكتب』
.say (الكلام)
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:   
:bust_in_silhouette:  『لمعرفة حساب شخص』
.id 
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:busts_in_silhouette: 『كود برودكاست』
.bc massage
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:    
:incoming_envelope: 『رابط البوت』
.inv
`)
.setColor('#ffc85b')

message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'ar-1')) {
    msg.reply('**:white_check_mark:|تم الارسال في الخاص...**');
  }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "-c1") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:regional_indicator_y:『الكتابة بصورة』
.draw الكلام
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:globe_with_meridians: 『عدد الاعضاء』
.members
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:negative_squared_cross_mark: 『ميوت لشخص』
.mute
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:white_check_mark: 『لفك الميوت عن شخص』
.unmute
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:grey_exclamation: 『لأرسال طلب او اقتراح او شكر』
.sug (الكلام)
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:pen_ballpoint: 『لجعل البوت يكتب ماتكتب بطريقة جميلة』
.tag
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
『لترجمة الكلام』
.tran (الكلمه) (اللغه)
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
『』

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
『』

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
:skull:『الدعم الفني والمساعدة』:skull: 

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
رابط سيرفر البوت
https://discord.gg/Hdkjwt
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
لأضافة البوت | .inv
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
مصمم البوت | ¦~{<Yousef>}~¦#5618
`)
.setColor('#ffc85b')
  .setFooter(`Dragon Bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
message.author.sendEmbed(embed)
}
});










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//welcome 5a9


//say


//id
client.on('message', message => {
    var prefix = "-"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.setFooter(`Dragon Bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
//clear
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Do not have permission** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**هل انت متأكد من أنك تريد محو الشات؟ **`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`الشات سوف تنحذف`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
  message.channel.sendMessage("", {embed: {
        title: ":white_check_mark: تم مسح الشات ",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`❌تم رفض مسح الشات`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
//bot

//ping
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**الوقت المستغرق:**',msg + " ms 📶 ")
                        .addField('**سرعه النت:**',api + " ms 📶 ")
         .setFooter(`Dragon Bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
                        message.channel.send({embed:embed});
                        }
                    });
//draw

//inv
             client.on('message', message => {
                if(message.content === prefix + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Invite SN Bot**")
                  .setFooter(`Dragon Bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
                  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=463508171898748938&scope=bot&permissions=1");
                   message.channel.sendEmbed(embed);
                  }
});

//صورة حيوانات

//كود دخول البوت
client.on('guildCreate', guild => {
  client.channels.get("479029690095370242").send(`**تم دخول البوت الى سيرفر جديد   ✅
اسم السيرفر: __${guild.name}__
اونر السيرفر: __${guild.owner}__**`)
});
//sug
var yousef = "-"
client.on('message', message => {

  if (message.content.startsWith( yousef + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("479029690095370242").send(
      "\n" + "**" + "**● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
    
      "\n" + "**" + "** ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
    
      "\n" + "**" + " **● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });
//NO LINK

//kick

//ban


//members 

//رسالة في الخاص
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle(':exclamation: هناك رسالة في الخاص')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("479029690095370242").send({ embed: iiMo });
    }
});
//avatar
client.on('message', message => {
  if (message.content.startsWith("-avatar")) {

      var mentionned = message.mentions.users.first();
  var king66s;
    if(mentionned){
        var king66s = mentionned;
    } else {
        var king66s = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`Dragon Bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
    .setImage(`${king66s.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});
//emoji chat
const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });
//s7b


//ترجمة
const translate = require('google-translate-api');
const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
if (message.content.startsWith(prefix + 'tran')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
        .setDescription("**ترجمة الكتابة.**\استعمل: `+translate <الكلمة لتبي> <االغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ترجمة الكتابة.**\استعمل: `+translate <الكلمة لتبي> <االغة>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`:innocent: اكتب اللغه من فضلك`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", 'https://media.discordapp.net/attachments/463513640566390801/463525969534386176/rotate_right.png?width=473&height=473')
                    .addField(`الكلمه/Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                   .setFooter(`Dragon Bot `,"https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg")
                .addField(`الترجمه/Output`, `\`\`\`${res.text}\`\`\``);
              
             
                return message.channel.send(embed);
            });
        }
    }
}
});


client.login(process.env.BOT_TOKEN);
