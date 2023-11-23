<template>
    <div class="worker__container">
        <h1 class="worker__title">Workers list</h1>
        <ul class="worker__list">
            <li v-for="worker in getWorkersList" :key="worker.id" class="worker__item">
                <div class="worker__name">{{ worker.name }} - {{ worker.position }}</div>
                <div class="worker__btn-block">
                    <button class="worker__button button-edit" @click="onEdit(worker.id)">Edit</button>
                    <button class="worker__button button-delete" @click="deleteWorker(worker.id)">Delete</button>
                </div>
            </li>
        </ul>
        <router-link :to="{ name: 'worker-editor' }">Add worker</router-link>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'WorkerView',

    computed: {
        ...mapGetters('workers', ['getWorkersList']),
    },
    methods: {
        ...mapActions('workers', ['deleteWorker']),
        onEdit(id) {
            this.$router.push({
                name: 'worker-editor',
                params: { id: id },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.worker {
    // .worker__container

    &__container {
        margin: 0 auto;
        width: 800px;
    }

    // .worker__title

    &__title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    // .worker__list

    &__list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    // .worker__item

    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px;
        transition: background-color 0.3s ease 0s;
        &:hover {
            transition: background-color 0.3s ease 0s;
            background-color: #e1e0e0;
        }
    }

    // .worker__name

    &__name {
    }

    // .worker__btn-block

    &__btn-block {
        display: flex;
        gap: 5px;
    }

    // .worker__button

    &__button {
    }
}
.button-edit {
    width: 100px;
    border: 2px solid black;
    padding: 5px 18px 5px 18px;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s ease 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease 0s;
        background-color: #6e6b6b;
        color: #fff;
        border: 2px solid #6e6b6b;
    }
}
.button-delete {
    width: 100px;
    border: 2px solid black;
    padding: 5px 18px 5px 18px;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s ease 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease 0s;
        background-color: #ff0000;
        color: #fff;
    }
}
.button-add {
    margin: 0 auto;
    width: 100px;
    border: 2px solid black;
    padding: 5px 18px 5px 18px;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s ease 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease 0s;
        background-color: #42b983;
        color: #fff;
        border: 2px solid #42b983;
    }
}
</style>
