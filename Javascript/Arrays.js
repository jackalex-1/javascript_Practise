let a = ["apple", "Goku", "henry","1000.00", true, 904.9, 904.6];
let b = [40, 30, false, false, true, false];
let c = [5, 4, 7];
let d = [
    {
        Name : "Muhammad Omer",
        Book : "Three Ginats",
        id : 903330,
    },
    {
        Name : "Ahmed Shakeel",
        Book : "BlueBerries by John wanwaski",
        id : 903331,
    },
    {
        Name : "Abdull Aziz",
        Book : "Three Ginats",
        id : 903333,
    },
    {
        Name : "Ahmed Shakeel",
        Book : "Three Ginats",
        id : 903332 ,
    },
]

// let v = a.concat(b);
// let v = a.join(" + ");
// let v = a.indexOf(904.9);
// let v = b.lastIndexOf(false);
// let v = c.pop();
// let v = c.push(64);
// let v = c.reverse();
// let v = c.shift();
// let v = c.slice(0,2);
// let v = c.sort();
// let v = a.toString();

// var clg;

// function showTime() {
//     let v = new Date();
//     var time = `${v.getHours()}:${v.getMinutes()}:${v.getSeconds()}:${v.getMilliseconds()}`;
//     document.getElementById('time').innerHTML = time;
// }

// setInterval(showTime, 3000);

// --------------- Expensive Arrays 

// Every 

// const res = c.every(isHere);

// function isHere(item) {
//     return item <= 10;
// }

// console.log(res);

// Filter

// const res = c.filter(isHere);

// function isHere(item) {
//     return item >= 5 && item <= 10;
// }

// console.log(res);

// Map

// const res = d.map(isHere);

// function isHere(item) {
//     return item.Name;
// }

// console.log(res);

// >>>>>>>>>>>>>>>>>>>>>>>>>>    Coding Challenge no 1    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let a1 = ["num1", "num2"];
// let a2 = new Object(); 

// function array(input) {
//     return Array.isArray(input);
// }
    
// console.log(array(a1));
// console.log(array(a2));

// >>>>>>>>>>>>>>>>>>>>>>>>>>    Coding Challenge no 2    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let a1 = [1,2,4,8];

// let y = [...a1]
// console.log(y.every(function eve(item) {
//     return item > 7;
// }));
// console.log(a1);

// >>>>>>>>>>>>>>>>>>>>>>>>>>    Coding Challenge no 3    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let a1 = [1,6,7,4,true];

// let res = a1.slice(0,1);

// console.log(res);

// >>>>>>>>>>>>>>>>>>>>>>>>>>    Coding Challenge no 4    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let a1 = [3,6,1,8,43];

// function take(arr, numofIndex) {
//     let len = arr.length - numofIndex;
//     let r = arr.slice(len, arr.length);
//     return r;
// }

// console.log(take(a1, 3));

// >>>>>>>>>>>>>>>>>>>>>>>>>>    Coding Challenge no 5    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let a1 = ["Hello", "World", false];

// console.log(a1.toString());