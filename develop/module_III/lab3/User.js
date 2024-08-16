class User {
    constructor(email, firstName, lastName, typeDocument, numberDocument, phone, address, passw) {
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;
        this._typeDocument = typeDocument;
        this._numberDocument = numberDocument;
        this._phone = phone;
        this._address = address;
        this._passw = passw;
    }

    get email() {
        return this._emaill;
    }

    set email(value) {
        this._email =value;
        
    }

    get firstNamel() {
        return this._firstName;
    }

    set firstNamel(value) {
        this._firstNamel = value;
    }

    get lastName() {
        return this._lasttName;
    }

    set lastNamel(value) {
        this._lastNamel = value;
    }
    get typeDocument() {
        return this._typeDocument;
    }

    set typeDocument(value) {
        this._typeDocument = value;
    }

    get numberDocument() {
        return this._numberDocument;
    }

    set numberDocument(value) {
        this._numberDocument = value;
    }
    get phone() {
        return this._phone
    }

    set phone(value) {
        this._phone = value;
    }

    get address() {
        return this._address
    }

    set address(value) {
        this._address = value
    }

    get passw() {
        return this._passw
    }

    set passw(value) {
        this._passw = value;
    }
    displayInfo() {
      console.log(`Email: ${this._email}, FirstName: ${this._firstName}, LastName: ${this._lastName}, TypeDocument: ${this._typeDocument}, NumberDocument:${this._numberDocument}, Phone: ${this._phone}, Address: ${this._address}, Password: ${this._passw}`)  

    }
   
    updatetypeDocument(newtypeDocument) {
        this._typeDocument = newtypeDocument;
        console.log(`Type Document to: ${this._typeDocument}` );
    }
}

module.exports = User;
