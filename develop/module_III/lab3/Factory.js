class Truck {
    constructor(name) {
        this.name = name;
    }

    driver() {
        console.log(`Driving a: ${ this.name }`);
}
}

class Car {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(`Driving a ${ this.name }`);
}
}

class RollFactory {
   createRoll(type, name) {
      switch (type) {
         case 'invitado ':
            return new invitado(name);
        case 'admin ':
            return new admin (name);
        default:
            throw new Error (`Unsupported type ${type}`);
      } 
}
}

const factory   = new RollFactory();
const myCar = factory.createRoll( {type: 'invitado', name: ' Visitante '});
const myTruck = factory.createVehicle({type: 'admin', name: 'ChevroleAdministrator total'});