<template>
  <div id="nav">
    <!-- home page route -->
    <RouterLink id="route" to="/"> Home </RouterLink>
    <!-- todo items route -->
    <RouterLink id="route" to="/tasks"> Task </RouterLink>
  </div>
</template>

<script></script>

<style>
#nav {
  background-color: black;
  color: white;
  border-radius:20px ;
  width: 100vw;
}
#route {
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px; 
}
</style>
