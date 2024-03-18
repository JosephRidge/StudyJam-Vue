<!-- List out all of our todo list views -->

<template>
  <div>
    <div id="todo">My Todo List</div>
    <hr/>
    <!-- display list of tasks  -->
    <div v-for="(task, index) in tasks" :key="index">
      <TaskView
        :title="task.title"
        :description="task.description"
        :status="task.status"
        :author="task.author"
      />
      <hr />
    </div>
  </div>
</template>

<script>
// importtask view
import TaskView from "../components/TaskView.vue";
export default {
  components: {
    TaskView,
  },
  data() {
    return {
      tasks: [
        {
          title: "Wash Dishes",
          description: "Wash dishes using the liquid soap and not bar soap",
          status: false,
          author: "Mekatilii",
        },
        {
          title: "Clean Car",
          description: "Clean Car using the liquid car soap and not bar soap",
          status: false,
          author: "Wa Mwanza",
        },
        {
          title: "Wash Shoes",
          description: "Wash shoes using the brush and not 'kitambaaa'! ",
          status: false,
          author: "chief Koru",
        },
      ], // host our tasks
    };
  },
};
</script>

<style scoped>
#todo {
  font-size: 36px;
  color: yellow;
  font-weight: bold;
}
</style>
