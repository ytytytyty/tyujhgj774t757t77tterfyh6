const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

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
    var prefix = ".";
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
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | الأسم :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | اي دي:', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    //out 
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })




//room كتابي 
client.on("message", message => {
    var prefix = "."
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

client.on('message', msg => {
var prefix = ".";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'tc')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء شات كتابي اظغط علي الايموجي✏`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('✏').then(r=>{
                              
    
 let Text = (reaction, user) => reaction.emoji.name === '✏' && user.id === msg.author.id;

 let tt  = message.createReactionCollector(Text, { time: 60000 });

tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text');
    msg.channel.send(`☑ تم انشاء شات كتابي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});
//room voice
client.on('message', msg => {
var prefix = ".";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'vc')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء روم صوتي اظغط علي الايموجي🎤`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('🎤').then(r=>{
                              
    
 let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;

 let ve  = message.createReactionCollector(Voice, { time: 60000 });

ve.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice');
    msg.channel.send(`☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});
 
//server 
client.on('message', function(msg) {
    const prefix = '.'
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
      .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
      msg.channel.send({embed:embed});
    }
  });
 
//help arabic
client.on('message', message => {
            if (message.content.startsWith(prefix + "ar")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL) 
.addField('                       **  ╔[════════════════════════════════════]╗ **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『اوامر العامة』** ' ,':small_orange_diamond: **.ar-1**')  
.addField('                       **  |[════════════════════════════════════]| **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『اوامر العاب』** ' ,':small_orange_diamond:  **.ar-2** ')   
.addField('                       **  ╚[════════════════════════════════════]╝ **  ' ,' ** **')       
.setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
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
.setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
     .setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === ".ar-1"){
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
     if (message.content === ".c1") {
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
  .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
message.author.sendEmbed(embed)
}
});










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === ".ar-2") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
:small_orange_diamond:『اوامر العاب』
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:video_game: 『لعبة كت كويت』
.كت كويت
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:video_game: 『لعبة قرعة』
.قرعة
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:video_game: 『لعبة صراحه』
.صراحه
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:video_game: 『عقاب』
.عقاب
:heavy_minus_s_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:video_game: 『حب』
.حب
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:video_game: 『هل تعلم』
.هل تعلم
`)
.setColor('#ffc85b')
message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'c2')) {
    msg.reply('**:runner: شيك علي الخاص**');
  }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === ".c2") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:green_book: 『اذكار』
.اذكار
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:video_game: 『حكم』
.حكم
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:video_game:『يوريك سكنك』
.mcskin name
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:video_game:『لعبة حجرة ورقة مقص』
.rps
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:video_game: 『لعبة طلب زواج』
.زواج
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:video_game:『لعبة لو خيروك』
.لو خيروك
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:video_game:『لعبة ماين كرافت』
.mc
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
  .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
message.author.sendEmbed(embed)
}
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
:musical_note: 『اوامر الموسيقى』
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:musical_note: 『لتشغيل موسيقى』
=play (اسم الاغنية)
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:musical_note: 『لتوقيف الاغنية』
=stop
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:musical_note: 『 مستوى الصوت الى 50』
=vol
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:musical_note: 『لأيقاف الاغنية مؤقت』
=pause
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:musical_note: 『』
=unpause
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:musical_note: 『لتشغيل اغنية بعد ماتخلص』
=q
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:musical_note: 『للتخطي للأغنية الي بعدها』
=skip
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
:skull:『الدعم الفني والمساعدة』:skull: 

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
رابط سيرفر البوت
https://discord.gg/Hdkjwt
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
رابط البوت | =inv
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
مصمم البوت | ¦~{<Yousef>}~¦#5618
`)
.setColor('#de85fc')
   .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'n')) {
    msg.reply('**:runner: شيك علي الخاص**');
  }
});
//welcome 5a9
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
    return channel.send(`ولكم والله نورت السيرفر يا ${member} `) 
.setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
  }).catch(console.error)
})


//say
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });



