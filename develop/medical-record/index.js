import Patient from './src/models/PatientClass.js'
import Person from './src/models/PersonClass.js'
import TemporaryEmployee from './src/models/type-contract/TemporaryEmployeeClass.js'

// Class Person

console.log('run class person')

const person = new Person('123', 'cc', 'Andres', 'Mendoza', '24-01-1990', 'cll feliz', 'Av SiempreViva 123')

console.log(person)

console.log(person.firstName)

// Class Patient
console.log('run class patient')

const patient = new Patient('123', 'cc', 'Andres', 'Mendoza', '24-01-1990', 'cll feliz', 'Av SiempreViva 123', '2392', 'male', '+o', ['adsd', 'acsdcd', 'sdsdv'])

console.log(patient)

console.log(patient.rh)

// Class TemporaryEmpoyee
const temployee = new TemporaryEmployee('123', 'cc', 'Andres', 'Mendoza', '24-01-1990', 'av siempre viva 123', 'springfiel', '33', '01-01-2010', 'ti', 4200, 8, 3, 0, '31-11-2011')

console.log(temployee)

console.log(temployee.calcSalary())
