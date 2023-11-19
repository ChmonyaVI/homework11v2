<template>
    <div class="driver-edit__container">
        <div class="driver-edit__wrapper">
            <label class="driver-edit__label">Driver name: <input v-model="driverData.name" type="text" /></label>
            <label class="driver-edit__label"
                >Driver experience: <input v-model="driverData.exp" type="number"
            /></label>
        </div>
        <button class="driver-edit__button button" @click="onAction">{{ actionButtonTitle }}</button>
        <button class="driver-edit__button button" @click="onCancel">Cancel</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'DriversEdit',
    data() {
        return {
            driverData: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriverId']),
        receivedDriverId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.receivedDriverId ? 'Save' : 'Create'
        },
    },
    created() {
        this.driverData = { ...this.getDriverId(this.receivedDriverId) }
    },
    methods: {
        ...mapActions('drivers', ['addDriverAction', 'updateDriver']),
        onAction() {
            if (!this.receivedDriverId) {
                this.addDriverAction(this.driverData)
                this.$router.push({
                    name: 'drivers',
                })
            } else {
                this.updateDriver(this.driverData)
                this.$router.push({
                    name: 'drivers',
                })
            }
        },
        onCancel() {
            this.$router.push({
                name: 'drivers',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.driver-edit {
    // .driver-edit__container

    &__container {
    }

    // .driver-edit__wrapper

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    // .driver-edit__label

    &__label {
    }

    // .driver-edit__button

    &__button {
        margin-top: 20px;
    }
}
.button {
}
</style>
