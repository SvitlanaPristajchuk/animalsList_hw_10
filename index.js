/*const animalsList = [
    [`turtle`, `🐢`],
    [`octopus`, `🐙`],
    [`fish`, `🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];

function getFunc(arr, ...value) {
    arr = JSON.parse(JSON.stringify(arr))
}


let newFunc = getFunc(animalsList);
console.log(newFunc)*/




/*let doll;

function setName(name, surname) {
    let nameDoll = `my little ${name} ${surname}`;
    return nameDoll;


}
let dollFistr = setName('Anna', 'Pristajchuk')
let dollSecond = setName('svitlana', 'sheva')

console.log(dollFistr, dollSecond)*/

/*function sum(value) {
    let result = 0;

    for (let i = 0; i < value.length; i++) {
        result += value[i]
    }
    return result
}

function div(value) {
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        result -= value[i]
    }
    return result
}



function mathOper(operationName, ...value) {
    if (!value.length) return // перевіряємо, що масив не порожній

    operationName(value); // викликаємо фунцію із значеннями
    let lastResult = operationName(value) // присвоюємо змінній значення відпрацювання функції

    return lastResult


}

let sumResult = mathOper(sum, 10, 20, 30) // створюємо змінну для тримання результату операції додавання
let divResult = mathOper(div, 10, 20, 30) // ....віднімання

console.log(sumResult, divResult)*/


//function printHello() {
//    console.log('Hallo')
//}

/*const printHello = (name, surName) => {
    let fullName = `${name} ${surName}`;
    return `Hallo, ${name} ${surName}`
};

let AnnaFunction = printHello(`Svitlana`, `Pristajchuk`);
console.log(AnnaFunction)*/

/*const getName = (name) => `Hello, ${name}`;

let vasjaHello = getName('Vasja')

console.log(vasjaHello)*/

/* 
let arr = [
    [10, 20, 30],
    [`dog`, `cat`, `lion`]
]
 */
/* for (let i = 0; i < arr.length; i++) {
    document.write(`<p>${arr[i]}</p>`)
} */

/* arr.forEach(function(el) {
    // document.write(`<p>${arr[i]}</p>`)
    //console.log(el, index, list)
    //document.write(`<li>${el}</li>`);
    el.forEach(function(item) {
        document.write(`<li>${item}</li>`);
    })

}) */


let arr = [10, 20, -100, -1000, 35, 78]

let filterArr = arr.filter(
    function(el) {
        return el > -1000

    })

console.log(filterArr)