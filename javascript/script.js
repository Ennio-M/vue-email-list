const app = new Vue({
    el: '#app',
    data: {
        numEmails: 10,
        emailList: []
    },
    methods: {

    },
    mounted(){
        for(let i = 0; i < this.numEmails; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                this.emailList.push(res.data.response)
            }).catch((error) => {
                console.log(error)
            })
        }
    }
})