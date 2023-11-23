import { candidates } from '../../data/candidates'
export default {
    namespaced: true,
    state: {
        candidatesList: candidates,
        filterCandidates: [],
    },
    getters: {
        getCandidatesList: ({ candidatesList }) => candidatesList,
        getFilteredCandidatesList: ({ filteredCandidatesList }) => filteredCandidatesList,
        getCandidateById: (state) => (candidateId) =>
            state.candidatesList.find((candidate) => candidate.id == candidateId),
    },
    mutations: {
        deleteCandidate(state, candidateId) {
            state.candidatesList = state.candidatesList.filter((candidate) => candidate.id !== candidateId)
        },
        addCandidate(state, candidate) {
            state.candidatesList.push(candidate)
        },
        updateCandidate(state, candidateData) {
            const index = state.candidatesList.findIndex((candidate) => candidate.id == candidateData.id)
            state.candidatesList[index] = candidateData
        },
        filterCandidateByPosition(state, position) {
            if (position) {
                state.filteredCandidatesList = [
                    ...state.candidatesList.filter((candidate) =>
                        candidate.position.toLowerCase().includes(position.toLowerCase())
                    ),
                ]
            } else {
                state.filteredCandidatesList = state.candidatesList
            }
        },
    },
    actions: {
        addCandidate({ commit }, candidate) {
            commit('addCandidate', candidate)
        },
        deleteCandidate({ commit, dispatch }, candidateId) {
            commit('deleteCandidate', candidateId)
            dispatch('interviews/deleteInterviewByCandidateId', candidateId, { root: true })
        },
        onEditCandidate({ commit }, candidateData) {
            commit('updateCandidate', candidateData)
        },
        onFilterCandidateByPosition({ commit }, position) {
            commit('filterCandidateByPosition', position)
        },
    },
    modules: {},
}
