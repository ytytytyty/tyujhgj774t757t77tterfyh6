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
//wlc
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====ولكم منور السيرفر اتمنا لك الاستمتاع====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    //skin  
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
      .setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
      msg.channel.send({embed:embed});
    }
  });
//help
      client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL) 
.addField('                       **  ╔[════════════════════════════════════]╗ **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『لغه عربية』** ' ,':flag_sa:  **-ar**')  
.addField('                       **  |[════════════════════════════════════]| **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『language english』** ' ,':flag_us:    **-en** ')   
.addField('                       **  ╚[════════════════════════════════════]╝ **  ' ,' ** **')       
.setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
     .setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});
   //help arabic
client.on('message', message => {
            if (message.content.startsWith(prefix + "ar")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL) 
.addField('                       **  ╔[════════════════════════════════════]╗ **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『اوامر العامة』** ' ,':globe_with_meridians:  **.ar-1**')  
.addField('                       **  |[════════════════════════════════════]| **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『اوامر العاب』** ' ,':video_game:   **.ar-2** ')   
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
.addField(' :large_blue_diamond:  **『Help Public』** ' ,':globe_with_meridians: **.en-1**')  
.addField('                       **  ╔[════════════════════════════════════]╗ **  ' ,' ** **') 
.addField(' :large_blue_diamond:  **『Help Games 』** ' ,':video_game: **.en-2** ')   
.addField('                       **  ╚[════════════════════════════════════]╝ **  ' ,' ** **')       
.setFooter(`SN bot `,'https://cdn.discordapp.com/attachments/448412582055903232/463505714929991691/f.jpg')
     .setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});   
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
client.login(process.env.BOT_TOKEN);
