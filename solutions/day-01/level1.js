const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

const emptyArray = []

const myArray = [
    'Hello',
    'World',
    'this',
    'is',
    '30 Days Of React',
    'by Asabeneh'
]

console.log("Length of myArray: " + myArray.length);

console.log("First item: " + myArray.filter(x => typeof x!== undefined).shift())
console.log("Middle item: " + myArray.filter(x => typeof x!== undefined)[Math.round(myArray.length / 2 - 1)])
console.log("Last item: " + myArray.filter(x => typeof x!== undefined).pop())

const mixedArray = [
    'String',
    23,
    true,
    'new',
    'false',
    false
]
console.log(mixedArray.length);

let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

console.log(itCompanies);

console.log("Length of itCompanies: " + itCompanies.length);

console.log("First company: " + itCompanies.filter(x => typeof x!== undefined).shift())
console.log("Middle company: " + itCompanies.filter(x => typeof x!== undefined)[Math.round(itCompanies.length / 2 - 1)])
console.log("Last company: " + itCompanies.filter(x => typeof x!== undefined).pop())

itCompanies.forEach((company) => (console.log(company)));

itCompanies.forEach((company, index) => (console.log(company.toUpperCase())));

console.log(itCompanies.toString() + " are big IT companies")