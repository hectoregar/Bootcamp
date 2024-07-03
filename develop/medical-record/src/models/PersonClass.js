class Person {
  constructor (documentId, typeDoc, firstName, lastName, dateBorn, address, city) {
    this._documentId = documentId
    this._typeDoc = typeDoc
    this._firstname = firstName
    this._lastName = lastName
    this._dateBorn = dateBorn
    this._address = address
    this._city = city
  }

  get documentId () {
    return this._documentId
  }

  set documentId (documentId) {
    this._documentId = documentId
  }

  get typeDoc () {
    return this._typeDoc
  }

  get firstName () {
    return this._firstname
  }

  set firstName (firstName) {
    this._firstname = firstName
  }

  get lastName () {
    return this._lastname
  }

  set lastName (lastName) {
    this._lastname = lastName
  }

  get DateBorn () {
    return this._dateBorn
  }
}

export default Person
