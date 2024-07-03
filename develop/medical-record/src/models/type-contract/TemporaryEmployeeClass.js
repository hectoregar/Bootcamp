import Employee from '../EmployeeClass.js'

class TemporaryEmployee extends Employee {
  constructor (documentId, typeDoc, firstName, lastName, dateBorn, address, city, empId, dateEntry, workArea, valueHour, numNightHours, numHoursAdditionals, hourFee, contractEndDate) {
    super(documentId, typeDoc, firstName, lastName, dateBorn, address, city, empId, dateEntry, workArea, valueHour, numNightHours, numHoursAdditionals)
    this._hourFee = hourFee
    this._contractEndDate = contractEndDate
  }

  calcSalary () {
    const salary = this._valueHour * (this._numNightHours + this._numHoursAdditionals) * 30
    return salary
  }
}

export default TemporaryEmployee
