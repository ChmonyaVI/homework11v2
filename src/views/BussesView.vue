<template>
    <div class="busses__container">
        <div class="busses__list">
            <div v-for="bus in getBusesList" :key="bus.id" class="busses__item">
                <div class="busses__number">{{ bus.number }}</div>
                <div class="busses__places">{{ bus.placesNumber }}</div>
                <button class="button__edit" @click="onEdit(bus.id)">Edit</button>
                <button class="button__delete" @click="deleteBusAction(bus.id)">Delete</button>
            </div>
        </div>
        <router-link :to="{ name: 'busses-config' }" class="busses__add">Add</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'BussesView',
    computed: {
        ...mapGetters('busses', ['getBusesList']),
    },
    methods: {
        ...mapActions('busses', ['deleteBusAction']),
        onEdit(busId) {
            this.$router.push({
                name: 'busses-config',
                params: {
                    id: busId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.busses {
    // .busses__container

    &__container {
    }

    // .busses__list

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }

    // .busses__item

    &__item {
        display: flex;
        gap: 10px;
    }

    // .busses__number

    &__number {
        flex-basis: 5%;
    }

    // .busses__places

    &__places {
        flex-basis: 1%;
    }

    // .busses__add

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
}
.button {
}
</style>
