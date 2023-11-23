<template>
    <div class="worker-edit__container">
        <div class="worker-edit__wrapper">
            <h1 class="worker-edit__title">Edit worker</h1>
            <div class="worker-edit__block">
                <label class="worker-edit__label"
                    >Worker name: <input v-model="workerData.name" type="text" class="worker-edit__input"
                /></label>
                <label class="worker-edit__label"
                    >Worker position: <input v-model="workerData.position" type="text" class="worker-edit__input"
                /></label>
            </div>
            <div class="worker-edit__action-block">
                <button class="worker-edit__button button-edit" @click="onAction">{{ actionsBtnTitle }}</button>
                <button class="worker-edit__button button-delete" @click="onCancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'WorkerEditorView',
    data() {
        return {
            workerData: {},
        }
    },
    computed: {
        ...mapGetters('workers', ['getWorkerById']),
        receivedWorkerId() {
            return this.$route.params.id
        },
        actionsBtnTitle() {
            return this.receivedWorkerId ? 'Save' : 'Create'
        },
    },
    created() {
        if (this.receivedWorkerId) {
            this.workerData = { ...this.getWorkerById(this.receivedWorkerId) }
        }
    },
    methods: {
        ...mapActions('workers', ['addWorker', 'onEditWorker']),
        onAction() {
            if (!this.receivedWorkerId) {
                this.addWorker({ id: new Date().getTime(), ...this.workerData })
            } else {
                this.onEditWorker(this.workerData)
            }
            this.$router.push({
                name: 'workers',
            })
        },
        onCancel() {
            this.$router.push({
                name: 'workers',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.worker-edit {
    // .worker-edit__container

    &__container {
    }

    // .worker-edit__wrapper

    &__wrapper {
    }

    // .worker-edit__title

    &__title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    // .worker-edit__block

    &__block {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    // .worker-edit__label

    &__label {
    }

    // .worker-edit__input

    &__input {
        padding: 2px 10px;
        border: 1px solid #000;
        border-radius: 7px;
        transition: border 0.3s ease 0s;
        &:focus {
            transition: border 0.3s ease 0s;
            border: 1px solid #42b983;
        }
    }

    // .worker-edit__action-block

    &__action-block {
    }

    // .worker-edit__button

    &__button {
        margin: 20px 5px 0px 5px;
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
</style>
