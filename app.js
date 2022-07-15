const app = Vue.createApp({

    data(){
        return{
             showBooks: true,
             title: 'The Love Book',
             author: 'Festus Uduevbo',
             age: '29'
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')