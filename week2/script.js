// // array
// let x = [1,2,3];
// // console.log(`${typeof(x)}: [${x}] with length = ${x.length}`);
// // console.log(x[0]);

// // mixed element types
// let y = [1, 'b', a => a+1];
// // console.log(`${typeof(y)}: [${y}] with length = ${y.length}`);
// // console.log(x.length, y.length);

// // deleting
// x = [];
// console.log(`${typeof(x)}: [${x}] with length = ${x.length}`);

// // Holes
// y.length = 10;
// console.log(`${typeof(y)}: [${y}] with length = ${y.length}`);

// iteration
// let x = [1, 'b', a => a+1];
// x.length = 5;
// // for (let i =0; i<x.length; i++) {
// //     console.log(`x: ${x[i]} of type ${typeof(x[i])}`);
// // }

// //  'in' iteration - skips undefined entries
// for (const i in x) {
//     console.log(`x: ${x[i]} of type ${typeof(x[i])}`);
// }

// //  'of' iteration - also skips undefined entries
// for (const i of x) {
//     console.log(`x: ${i} of type ${typeof(i)}`);
// }


// Iteration over OBJECTS

// let x = {'a':  1, "b": 'alpha', 'c': [3,2,1]};
// for (const i in x) {
//     console.log(i);
// }
// for (const i of x) {
//     console.log(i);
// } // x is not iterable error
// for (const [k,v] of Object.entries(x)){
//     console.log(k, v);
// }


// Creating arrays with holes

// let x = new Array(5);
// x[1] = 10;
// x[3] = 'hello';

// for (const [k,v] of x.entries()){
//     console.log(`Index ${k}, value: ${v} of type ${typeof(v)}`);
// }

// for (const [k,v] of Object.entries()){
//     console.log(`Index ${k}, value: ${v} of type ${typeof(v)}`);
// }

// for (const i in x){
//     console.log(`Index ${i}, value: ${x[i]} of type ${typeof(x[i])}`);
// }


// Spreading

// let x = [1,2,3];
// let y = [0, ...x, 4];
// let z = [0, x, 4];
// console.log(x);
// console.log(y);
// console.log(z);


// these look like equivalent of stream operations in java

// let x = [1,-2,3,-4,5,6,-7,8];
// let y = x.find(t => t<0);
// console.log(x);
// console.log(y);
// console.log(x.filter(x => x<0));
// console.log(x.map(i => i> 0 ? '+' : '-'));
// // console.log(x.map(check condition ? if yes : if no));
// console.log(x.reduce((a,i) => a+i, 0));
// // initial value of a is 0 & and i changes values as it iterates over given array-- then a = a+i and so on until is gives a single value...
// console.log(x.reduce((a,i) => a*i, 1));
// console.log(x.sort()); // lexical sorting
// console.log(x.sort((a,b)=> a-b));

// Destructuring

// let x =[1,2,3];
// let [a,b] = x;
// console.log(a);
// console.log(b);

// Object destructuring

// const person = {
//     firstName : 'Albert',
//     lastName : 'Pinto',
//     age: 25,
//     city: 'Mumbai'
// };

// const {firstName: fn, city:c} = person;
// console.log(person);
// console.log(fn);
// console.log(c);
// const {lastName, age} = person;
// console.log(lastName);
// console.log(age);

// const {firstName, ...rem} = person;
// console.log(firstName);
// console.log(rem);


// ----------------------------


// Modularity