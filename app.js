const app = Vue.createApp({

    data(){
        return{
             title: 'The Love Book',
             author: 'Festus Uduevbo',
             age: '29'
        }
    },
    methods:{
        changeTitle(){
            this.title = 'words of radiance'
        }
    }
})

app.mount('#app')