//id
client.on('message', message => {
    var prefix = "."
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
.setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
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
function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
client.on('message', message => {
    if (message.content.startsWith(".bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('#9933CC')
            .setTitle('``معلومات SN Bot`` ')
            .addField('``مدة التشغيل``', [timeCon(process.uptime())], true)
            .addField('``سرعه النت``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``حجم الرامات``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``سيرفرات``', [client.guilds.size], true)
            .addField('``قنوات``' , `[ ${client.channels.size} ]` , true)
            .addField('``مستخدماتي``' ,`[ ${client.users.size} ]` , true)
            .addField('``الاسم``' , `[ ${client.user.tag} ]` , true)
            .addField('``اي دي``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `.` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | [DT あ] ¦~{<Yousef>}~¦')
    })
}
});
//ping
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('.ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**الوقت المستغرق:**',msg + " ms 📶 ")
                        .addField('**سرعه النت:**',api + " ms 📶 ")
         .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
                        message.channel.send({embed:embed});
                        }
                    });
//draw
client.on('message', message => {
    var prefix = "."
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);

Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});
//inv
             client.on('message', message => {
                if(message.content === prefix + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Invite SN Bot**")
                  .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
                  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=463508171898748938&scope=bot&permissions=1");
                   message.channel.sendEmbed(embed);
                  }
});

//صورة حيوانات
 var Yousef = ".";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(Yousef + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
.setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
         message.channel.sendEmbed(cat);
    }
});
//كود دخول البوت
client.on('guildCreate', guild => {
  client.channels.get("479029690095370242").send(`**تم دخول البوت الى سيرفر جديد   ✅
اسم السيرفر: __${guild.name}__
اونر السيرفر: __${guild.owner}__**`)
});
//sug
var yousef = "."
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
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط بهذا السيرفر  :angry: ! **`)
    }
});
//kick
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(toKick.bannable) return message.reply("**# - I cannot kick someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
     .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});
//ban
client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("479029690095370242")) return message.reply("**# You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("**# You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("**# You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been banned from a server!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Banned By:**",message.author,true)
     .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );
       
   }
});

//members 
client.on('message', message => {
    if (message.author.bot) return;
    if(message.content == '=member') {
    const embed = new Discord.RichEmbed()
    .addField(`حالة الأعضاء🔋`,'-',   true)
.addField(`💚 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)   
.addField(`🖤 اوفلاين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true) 
.addField(`💙   الكل:  ${message.guild.memberCount}`,'-',   true)     
    .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
         message.channel.send({embed});

    }
  });
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
  if (message.content.startsWith(".avatar")) {

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
      .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
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
client.on('message', message => {
if(message.content.startsWith(prefix + 'move all')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });

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
                   .setFooter(`SN bot `,"https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg")
                .addField(`الترجمه/Output`, `\`\`\`${res.text}\`\`\``);
              
             
                return message.channel.send(embed);
            });
        }
    }
}
});
//....
 client.on('message', message => {
            if (message.content.startsWith("السلام عليكم")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField (':heart: وعليكم السلام ورحمه الله وبركاته', ' ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
            }
 });
///
client.on('message', message => {
            if (message.content.startsWith("هلا")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField (':heart: هلا فيك حبيبي', '.')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
            }
 });
///
 client.on('message', message => {
            if (message.content.startsWith("باك")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField (':heart_eyes: ولكم يا حلو', '.')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
            }
 });
///
 client.on('message', message => {
            if (message.content.startsWith("برب")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField (':revolving_hearts: اوك بس لاتطول عيوني', ' . ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
            }
 });
///
 client.on('message', message => {
            if (message.content.startsWith("هاي")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField (':yellow_heart: هايات', ' . ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
            }
 });
///
const bannedwords = [
    "كلب",
    "حيوان",
    "زق",
    "تبن",
    "كل زق",
    "كل تبن",
    "كل خرا",
    "فاك",
    "كلزق",	
    "كلتبن",	
    "يلعن"	
  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(":heart: :wink:  لو سمحت لاتسب  ").then(msg => {msg.delete(5000)});;
  };
});
//spam
client.on('message', message => {
if (message.content === ".spam") {
  var ms = 120000;
      var interval = setInterval (function () {
        message.channel.send("#daily")
      }, ms); 
    }
});



client.login(process.env.BOT_TOKEN);
