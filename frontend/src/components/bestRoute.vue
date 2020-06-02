

<template>
<html>


    <h1>Best way to go from SCG BangSue to Central World</h1>
    <iframe width='100%' height='500px' v-bind:src="src()"></iframe>
  <button class='btn' @click="getResponse">get Route</button>
  <ul>
      <li class='route' v-for="item of responses" :key="item.id" v-html="item.html_instructions">
        {{item.html_instructions}}
      </li>
    </ul>
  </html>
</template>

<script src='../scripts/bestRoute.js'>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='../styles/bestRoute.css' scoped>

</style>
