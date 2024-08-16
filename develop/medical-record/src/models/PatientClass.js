import Person from './PersonClass.js'

class Patient extends Person {
  constructor (documentId, typeDoc, firstName, lastName, dateBorn, address, city, numRecord, sex, rh, listAler) {
    super(documentId, typeDoc, firstName, lastName, dateBorn, address, city)
    this._numRecord = numRecord
    this._sex = sex
    this._rh = rh
    this._listAler = listAler
  }

  get numRecord () {
    return this._numRecord
  }

  set numRecord (numRecord) {
    this._numRecord = numRecord
  }

  get sex () {
    return this._sex
  }

  set sex (sex) {
    this._sex = sex
  }

  get rh () {
    return this._rh
  }

  set rh (rh) {
    this._rh = rh
  }

  get listAler () {
    return this._listAler
  }

  set listAler (listAler) {
    this._listAler = listAler
  }
}

export default Patient
