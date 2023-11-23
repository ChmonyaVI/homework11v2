export default {
    namespaced: true,
    state: {
        interviewsList: [
            { id: 1, workerId: 1, candidateId: 11, day: 'Понеділок' },
            {
                id: 2,
                workerId: 2,
                candidateId: 13,
                day: 'Вівторок',
            },
        ],
    },
    getters: {
        getInterviewsList: ({ interviewsList }) => interviewsList,
        getInterviewsListWithNames: (state, getters, rootState, rootGetters) =>
            state.interviewsList.map((interview) => ({
                id: interview.id,
                worker: rootGetters['workers/getWorkerById'](interview.workerId),
                candidate: rootGetters['candidates/getCandidateById'](interview.candidateId),
                day: interview.day,
            })),
    },
    mutations: {
        addInterview(state, interviewData) {
            state.interviewsList.push(interviewData)
        },
        deleteInterview(state, interviewId) {
            state.interviewsList = state.interviewsList.filter((interview) => interview.id !== interviewId)
        },
        deleteInterviewByWorkerId(state, workerId) {
            state.interviewsList = state.interviewsList.filter((interview) => interview.id !== workerId)
        },
        deleteInterviewByCandidateId(state, candidateId) {
            state.interviewsList = state.interviewsList.filter((interview) => interview.id !== candidateId)
        },
    },
    actions: {
        onAddInterview({ commit }, interviewData) {
            commit('addInterview', {
                id: new Date().getTime(),
                ...interviewData,
            })
        },
        deleteInterview({ commit }, interview) {
            commit('deleteInterview', interview)
        },
        deleteInterviewByWorkerId({ commit }, workerId) {
            commit('deleteInterviewByWorkerId', workerId)
        },
        deleteInterviewByCandidateId({ commit }, candidateId) {
            commit('deleteInterviewByCandidateId', candidateId)
        },
    },
    modules: {},
}
