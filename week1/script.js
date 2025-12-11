// console.log("Hello");

// let x= 0;
// const num=42;
// var donuse=true;
// console.log(x,num,donuse);
// num=5;
// console.log(num);

// var x1 = 10;
// {
//     console.log(x1);
//     var x1=40;
// }
// console.log(x1);

// // let x2 = 10;
// {
//     // console.log(x2);
//     let x2=40;
// }
// console.log(x2);


// let s = "Hello";
// console.log(s, s.length, s.substring(2,4), s[1]);
// let pp = `${s} Shreya`;
// console.log(pp);

// console.log(5+4);
// console.log(5+'4');
// console.log(3*'4');
// console.log('3'*'4');

// console.log(3=='3');
// console.log(3==='3');
// console.log(undefined==null);
// console.log(undefined===null);

// regular function 
// - statement
// function add(x,y){ return x+y;}

// named function 
// - expression (it has anonymous function assigned to a variable 'add')
// let add = function(x+y) { return x+y;}

// arrow function
// - expression
// let add = (x,y) => x+y;

//  Anonymous functions and IIFEs (Immediately invoked function expressions)

// let x = function () {return "hello"} //Anonymous bound
// (function () { return "hello"} () )  // Declare and invoke


// Objects can have functions inside them = Methods

// Functions can have objects inside them = ???
// function add(x,y) {
//     return x+y;
// }
// console.log(typeof(add));
// console.log(add(2,3));
// add.v = {'a':3, 'b':6};
// console.log(add.v);
// console.log(add.v.a);
// console.log(typeof(add));
// console.log(typeof(add.v));

// const d1 = document.getElementById('d1');
// d1.innerHTML = 'Welcome to  d1';

// const d2 = document.getElementById('d2');
// d2.innerHTML = 'Bye from d2';

// Async functions with timeouts

// async function demo() {
//     console.log("Just Starting");
//     await new Promise(r => setTimeout(r, 2000));

//     const d1 = document.getElementById('d1');
//     d1.innerHTML = 'Welcome to  d1';
//     console.log('After 2 seconds');

//     await new Promise(r => setTimeout(r, 2000));
//     const d2 = document.getElementById('d2');
//     d2.innerHTML = 'Bye from d2';
//     console.log('After 4 seconds');
// }

// demo();

// Handeling events onclick

// let x = 0;
// const d1 = document.getElementById('d1');
// d1.innerHTML = `Click count: ${x}`;
// d1.addEventListener('click', e => {
//     x=x+10;
//     // x++;
//     d1.innerHTML = `Click count: ${x}`;
//     d1.style.fontSize = `${x}px`;
// })

