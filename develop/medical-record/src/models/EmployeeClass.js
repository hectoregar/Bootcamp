import Person from './PersonClass.js'

class Employee extends Person {
  constructor (documentId, typeDoc, firstName, lastName, dateBorn, address, city, empId, dateEntry, workArea, valueHour, numNightHours, numHoursAdditionals) {
    super(documentId, typeDoc, firstName, lastName, dateBorn, address, city)
    this._empId = empId
    this._numHoursAdditionals = numHoursAdditionals
    this._dateEntry = dateEntry
    this._workArea = workArea
    this._valueHour = valueHour
    this._numNightHours = numNightHours
  }

  get empId () {
    return this.empId
  }

  get salary () {
    throw new Error('This method must be overridden by subclasses')
  }
}

export default Employee
