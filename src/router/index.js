import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkerView from '../views/WorkerView.vue'
import WorkerEditorView from '../views/WorkerEditorView.vue'
import AssignmentsView from '../views/AssignmentsView.vue'
import CandidateView from '../views/CandidateView.vue'
import CandidateEditView from '../views/CandidateEditView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/workers',
        name: 'workers',
        component: WorkerView,
    },
    {
        path: '/workers/worker-editor/:id?',
        name: 'worker-editor',
        component: WorkerEditorView,
    },
    {
        path: '/candidates',
        name: 'candidates',
        component: CandidateView,
    },
    {
        path: '/candidates/candidates-editor/:id?',
        name: 'candidates-edit',
        component: CandidateEditView,
    },
    {
        path: '/assignments',
        name: 'assignments',
        component: AssignmentsView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
