<template>
    <div class="drivers__container">
        <div class="drivers__wrapper">
            <div class="drivers__list">
                <div v-for="driver in getFilterDriverList" :key="driver.id" class="drivers__item">
                    <div class="drivers__name">{{ driver.name }}</div>
                    <div class="drivers__exp">{{ driver.exp }}</div>
                    <div class="drivers__block-button">
                        <button class="drivers__button" @click="onEdit(driver.id)">Edit</button>
                        <button class="drivers__button" @click="deleteDriverAction(driver.id)">Delete</button>
                    </div>
                </div>
            </div>
            <router-link :to="{ name: 'drivers-config' }" class="drivers__add">Add</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'DriversList',

    computed: {
        ...mapGetters('drivers', ['getFilterDriverList']),
    },

    methods: {
        ...mapActions('drivers', ['deleteDriverAction']),
        onEdit(driverId) {
            this.$router.push({
                name: 'drivers-config',
                params: { id: driverId },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.drivers {
    // .drivers__container

    &__container {
    }

    // .drivers__wrapper

    &__wrapper {
    }

    &__add {
        border: 2px solid black;
        padding: 5px 18px 5px 18px;
        border-radius: 5px;
        background-color: transparent;
        transition: all 0.3s ease 0s;
        text-decoration: none;
        &:hover {
            transition: all 0.3s ease 0s;
            background-color: #42b983;
            color: #fff;
            border: 2px solid #42b983;
        }
    }
    // .drivers__list

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }

    // .drivers__item

    &__item {
        display: flex;
        gap: 10px;
    }

    // .drivers__name

    &__name {
        flex-basis: 3%;
    }

    // .drivers__exp

    &__exp {
        flex-basis: 1%;
    }

    // .drivers__block-button

    &__block-button {
        display: flex;
        gap: 10px;
    }

    // .drivers__button

    &__button {
    }
}
</style>
