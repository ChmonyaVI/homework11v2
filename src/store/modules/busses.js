export default {
    namespaced: true,
    state: {
        bussesList: [
            {
                id: 1,
                number: 'AO2312HA',
                placesNumber: 40,
            },
            {
                id: 2,
                number: 'AO2371HA',
                placesNumber: 34,
            },
        ],
    },
    getters: {
        getBusesList: (state) => state.bussesList,
        getBusById: (state) => (busId) => state.bussesList.find((bus) => bus.id == busId),
    },
    mutations: {
        deleteBus(state, busId) {
            state.bussesList = state.bussesList.filter((bus) => bus.id !== busId)
        },
        addBus(state, bus) {
            state.bussesList.push(bus)
        },
        updateBus(state, busToUpdate) {
            const busIndex = state.bussesList.findIndex((bus) => bus.id === busToUpdate.id)
            state.bussesList[busIndex] = busToUpdate
        },
    },
    actions: {
        deleteBusAction({ commit, dispatch }, busId) {
            commit('deleteBus', busId)
            dispatch('assignments/deleteAssignmentByBusId', busId, { root: true })
        },
        addBusAction({ commit }, busData) {
            commit('addBus', {
                id: new Date().getTime(),
                ...busData,
            })
        },
        updateBusActions({ commit }, busToUpdate) {
            commit('updateBus', busToUpdate)
        },
    },
    modules: {},
}
