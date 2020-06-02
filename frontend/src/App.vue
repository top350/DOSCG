<template>
  <div id="app">
  <div>
  <b-navbar  id='nav-color' toggleable="lg" type="dark">
    <b-navbar-brand>DOSCG</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">CV</b-nav-item>
        <b-nav-item href="/findXYZ" >findXYZ</b-nav-item>
        <b-nav-item href="/findBC" >findBC</b-nav-item>
        <b-nav-item href="/bestRoute" >Best Route</b-nav-item>
      </b-navbar-nav>

   
    
    </b-collapse>
  </b-navbar>
</div>
   <router-view></router-view>
   <footer>
  <p class='footerText'>SCG Tech Dev Assignment  </p>
  </footer>
  </div>
  
</template>

<script>



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
}
#nav-color{
background: rgb(214,4,20);
background: linear-gradient(90deg, rgba(214,4,20,1) 0%, rgba(255,164,129,1) 100%);
}
footer{
  width: 100%;
  height: 90px;
  background: rgb(241, 13, 32);
background: linear-gradient(90deg, rgb(255, 138, 148) 0%, rgb(255, 201, 179) 100%);
margin-top:200px ;
padding: 10px;
}
.footerText{
  padding: 10px;
}
</style>
