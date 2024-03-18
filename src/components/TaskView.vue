<!-- creating an instnce of our todo view -->
<template>
  <!-- Task:
    - Title
    - Description
    - Status (complete or not complete)
    - Author
 -->

  <div id="task">
    <!-- title -->
    <div id="title">{{ title }}</div>
    <!-- description -->
    <div id="description">{{ description }}</div>
    <!-- status -->
    <div id="status">
      <!-- roundend  icon  -->
      <div v-show="status">complete: 👯</div>
      <div v-show="!status">complete: 😥</div>
    </div>
    <!-- Author -->
    <div id="author">{{ author }}</div>
  </div>
</template>

<script>
//  authoring our application using Options API
export default {
  // props ( we will be able ot pass data from one component to another eg the panda and bear analogy of passing honey to the other)
  props: ["title", "description", "status", "author"], // going to host an array of our variable in string form
};
</script>

<style scoped>
#task{
    margin:10px;
}
#title {
  font-size: 24px;
  font-weight: bold;
  text-align: start;
}
#description {
  font-size: 20px;
  text-align: start;
}
#status {
  font-size: 18px;
  text-align: start;
}
#author {
  font-size: 12px;
  text-align: start; 
  padding: 4px;
}
</style>
