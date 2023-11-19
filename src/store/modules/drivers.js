function isMatchFilter(driver, filter) {
    if (filter.name) {
        if (!driver.name.toLowerCase().includes(filter.name.toLowerCase())) return false
    }
    if (filter.expMin) {
        if (filter.expMin > driver.exp) return false
    }
    if (filter.expMax) {
        if (filter.expMax < driver.exp) return false
    }
    return true
}
export default {
    namespaced: true,
    state: {
        driversList: [
            {
                id: 1,
                name: 'Ivan',
                exp: 12,
            },
            {
                id: 2,
                name: 'Petro',
                exp: 23,
            },
        ],
        filterDrivers: {},
    },
    getters: {
        getDriversList: (state) => state.driversList,
        getFilterDriverList: (state) =>
            state.driversList.filter((driver) => isMatchFilter(driver, state.filterDrivers)),
        getDriverId: (state) => (driverId) => state.driversList.find((driver) => driver.id == driverId),
    },
    mutations: {
        deleteDriverAction(state, driverId) {
            state.driversList = state.driversList.filter((driver) => driver.id !== driverId)
        },
        addDriver(state, driverData) {
            state.driversList.push(driverData)
        },
        updateDriver(state, driverToUpdate) {
            const driverIndex = state.driversList.findIndex((driver) => driver.id === driverToUpdate.id)
            state.driversList[driverIndex] = driverToUpdate
        },
        setFilter(state, filter) {
            state.filterDrivers = filter
        },
    },
    actions: {
        deleteDriverAction({ commit, dispatch }, driverId) {
            commit('deleteDriverAction', driverId)
            dispatch('assignments/deleteAssignmentByDriverId', driverId, { root: true })
        },
        addDriverAction({ commit }, driverData) {
            commit('addDriver', {
                id: new Date().getTime(),
                ...driverData,
            })
        },
        updateDriver({ commit }, driverToUpdate) {
            commit('updateDriver', driverToUpdate)
        },
        updateFilter({ commit }, filterData) {
            commit('setFilter', filterData)
        },
    },
    modules: {},
}
