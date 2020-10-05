function challenge0() {
    let num = 1
    while (num <= 3) {
        console.log(num)
        num = num + 1;
    }
}
challenge0();

function one2Five() {
    let num = 1
    while (num <= 5) {
        console.log(num)
        num += 1;
    }
}
one2Five();

function oneThruSix(option) {
    let num = 1
    let challenge2 = option
    while (num <= option) {
        console.log(num)
        num += 1;
    }
}
oneThruSix(5);

function first2nd(num1, num2) {
    while (num1 <= num2) {
        console.log(num1)
        num1 += 1;
    }
}
first2nd(3, 8);
first2nd(-2, 1);

function oddEven(num1) {
    let num = 1;
    while (num <= num1) {
        if (num % 2 === 1) {
            console.log(num + ' Odd')
        } else {
            console.log(num + ' Even')
        }
        num += 1;
    }
}
oddEven(7);

function onlyEven(num1) {
    let num = 1;
    while (num <= num1) {
        if (num % 2 === 0) {
            console.log(num)
        }
        num += 1;
    }
}
onlyEven(10);

function countdown() {
    let num = 10;
    while (num >= 1) {
        console.log(num)
        num -= 1;
    }
}
countdown();

function blastOff() {
    countdown()
}
blastOff();
console.log('Blast Off!')

function trioDown() {
    let num = 20;
    while (num > 1) {
        console.log(num)
        num -= 3;
    }
}
trioDown(20);

function hello() {
    let num = 1;
    while (num <= 7) {
        console.log(num + '. Hello!')
        num += 1;
    }
}
hello();

function sayHi(hello) {
    let num = 1;
    while (num <= 7) {
        console.log(num + hello)
        num += 1;
    }
}
sayHi('. Salute!');

function byeAndGo(times, str) {
    let num = 1;
    while (num <= times) {
        console.log(num + str)
        num += 1;
    }
}
byeAndGo(4, '. Good bye...');
byeAndGo(6, '. Get out!')

function think(str) {
    let num = 0;
    while (num < str.length) {
        console.log(str[num])
        num += 1;
    }
}
think('think');

function nobody(str) {
    let num = 1;
    while (num < str.length) {
        console.log(str[num])
        num += 2;
    }
}
nobody('Nobody');

function reversed(str) {
    let num = 7;
    while (num >= 0) {
        console.log(str[num])
        num -= 1;
    }
}
reversed('Mesuara');

function fizzBuzz(num) {
    let result = '';
    while (result <= num) {
    if (num % 3 === 0) {
        result += 'Fizz'
    } if (num % 5 === 0) {
        result += 'Buzz'
    } if (result === '') {
        result = num
        console.log(num)   
    } return result
    }
}
fizzBuzz(3);

function fibonacci(num) {
    let result = 1;
    while (num <= result) {
        result += num
        console.log(num)
    }
}
fibonacci(21);