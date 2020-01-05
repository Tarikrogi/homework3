//1.
function a() {
    var i = 1;
    do {
        console.log(i)
        i++
    } while (i <= 50);
    return
}
a()

//2.

var arr = [1, 2, 3, 4, 5]
for (el of arr) {
    console.log(el)
}

//3.

var arr = [2, 3, 4, 5];
for (el of arr) {
    console.log(el)
}
var sum = 1

function a() {
    for (el of arr) {

        sum *= el

    }
    return sum
}
a()

//4.

obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
}
for (el in obj) {
    console.log(el, '- это', obj[el])
    console.log()
}

//5.

function a() {
    var i = 0
    while (i <= 100) {
        console.log(i)
        i++
    }
}
a()

//6.

var obj = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'

}
for (el in obj) {
    console.log(el)
    console.log(obj[el])
}

//7.

var arr = [2, 5, 9, 15, 0, 4]
for (el of arr) {
    if (el > 3 && el < 10) {
        console.log(el)
    }
}

//8.

var arr = [-1, 1, -10, 5, 6, 2, -15, 6]

function a() {
    var sum = 0
    for (el of arr) {
        if (el > 0) {
            sum += el
        }
    }
    return sum
}
a()

//9.

var arr = [1, 2, 5, 9, 4, 13, 4, 10]
for (el of arr) {
    if (el === 4) {
        console.log('Есть')
        break
    }
}

//10.

var arr = [10, 20, 30, 50, 235, 3000]
for (el of arr) {
    if (String(el).startsWith('1') || String(el).startsWith('2') || String(el).startsWith('5')) {
        console.log(el)
    }
}

//11.

var st = Math.pow(2, 10)
console.log(st)

//12.

var str = 'aaa@bbb@ccc';
var re = /@/gi;
var newstr = str.replace(re, '!');
console.log(newstr)

//13

var str = 'aaa bbb ccc'
console.log(str.substring(4, 7))
console.log(str.slice(4, 7))
console.log(str.substr(4, 3))

//14

var date = '2025-12-31'.split('-')
console.log(date.reverse().join('/'))

//15

var str = 'aaa bbb ccc'
console.log(str.substring(4, 7))
console.log(str.slice(4, 7))
console.log(str.substr(4, 3))

//16

var str = 'JS'
console.log(str.toLowerCase(str))

//17

var str = 'я учу javascript'.split('')
console.log(str.length - 2)


//18

var str = 'я учу javascript'

console.log(str.substring(2, 5))
console.log(str.substring(6, 16))
console.log(str.slice(2, 5))
console.log(str.slice(6, 16))
console.log(str.substr(2, 3))
console.log(str.substr(6, 10))

//19

var str = 'я учу javascript'
console.log('я учу javascript'.indexOf('учу'))

//20

var str = 'Я-учу-javascript!';
var re = /-/gi;
var newstr = str.replace(re, '!');
console.log(newstr)

//21

var str = 'я учу javascript!'.split(' ')
console.log(str)


//22

var str = 'я учу javascript!'.split('')
console.log(str)

//23

var date = '2025-12-31'.split('-')
console.log(date.reverse().join('.'))

//24

var arr = ['Я', 'учу', 'javascript', '!'].join('+')
console.log(arr)

//25

function a(str) {
    var str = prompt('Enter string');
    return str[0].toUpperCase() + str.slice(1)

}
a(str)

//26

function a(str) {
    var str = prompt('Enter string');
    return (str.slice(0, (str.length - 1)) + str.slice(-1).toUpperCase())

}
a(str)
    //27 

var str = 'var_test_text'

function a() {
    var re = /_test_text/gi;
    var newstr = str.replace(re, 'TestText');
    return newstr
}

a()

//28

var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']
var sum = 0

for (el of arr) {
    if (!isNaN(parseInt(el))) {
        sum += parseInt(el)
    }
}
console.log(sum)


//29

function getRandom(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}
var arr = []
for (i = 0; i < 10; i++) {
    arr.push(Math.pow(getRandom(10, 20), 5))
}
console.log(arr)

//30

var arr = ['AngularJS', 'JQuery'];
var dlyaLyudshix = []
arr.unshift('Backbone.js')
arr.push('React.JS', 'Vue.js')
arr.shift('Backbone.js')
arr.unshift('Common.JS')
arr.unshift('Backbone.js')
arr.splice(3, 1)
alert('Это здесь лишнее')
for (el of arr) {
    if (el === 'Vue.js') {
        dlyaLyudshix.push('Vue.js')
    }
}
console.log(arr)
console.log(dlyaLyudshix)

//31

var arr = []
for (i = 0; i < 5; i++) {
    arr.push(Number(prompt('Введите данные')))

}

function a(arr) {
    var sum = 0;
    for (j = 0; j < 5; j++) {
        sum = sum + arr[j]
    }
    return sum
}
console.log(arr)
console.log(a(arr))

//32

var x = prompt('Enter brand')
var y = prompt('Enter model')
var d = prompt('Enter color')
var mobile = {
    brand: x,
    model: y,
    color: d
}
console.log(mobile)

//33

var str = 'Как однажды Жак звонарь сломал фонарь головой'.split(' ')
str.splice(4, 3)
str.push('головой', 'сломал', 'фонарь')
alert(str.join(' '))
    //34

var arr = []
for (let i = 1; i <= 10; i++) {
    arr[i - 1] = []
    for (let j = 1; j <= 10; j++) {
        arr[i - 1].push('${i}x${j}=${i * j}')
        if (i === 6 && j === 6) {
            i = 11
            break
        }
    }
}