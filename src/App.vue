<script setup>
//  import task view
import TodoListView from "./views/TodoListView.vue";
</script>

<template>
  <div id="tasks">
    <TodoListView />
  </div>
</template>

<style scoped>
#tasks{
  background-color: rgb(0, 0, 0);
  padding:32px;
  border-radius: 20px;

}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
