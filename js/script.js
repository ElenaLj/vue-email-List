const app = new Vue({
    el: '#root',
    data: {
        emails: []
    }, 
    methods: {},
    created() {
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp) => {
            //console.log(resp.data.response);
            this.emails.push(resp.data.response);
            console.log(this.emails);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            });
        }
    }
});