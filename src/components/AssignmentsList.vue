<template>
    <div class="assignments__container">
        <div class="assignments__wrapper">
            <h1 class="assignments__title">Назначение</h1>
            <div class="assignments__list">
                <div v-for="assignment in getFilledAssignmentsList" :key="assignment.id" class="assignments__item">
                    <div class="assignments__name">
                        {{ assignment.driverName }}
                    </div>
                    <div class="assignments__number">- {{ assignment.busNumber }}</div>
                    <div class="assignments__block-btn">
                        <button class="button" @click="deleteAssignmentActions(assignment.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AssignmentsList',

    computed: {
        ...mapGetters('assignments', ['getFilledAssignmentsList']),
    },
    methods: {
        ...mapActions('assignments', ['deleteAssignmentActions']),
    },
}
</script>

<style lang="scss" scoped>
.assignments {
    // .assignments__container

    &__container {
    }

    // .assignments__wrapper

    &__wrapper {
    }

    // .assignments__title

    &__title {
    }

    // .assignments__list

    &__list {
    }

    // .assignments__item

    &__item {
        display: flex;
        margin-bottom: 10px;
    }

    // .assignments__block

    &__block {
    }

    // .assignments__block-btn

    &__block-btn {
    }
    // .assignments__name

    &__name {
        flex-basis: 3%;
    }

    // .assignments__number

    &__number {
        flex-basis: 6%;
    }
}
.button {
}
</style>
