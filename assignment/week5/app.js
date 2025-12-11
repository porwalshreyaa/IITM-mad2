// new Vue({
//     el: '#app',
//     data(){
//         return{
// //             liveSessions:[],
//             weather:[]
//         }
//     },
    // async created(){
    //     return fetch('http://127.0.0.1:8080/assignment/week5/data.json')
    //     .then(response => response.json())
    //     .then(responseJson =>{
    //         // this.liveSessions=responseJson.data;
    //         console.log(responseJson)
    //         this.liveSessions=responseJson.data.attendees
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });
    // }

//     async created(){
//         return fetch('https://fcc-weather-api.glitch.me/api/current?lat=12.97&lon=77.59')
//         .then(response => response.json())
//         .then(responseJson => {
//             this.weather = responseJson
//             console.log(this.weather)
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     }

// })

// new Vue({
//     el: '#app',
//     data() {
//       return {
//         weather: {}
//       };
//     },
//     async created() {
//       try {
//         const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true');
//         const data = await response.json();
//         this.weather = data.current_weather;
//         console.log(this.weather);
//       } catch (error) {
//         console.error('Fetch failed:', error);
//       }
//     }
//   });
  

// new Vue({
//     el: '#app',
//     data() {
//       return {
//         time: []
//       };
//     },
//     async created() {
//       try {
//         const response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//         const data = await response.json();
//         this.time = data.current_weather;
//         console.log(this.time);
//       } catch (error) {
//         console.error('Fetch failed:', error);
//       }
//     }
//   });
  

// let x = 2,
// n= 3
// k =4

// const Promise1 = new Promise((resolved, rejected) => {
//     if (k<n){
//         resolved(x)
//     } else {
//         rejected('Bad Promise')
//     }
// })

// const promise2 = Promise1.then((x) => {
//     return x * x
// })
// promise2 
// .then((x)=>  {
//     console.log(x)
// })
// .catch((err) => {
//     console.log(err)
// })

// function promiseGenerator(s) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Will resolve after ${s} seconds`)
//         }, s * 1000)
//     })
// }

// async function asyncFunc() {
//     console.log('Initial statement')
//     let prom1Val = await promiseGenerator(20)
//     console.log(prom1Val)
//     let prom2Val = await promiseGenerator(30)
//     console.log(prom2Val)
// }

// asyncFunc()

// let start = 5;
// function check() {
//     return new Promise((res, rej) => {
//         let a1 = setInterval(() => {
//             start++;
//             if (start ===7) {
//                 console.log("Reached");
//                 clearInterval(a1);
//                 res("Pass");
//                 rej("Fail");
//             }
//             else {
//                 console.log('Yet to Reach');
//             }
//         }, 500);
//     })
// }

// check().then(
//     pass => console.log(pass)
// ).catch(
//     fail => console.log(fail)
// );

async function func1(){
    new Promise(rej => setTimeout(rej, 4000));

    async function func2(){
        await new Promise(rej => setTimeout(rej,2000));

        console.log("Finished");
    }
    func2();
}
func1();