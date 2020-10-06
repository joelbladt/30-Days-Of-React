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
