const app = new Vue({
    el: "#app",
    data: {
    //    items: [],
    // principal:0,
    // annualInterestRate:0,
    // duration:0,
    // totalPayableAmount:0,
    x:0,
    y:0,
    },
    methods: {
    //    add methods
    // addItem(){
    //     this.items.push('New item')
    // }

    },
    computed: {
    //    simpleInterest(){
    //     return (this.principal * this.annualInterestRate * this.duration)/100
    //    },

    },
    watch: {
        x(p, q){
            if (p>q  && p>10){
                this.y = 1
            }
        },
    }
})

// appData = [
//     [2000, 10, 2],
//     [3000, 20, 3],
//     [5000, 30, 4],
// ]

// let handler = setInterval(()=> {
//     data = appData.pop()
//     app.principal = data[0]
//     app.annualInterestRate = data[1]
//     app.duration = data[2]
//     app.totalPayableAmount += app.simpleInterest
// }, 1000)

for (let i = 0; i<20; i++){
    let handler = setTimeout(() => {
    app.x++
    console.log(app.x, " , ", app.y)
}, 2000)


}