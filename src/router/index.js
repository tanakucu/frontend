import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '../components/LoginComponent.vue'
import TableComponent from '../components/TableComponent.vue'
import EditModal from '../components/EditModal.vue'
import HistoryLog from '../components/HistoryLog.vue'; 

const routes = [
  {
    path: '/',
    name: ' ',
    component: LoginComponent
  },
  {
    path: '/login',
    name: 'LoginComponent',
    component: LoginComponent
  },
  {
    path: '/table',
    name: 'Table',
    component: TableComponent,
    children: [
      {
        path: 'edit/:id',
        name: 'EditModal',
        component: EditModal,
        props: true 
      }
    ]
  },
  {
    path: '/history',
    name: 'HistoryLog',
    component: HistoryLog
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router;
