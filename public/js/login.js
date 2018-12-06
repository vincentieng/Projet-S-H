const logins = new Vue({
  el: '#login',
  data: {
    firstName: [],
    lastName: [],
    users: [],
    passwords: [],
    newFirstName : null,
    newlastName : null,
    newUser: null,
    newPassword : null,
    newConfirmPassword : null,
    User : null,
    Password : null,
    connectedUser : null,
    errors : null
  },
  mounted() {
    if (localStorage.getItem('passwords')) {
      try {
        this.passwords = JSON.parse(localStorage.getItem('passwords'));
      } catch(e) {
        localStorage.removeItem('passwords');
      }
    }
    if (localStorage.getItem('users')) {
      try {
        this.users = JSON.parse(localStorage.getItem('users'));
      } catch(e) {
        localStorage.removeItem('users');
      }
    }
      if (localStorage.getItem('firstName')) {
      try {
        this.firstName= JSON.parse(localStorage.getItem('firstName'));
      } catch(e) {
        localStorage.removeItem('firstName');
      }
    }
      if (localStorage.getItem('lastName')) {
      try {
        this.lastName = JSON.parse(localStorage.getItem('lastName'));
      } catch(e) {
        localStorage.removeItem('lastName');
      }
    }
    
  },
  methods: {
    addSomeone:function(e) {
      e.preventDefault();
      this.errors=null;
      if (!this.newUser) {
        this.errors = "The user must be filled in";
      }
      if (!this.newPassword) {
        this.errors = "The password must be filled in";
        
      }
      if(!this.newConfirmPassword){
        this.errors = "The password must be confirmed";
        
      }
       if(!this.newFirstName){
        this.errors = "The first name must be filled in";
        
      }
       if(!this.newLastName){
        this.errors = "The Last Name must be filled in";
        
      }
      if(this.newConfirmPassword != this.newPassword){
        this.errors = "Passwords do not match";
        
      }
      if(this.errors==null){
      this.users.push(this.newUser);
      this.newUser = '';
      this.passwords.push(this.newPassword);
      this.newPassword = '';
      this.firstName.push(this.newFirstName);
      this.newFirstName = '';
      this.lastName.push(this.newLastName);
      this.newLastName = '';
      this.newConfirmPassword = '';
      this.saveSomeone();
        
      }
    },
    checkInfos:function(e){
      this.errors="";
      var count = 0;
      e.preventDefault();
      while(count < this.users.length) {
        if(this.User == this.users[count] && this.Password == this.passwords[count]){
            this.connectedUser = this.User;
            
          
          
            return true;
          }
        count++;
      }
      
      this.errors = "Password and username do not match";
      
  
    },
     saveSomeone() {
      let parsed = JSON.stringify(this.users);
      localStorage.setItem('users', parsed);
      let parsed2 = JSON.stringify(this.passwords);
      localStorage.setItem('passwords', parsed2);
      let parsed3 = JSON.stringify(this.firstName);
      localStorage.setItem('firstName', parsed3);
      let parsed4 = JSON.stringify(this.lastName);
      localStorage.setItem('lastName', parsed4);
    },
    removeSomeone(x) {
      this.users.splice(x, 1);
      this.passwords.splice(x,1);
      this.saveSomeone();
    }
   
  }
})


