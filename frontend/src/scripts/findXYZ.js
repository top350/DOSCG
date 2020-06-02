import axios from "axios";
import VueLocalStorage from "vue-localstorage";
import Vue from "vue";
Vue.use(VueLocalStorage);
export default {
  name: "findXYZ",
  props: {
    msg: String
  },
  data() {
    return {
      X: "",
      Y: "",
      Z: ""
    };
  },
  methods: {
   
    getResponse: async function() {
      var XYZStorage = Vue.localStorage.get("XYZ");
      if (XYZStorage == null) {
        try {
          const res = await axios.get("http://localhost:3000/findXYZ");
          this.$localStorage.set("XYZ", JSON.stringify(res.data));
          var data = JSON.parse(this.$localStorage.get("XYZ"));
          this.X = data.X;
          this.Y = data.Y;
          this.Z = data.Z;
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("local storage has been stored");
        var data2 = JSON.parse(this.$localStorage.get("XYZ"));
        this.X = data2.X;
        this.Y = data2.Y;
        this.Z = data2.Z;
      }
    }
  }
};