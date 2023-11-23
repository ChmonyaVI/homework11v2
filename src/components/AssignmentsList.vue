<template>
    <div class="assignments-list__container">
        <div class="assignments-list__wrapper">
            <h1 class="assignments-list__title">Interview</h1>
            <div v-if="!isListEmpty" class="assignments-list__table">
                <table style="width: 70%" border="3">
                    <tbody>
                        <tr style="margin-bottom: 10px">
                            <th>#</th>
                            <th>Worker - position</th>
                            <th>Candidate - position</th>
                            <th>Day</th>
                            <th></th>
                        </tr>
                        <tr v-for="(interview, counter) in getInterviewsListWithNames" :key="interview.id">
                            <td>{{ counter++ }}</td>
                            <td>{{ interview.worker.name }} - {{ interview.worker.position }}</td>
                            <td>{{ interview.candidate.name }} - {{ interview.candidate.position }}</td>
                            <td>{{ interview.day }}</td>
                            <td>
                                <button class="button-delete" @click="deleteInterview(interview.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>Interviews list is empty!</div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AssignmentsList',

    computed: {
        ...mapGetters('interviews', ['getInterviewsListWithNames']),

        isListEmpty() {
            return !this.getInterviewsListWithNames.length
        },
    },
    methods: {
        ...mapActions('interviews', ['deleteInterview']),
    },
}
</script>

<style lang="scss" scoped>
.assignments-list {
    // .assignments-list__container

    &__container {
    }

    // .assignments-list__wrapper

    &__wrapper {
    }

    // .assignments-list__title

    &__title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    // .assignments-list__table

    &__table {
        margin: 10px;
        padding: 10px;
        border: 1px solid #000;
        border-radius: 15px;
    }
}
</style>
