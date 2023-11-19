<template>
    <div class="driver-filter__container">
        <div class="driver-filter__wrapper">
            <div class="driver-filter__block">
                <label class="driver-filter__label"
                    >Drivers name: <input v-model="filterData.name" type="text" class="driver-filter__input"
                /></label>
            </div>
            <div class="driver-filter__block">
                Drivers стаж:
                <label class="driver-filter__label">
                    Вид <input v-model="filterData.expMin" type="number" class="driver-filter__input"
                /></label>
            </div>
            <div class="driver-filter__block">
                <label class="driver-filter__label">
                    До <input v-model="filterData.expMax" type="number" class="driver-filter__input"
                /></label>
            </div>
            <button class="button" @click="clearFilter">Clear</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'DriversFilters',

    data() {
        return {
            filterData: {},
        }
    },

    watch: {
        filterData: {
            handler(newFilterValue) {
                this.updateFilter(newFilterValue)
            },
            deep: true,
        },
    },
    methods: {
        ...mapActions('drivers', ['updateFilter']),
        clearFilter() {
            this.filterData = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.driver-filter {
    // .driver-filter__container

    &__container {
    }

    // .driver-filter__wrapper

    &__wrapper {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    // .driver-filter__block

    &__block {
    }

    // .driver-filter__label

    &__label {
    }

    // .driver-filter__input

    &__input {
    }
}
</style>
