<template>
    <div class="edit-bus__container">
        <div class="edit-bus__wrapper">
            <label class="edit-bus__label">Bus number: <input v-model="busDate.number" type="text" /></label>
            <label class="edit-bus__label"
                >Bus places number: <input v-model="busDate.placesNumber" maxlength="2" type="number"
            /></label>
        </div>
        <button class="edit-bus__edit" @click="onAction">{{ actionButtonTitle }}</button>
        <button class="edit-bus__edit" @click="onCancel">Cancel</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'BussesEdit',

    data() {
        return {
            busDate: {},
        }
    },
    computed: {
        ...mapGetters('busses', ['getBusById']),
        receivedBusId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.receivedBusId ? 'Save' : 'Create'
        },
    },
    created() {
        this.busDate = { ...this.getBusById(this.receivedBusId) }
    },
    methods: {
        ...mapActions('busses', ['addBusAction', 'updateBusActions']),
        onAction() {
            if (!this.receivedBusId) {
                this.addBusAction(this.busDate)
                this.$router.push({
                    name: 'busses',
                })
            } else {
                this.updateBusActions(this.busDate)
                this.$router.push({
                    name: 'busses',
                })
            }
        },
        onCancel() {
            this.$router.push({
                name: 'busses',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.edit-bus {
    // .edit-bus__container

    &__container {
        align-items: start;
    }

    // .edit-bus__wrapper

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    // .edit-bus__label

    &__label {
    }

    // .edit-bus__edit

    &__edit {
        margin-top: 20px;
    }
}
</style>
