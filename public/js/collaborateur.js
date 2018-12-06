const data_collab= new Vue({
  el: '#data',
    data: {
      noms :[],
      prenoms : [],
      mails : [],
      passwords : [],
      civilites : [],
      villes : [],
      code_postals : [],
      telephones : [],
      profils : [],
      infos : [],
      bureau : [],
      newNom : null,
      newPrenom : null,
      newMail : null,
      newPassword : null,
      newConfirmPassword : null,
      newCivilite : null,
      newVille : null,
      newCP : null,
      newTel : null,
      newProfil : null,
      newInfos : null,
      number : null,
      errors : null
    },
    mounted() {
      if (localStorage.getItem('noms')) {
      try {
        this.noms = JSON.parse(localStorage.getItem('noms'));
      } catch(e) {
        localStorage.removeItem('noms');
      }
    }
    if (localStorage.getItem('prenoms')) {
      try {
        this.prenoms = JSON.parse(localStorage.getItem('prenoms'));
      } catch(e) {
        localStorage.removeItem('prenoms');
      }
    }
      if (localStorage.getItem('mails')) {
      try {
        this.mails = JSON.parse(localStorage.getItem('mails'));
      } catch(e) {
        localStorage.removeItem('mails');
      }
    }
      if (localStorage.getItem('passwords')) {
      try {
        this.passwords = JSON.parse(localStorage.getItem('passwords'));
      } catch(e) {
        localStorage.removeItem('passwords');
      }
    }
      if (localStorage.getItem('civilites')) {
      try {
        this.civilites = JSON.parse(localStorage.getItem('civilites'));
      } catch(e) {
        localStorage.removeItem('civilites');
      }
    }
      if (localStorage.getItem('villes')) {
      try {
        this.villes = JSON.parse(localStorage.getItem('villes'));
      } catch(e) {
        localStorage.removeItem('villes');
      }
    }
      if (localStorage.getItem('code_postals')) {
      try {
        this.code_postals = JSON.parse(localStorage.getItem('code_postals'));
      } catch(e) {
        localStorage.removeItem('code_postals');
      }
    }
      if (localStorage.getItem('telephones')) {
      try {
        this.telephones = JSON.parse(localStorage.getItem('telephones'));
      } catch(e) {
        localStorage.removeItem('telephones');
      }
    }
      if (localStorage.getItem('profils')) {
      try {
        this.profils = JSON.parse(localStorage.getItem('profils'));
      } catch(e) {
        localStorage.removeItem('profils');
      }
    }
      if (localStorage.getItem('infos')) {
      try {
        this.infos = JSON.parse(localStorage.getItem('infos'));
      } catch(e) {
        localStorage.removeItem('infos');
      }
    }
      if (localStorage.getItem('bureau')) {
      try {
        this.bureau = JSON.parse(localStorage.getItem('bureau'));
      } catch(e) {
        localStorage.removeItem('bureau');
      }
    }
      
    },
    methods : {
      ajouter:function(e){
        e.preventDefault();
        this.errors=null;
        if (!this.newNom || !this.newPrenom || !this.newMail || !this.newPassword || !this.newCivilite || !this.newVille || !this.newCP || !this.newTel) {
          this.errors = "Les champs obligatoires doivent être remplis";
        }
        if(this.newPassword != this.newConfirmPassword) {
          this.errors = "Les mots de passe ne correspondent pas";
        }
        if(this.errors==null){
          this.noms.push(this.newNom);
          this.newNom = '';
          this.prenoms.push(this.newPrenom);
          this.newPrenom = '';
          this.mails.push(this.newMail);
          this.newMail='';
          this.passwords.push(this.newPassword);
          this.newPassword='';
          this.civilites.push(this.newCivilite);
          this.newCivilite='';
          this.villes.push(this.newVille);
          this.newVille='';
          this.code_postals.push(this.newCP);
          this.newCP='';
          this.telephones.push(this.newTel);
          this.newTel='';
          this.profils.push(this.newProfil);
          this.newProfil='';
          this.infos.push(this.newInfos);
          this.newInfos='';
          this.bureau.push(null);
          this.newConfirmPassword='';
          this.save();
          document.location.href="/html/rh/accueil.html"; 
          
        
          }
      },
      whoNeedABureau:function(number){
        console.log(this.number);
        this.number=number;
        console.log(this.number);
        this.bureau[number]=0;
        this.save();
        document.location.href="/html/rh/Bureau.html";
      },
      save(){
        let parsed = JSON.stringify(this.noms);
        localStorage.setItem('noms',parsed);
        let parsed2 = JSON.stringify(this.prenoms);
        localStorage.setItem('prenoms',parsed2);
        let parsed3 = JSON.stringify(this.mails);
        localStorage.setItem('mails',parsed3);
        let parsed4 = JSON.stringify(this.passwords);
        localStorage.setItem('passwords',parsed4);
        let parsed5 = JSON.stringify(this.civilites);
        localStorage.setItem('civilites',parsed5);
        let parsed6 = JSON.stringify(this.villes);
        localStorage.setItem('villes',parsed6);
        let parsed7 = JSON.stringify(this.code_postals);
        localStorage.setItem('code_postals',parsed7);
        let parsed8 = JSON.stringify(this.telephones);
        localStorage.setItem('telephones',parsed8); 
        let parsed9 = JSON.stringify(this.profils);
        localStorage.setItem('profils',parsed9);
        let parsed10 = JSON.stringify(this.infos);
        localStorage.setItem('infos',parsed10);
        let parsed11 = JSON.stringify(this.bureau);
        localStorage.setItem('bureau',parsed11);
      },
      whoIsClicked:function(e){
        e.preventDefault();
        
      
        if(document.getElementById("BesoinBureauRH").checked == true)document.location.href="/html/sg/Bureau.html";
      
        
        else{
               
        }
      },
       ClickedPCManager:function(e){
        e.preventDefault();
        
        if(document.getElementById("OrdiManager").value == "3") document.location.href="/html/sg/PC.html";
     
      
        
        else{
               
        }
      },
        ClickedPCSG:function(e){
        e.preventDefault();
        
        if(document.getElementById("OrdinateurOK").checked == true) document.location.href="/html/it/PC.html";
    
        else{
        }
      },
       ClickedVoitureRH:function(e){
        e.preventDefault();
        
        if(document.getElementById("VoitureRH").value== 1) document.location.href="/html/collaborateur/voiture.html";
    
        else{
               document.location.href="/html/manager/PC.html";
        }
      },
        ClickedVoitureCollaborateur:function(e){
        e.preventDefault();
        
        if(document.getElementById("VoitureOK").checked == true) document.location.href="/html/sg/voiture.html";
    
        else{
               document.location.href="/html/rh/voiture.html";
        }
      },
       ClickedVoitureSG:function(e){
        e.preventDefault();
        
       
      },
      
      navigateOn:function(url){
         document.location.href=url;    
      }
    }
})