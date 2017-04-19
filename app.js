var restify = require('restify'); var builder = require('botbuilder'); 
 
//========================================================= // Bot Setup //========================================================= 
 
// Setup Restify Server 

var server = restify.createServer(); server.listen(process.env.port || process.env.PORT || 3978, function () {    
    console.log('%s listening to %s', server.name, server.url);  });    
    // Create chat bot 
    var connector = new builder.ChatConnector(
        {     appId: '6d08128d-c47a-42cf-be17-7401bb33de12',     appPassword: 'HQHXn2Qd1G21f2QUrfpxSrM' }); 
        var bot = new builder.UniversalBot(connector); server.post('/api/messages', connector.listen()); 
 
//========================================================= // Bots Dialogs //========================================================= 
 
bot.dialog('/', function (session) {     session.send("Hello World"); });