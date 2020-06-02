import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'
import Vue from "vue"
Vue.use(VueLocalStorage)
export default {
  name: 'findBC',
  props: {
    msg: String
  },
  data(){
    return{
      B:"",
      C:"",
      
    }
  },
   methods:{
   
    getResponse:async function(){
        var BCStorage = Vue.localStorage.get("BC")
        if(BCStorage==null){
        try {
       const res = await axios.get('http://localhost:3000/findBC');
      this.$localStorage.set("BC", JSON.stringify(res.data))
      var data =JSON.parse(this.$localStorage.get("BC"))
      
      this.B =data.B
      this.C =data.C
     
    } catch (error) {
      console.log(error)
    }
  }
  else{
     console.log('local storage has been stored')
     var data2 = JSON.parse(Vue.localStorage.get("BC"))
     console.log(data2)
     this.B =data2.B
    this.C =data2.C
  }
    }
}
}