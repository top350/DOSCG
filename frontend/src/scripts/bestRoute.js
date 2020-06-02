import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage)
export default {
  name: 'bestRoute',
  props: {
    msg: String
  },
  
  data(){
    return{
    origin:'SCG+Bangsue+Thailand',
    destination:'Central+World+Thailand',
    url:'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCx_mWQuQkXZUqomFVemsTSHrmV63tqKCw',
    responses:[]
    }
  },
 
  methods:{
    src:function(){
      return this.url+'&origin='+this.origin+'&destination='+this.destination
    },
    getResponse:async function(){
     var routeStorage =this.$localStorage.get('Route')
     
   if(routeStorage==null){
        try {
       const res = await axios.get('http://localhost:3000/findBestRoute');
       this.$localStorage.set('Route', JSON.stringify(res.data))
    
      this.responses = JSON.parse(this.$localStorage.get('Route'))
     
     
    } catch (error) {
      console.log(error)
    }
   }else {
     console.log('local storage has been stored')
     console.log(JSON.parse(this.$localStorage.get('Route')))
     this.responses = JSON.parse(this.$localStorage.get('Route'))
   }
     
     
     
  
 }
  }
}
