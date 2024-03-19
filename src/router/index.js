// import the methods that would allow us to create th vue oruter intance
import { createRouter, createWebHistory} from 'vue-router';

//import or rather bring in the components we want to navigate to:
import TodoListView from '../views/TodoListView.vue';
import HomePageView from '../views/HomePageView.vue';

//  create our router object
const router = createRouter(
    {
        history:createWebHistory(),
        routes:[
          {
            path:'/', // on your url what endpoint will be hit?? 
            name:'home',
            component:HomePageView,
          },  
          {
            path:'/tasks',
            name:'task',
            component:TodoListView
          }
        ]

    }
);

// exporrt the router  instance
export default router;
