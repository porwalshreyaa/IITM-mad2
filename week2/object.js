// let xx = {'a':5,'b': 'hello'};
// console.log(xx);
// xx.add = function(x,y) {
//     return x+y;
// }

// console.log(`xx is of type: ${typeof(xx)}`);
// console.log(`xx.add is of type: ${typeof(xx.add)}`);
// // xx.add is now a method of the object xx
// console.log(`Evaluate the function xx.add(3,4) gives: ${xx.add(3,4)}`);

// //  we can declare another method/function that uses the value
// // Special variable 'this'
// xx.f = function(x) {
//     return this.a +x;
// }
// console.log(xx.f(10));


// copy as pointers
// let yy = xx;
// xx.a = 6;
// console.log(xx);
// console.log(yy);



// Same concepts of Shallow copying and deep copying as in Java


// Getter and setter patterns

// let user = {
//     first: 'Albert',
//     last: 'Pinto',
//     get full() {
//         return this.first + ' ' + this.last;
//     },
//     set full(f) {
//         const parts = f.split(' ');
//         this.first = parts[0];
//         this.last = parts[1];
//     },
// }

// console.log(user.full);
// user.full = 'Gabbar Singh';
// console.log(`Now ${user.first} and ${user.last} - ${user.full}`);


// function methods

// let xx = {'a':5,
//     'b': 'hello',
//     'add': function (x,y) {
//         return x + y + this.a;
//     }
// };

// let z = xx.add;
// // call()
// // console.log(z.call("", 3,4));
// console.log(z.call(xx, 3,4));

// apply() -spreads the arguments - extra arguments get ignored
// console.log(z.apply(xx, [1,2,3,4])); // a =5,----> z.add(xx, 1,2)

// bind() -closure
// let z2 = z.bind(xx, 2);
// // bound value of 1st 2 arguments
// console.log(z2(3))



// Prototype
// const x = {a:1, inc: function () {this.a++}};
// console.log(x);
// const y = {__proto__:x, b:2};
// console.log(y);


// Classes

// class Animal {
//     constructor(name){
//         this.name = name;
//     };
//     describe(){
//         return `${this.name} makes a sound ${this.sound}`
//     }
// }

// // let x = new Animal('Jerry');
// // console.log(x.describe());

// // class Dog extends Animal {
// //     constructor(name){
// //         super(name);
// //         this.sound = 'Woof';
// //     }
// // }
// // let d = new Dog('Spike');
// // console.log(d.describe());

// class Cat extends Animal {
//     constructor(name){
//         super(name);
//         this.sound = 'Miao';
//     }
//     static fromJson(o){
//         c = new Cat(o.name);
//         c.sound = o.sound;
//         return c;
//     }
// }
// let c = new Cat('Tom');
// console.log(c.describe());

