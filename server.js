// where your node app starts

// init project
const express = require('express');
const app = express();
var assets = require("./assets");
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var vm = require('vm');
var sessions = require('express-session');
var jsonFile = require('jsonfile');
var expressHbs = require('express-handlebars');


app.use("/assets", assets);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', '.html');


// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/html/login.html');
});

app.post('/', function(req,resp){
  var acceptation = req.body.besoinbureau;
  console.log("Oui");
  try {
       let userData = fs.readFileSync('./public/json/user.json');
       userData = JSON.parse(userData);
       userData.push({
          BureauOK : acceptation
       });
       fs.writeFileSync('./public/json/user.json', JSON.stringify(userData,null,2));
   } catch (error) {
       console.log(error);
   };
   if (acceptation == "Besoin d'un Bureau"){
     resp.sendFile('../public/html/manager/accueil.html',{root:__dirname});
   }
   else{
     console.log("OK");
     resp.sendFile('../public/html/manager/accueil.html',{root:__dirname});
   }
})

app.post('/BureauRH',(req,resp)=>{
  var bureau = req.body.besoinbureau;
  var bureauDispo = 0;
  var js;
  if (bureau == "Pas besoin d'un Bureau"){
    console.log("Pas besoin d'un Bureau");
  }
  if (bureau == "Besoin d'un Bureau"){
      let userData = fs.readFileSync('./public/json/bureau.json');
      js = JSON.parse(userData);
      for(var i = 0; i<js.length; i++){
        if(js[i].Bureau == "Disponible"){
          bureauDispo ++;
          console.log("Il y a un bureau à l'étage " + js[i].Etage);
        }
      }
      console.log("Il y a " + bureauDispo + " bureaux Disponible");
     

    };
})










// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

