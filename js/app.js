const jobsData = [];

const app = Vue.createApp({
    data() {
        return { jobs: [], todos: [], newItem: "" };
    },
    methods: {
        //add methods here
    }
});


app.use(router);
app.mount('#app');
