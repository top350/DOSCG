<template>
<html>
<body>
  <b-container class="bv-example-row">
  <b-row class='question'>
    <b-col>A = 21</b-col>
      <b-col>A + B = 23</b-col>
        <b-col> A + C = -21 </b-col>
     
  </b-row>
  <b-col><button class='btn' @click="getResponse">Solve!</button></b-col>
<hr>
  <b-row >
    <b-col >B:<span class='text'> {{this.B}}</span></b-col>
    <b-col>C: <span class='text'> {{this.C}}</span></b-col>
  
  </b-row>
</b-container>
</body>

  </html>
</template>

<script src='../scripts/findBC.js'>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='../styles/findBC.css' scoped>


</style>
