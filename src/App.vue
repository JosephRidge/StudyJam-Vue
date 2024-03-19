<script setup>
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div id="navigation"
  >
    <NavigationBar/>
    <!-- router view serves the purpose of relaying or displaying our target views -->
 <RouterView id="page"></RouterView>
  </div>
</template>

<style scoped>
#page{
  background-color: rgb(0, 0, 0);
  padding:32px;
  border-radius: 20px;
  margin-top:20px;

}
 
</style>
