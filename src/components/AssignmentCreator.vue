<template>
    <div class="assignment-creator__container">
        <h1 class="assignment-creator__title">Добавиление назначение</h1>
        <div class="assignment-creator__wrapper">
            <div class="assignment-creator__item">
                <label for="" class="assignment-creator__label"
                    >Шофер:
                    <select v-model="assignment.driverId">
                        <option v-for="driver in getDriversList" :key="driver.id" :value="driver.id">
                            {{ driver.name }} - Epx {{ driver.exp }}
                        </option>
                    </select></label
                >
            </div>
            <div class="assignment-creator__item">
                <label for="" class="assignment-creator__label"
                    >Автобус:
                    <select v-model="assignment.busId">
                        <option v-for="bus in getBusesList" :key="bus.id" :value="bus.id">
                            {{ bus.number }} - places {{ bus.placesNumber }}
                        </option>
                    </select></label
                >
            </div>
            <button class="button" @click="onAdd">Add</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AssignmentCreator',

    data() {
        return {
            assignment: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriversList']),
        ...mapGetters('busses', ['getBusesList']),
    },
    methods: {
        ...mapActions('assignments', ['updateAssignmentList']),
        onAdd() {
            this.updateAssignmentList(this.assignment)
            this.assignment = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.assignment-creator {
    // .assignment-creator__container

    &__container {
    }

    // .assignment-creator__wrapper

    &__wrapper {
        display: flex;
        gap: 10px;
    }

    // .assignment-creator__title

    &__title {
    }

    // .assignment-creator__item

    &__item {
    }

    // .assignment-creator__label

    &__label {
    }
}
.button {
}
</style>
