import { workers } from '../../data/workers'
export default {
    namespaced: true,
    state: {
        workersList: workers,
        filterWorker: [],
    },
    getters: {
        getWorkersList: ({ workersList }) => workersList,
        getFilteredWorkersList: ({ filteredWorkersList }) => filteredWorkersList,
        getWorkerById: (state) => (workerId) => state.workersList.find((worker) => worker.id == workerId),
    },
    mutations: {
        deleteWorker(state, workerId) {
            state.workersList = state.workersList.filter((worker) => worker.id !== workerId)
        },
        addWorker(state, worker) {
            state.workersList.push(worker)
        },
        updateWorker(state, workerData) {
            const index = state.workersList.findIndex((worker) => worker.id == workerData.id)
            state.workersList[index] = workerData
        },
        filterWorkerByPosition(state, position) {
            if (position) {
                state.filteredWorkersList = [
                    ...state.workersList.filter((worker) =>
                        worker.position.toLowerCase().includes(position.toLowerCase())
                    ),
                ]
            } else {
                state.filteredWorkersList = state.workersList
            }
        },
    },
    actions: {
        addWorker({ commit }, worker) {
            commit('addWorker', worker)
        },
        deleteWorker({ commit, dispatch }, workerId) {
            commit('deleteWorker', workerId)
            dispatch('interviews/deleteInterviewByWorkerId', workerId, { root: true })
        },
        onEditWorker({ commit }, workerData) {
            commit('updateWorker', workerData)
        },
        onFilterWorkerByPosition({ commit }, position) {
            commit('filterWorkerByPosition', position)
        },
    },
    modules: {},
}
