<template>
<body>
  <b-container class="bv-example-row">
    <b-row class="question">
      <b-col>X , Y , 5 , 9 , 15 , 23 , Z</b-col>
      <b-col>
        <button class="btn" @click="getResponse">Solve!</button>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        X:
        <span class="text">{{this.X}}</span>
      </b-col>
      <b-col>
        Y:
        <span class="text">{{this.Y}}</span>
      </b-col>
      <b-col>
        Z:
        <span class="text">{{this.Z}}</span>
      </b-col>
    </b-row>
  </b-container>
</body>
</template>

<script src='../scripts/findXYZ.js'>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='../styles/findXYZ.css' scoped>

</style>
