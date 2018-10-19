const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '='

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
    var prefix = "=";
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
//server 
client.on('message', function(msg) {
    const prefix = '='
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
      .setFooter(`Dragon Bot `,'https://cdn.discordapp.com/icons/501760384928317440/5424536eadc57cac2135832b449b742d.png')
      msg.channel.send({embed:embed});
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
//ban 
var prefix = "="
client.on('message', message => {
  if (message.author.ban) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("MOVE_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**الاسم:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  client.channels.get("آي دي روم اللوق").send({embed : banembed})
}
});
//kick
client.on('message', message => {
  const prefix = "=";
    if (message.author.kick) return;
    if (!message.content.startsWith(prefix)) return;
     message.reply ('تم الطرد بنجاح')
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
   
    let args = message.content.split(" ").slice(1);
   
    if (command == "kick") {
                 if(!message.channel.guild) return;
           
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
   
    if (message.mentions.users.size < 1) return message.reply("منشن شخص");
    if(!reason) return message.reply ("اكتب سبب الطرد");
    if (!message.guild.member(user)
    .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
   
    message.guild.member(user).kick(7, user);
   
    const banembed = new Discord.RichEmbed()
    .setAuthor('Kicked !', user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("الاسم:",  `[ + ${user.tag} + ]`)
    .addField("من:", `[  + ${message.author.tag} +  ]`)
    .addField("السبب:", `[ + ${reason} +  ]`)
    client.channels.get("").send({embed : banembed})
  }
  });
//mute

///////3amh
//ping
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('=ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**الوقت المستغرق:**',msg + " ms 📶 ")
                        .addField('**سرعه النت:**',api + " ms 📶 ")
         .setFooter(`Dragon Bot `,'https://cdn.discordapp.com/icons/501760384928317440/5424536eadc57cac2135832b449b742d.png')
                        message.channel.send({embed:embed});
                        }
                    });
  client.on('message', message => {
                if(message.content === prefix + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Invite Dragon Bot**")
                  .setFooter(`Dragon Bot  `,'https://cdn.discordapp.com/icons/501760384928317440/5424536eadc57cac2135832b449b742d.png')
                  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=502809254197985291&scope=bot&permissions=1");
                   message.channel.sendEmbed(embed);
                  }
});
client.login(process.env.BOT_TOKEN);
