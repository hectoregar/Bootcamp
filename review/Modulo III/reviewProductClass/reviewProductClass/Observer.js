class Observer {
    constructor(name) {
      this.name = name;
    }
    
    update(data) {
      console.log(`{"Name": "${this.name}", "ReceiveData": ${data}},`);
    }
  }
  
  module.exports = Observer;