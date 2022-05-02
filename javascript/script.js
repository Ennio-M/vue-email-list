const app = new Vue({
    el: '#app',
    data: {
        numEmails: 10,
        emailList: [],
        ready: null
    },
    methods: {
        reset() {
            this.ready = true;
            this.emailList = [];
            for(let i = 0; i < this.numEmails; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    this.emailList.push(res.data.response)
                }).catch((error) => {
                    console.log(error)
                }).finally(() => {
                    this.emailList.length === this.numEmails ? this.ready= false : '';
                })
            }
        }
    },
    mounted(){
        this.reset();
    }
})