var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Humans!",
        visitor_name: "",
        visitors: [],
        discussedTopics: ["Setup Vue",
            "Simple Vue app",
            "How to do reactive programning using Vue",
            "v-on",
            "v-bind",
            "v-if",
            "v-model",
            "v-for",
            "computed"],
            video2_link: "./video2.webm",
            video3_link: "./video3.webm",
            youtube_link: "https://www.youtube.com/embed/j4YeLqxgj1k"
    },
    methods: {
        sayHi: function () {
            this.message = "Hi Madhav Ji!";
            this.count++;
            if (this.visitor_name != "") { this.visitors.push(this.visitor_name) };
            this.visitor_name = "";
        }
    },
    computed: {
        count: function () {
            return this.visitors.length;
        }
    }
})

