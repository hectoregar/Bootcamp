const Member = require("./Member");
const User = require("./User");
let user =new User('hector123@gmail.com', 'Hector', 'Garcia', 'CC', '123456', '60145678', 'calle feliz', '123*..' );
user.displayInfo();
user.updatetypeDocument("Registro_Internacional");
user.displayInfo();

// Crear instancia de Roll de usuario

let admin = new Member('hector123@gmail.com', 'Hector', 'Garcia', 'CC', '123456', '60145678', 'calle feliz', '123*..', '01', 'invitado' )
admin.displayInfo();
admin.updatetypeDocument("Registro internacional de identificación");
admin.displayInfo();