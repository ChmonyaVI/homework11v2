<template>
    <div class="candidates-edit__container">
        <div class="candidates-edit__wrapper">
            <h1 class="candidates-edit__title">Edit candidates</h1>
            <div class="candidates-edit__block">
                <label class="candidates-edit__label"
                    >Candidate name: <input v-model="candidateData.name" type="text" class="candidates-edit__input"
                /></label>
                <label class="candidates-edit__label"
                    >Candidate position:
                    <input v-model="candidateData.position" type="text" class="candidates-edit__input"
                /></label>
            </div>
            <div class="candidates-edit__action-block">
                <button class="candidates-edit__button button-edit" @click="onAction">{{ actionsBtnTitle }}</button>
                <button class="candidates-edit__button button-delete" @click="onCancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CandidateEditView',

    data() {
        return {
            candidateData: {},
        }
    },
    computed: {
        ...mapGetters('candidates', ['getCandidateById']),
        receivedCandidateId() {
            return this.$route.params.id
        },
        actionsBtnTitle() {
            return this.receivedCandidateId ? 'Save' : 'Create'
        },
    },
    created() {
        if (this.receivedCandidateId) {
            this.candidateData = { ...this.getCandidateById(this.receivedCandidateId) }
        }
    },
    methods: {
        ...mapActions('candidates', ['addCandidate', 'onEditCandidate']),
        onAction() {
            if (!this.receivedCandidateId) {
                this.addCandidate({ id: new Date().getTime(), ...this.candidateData })
            } else {
                this.onEditCandidate(this.candidateData)
            }
            this.$router.push({
                name: 'candidates',
            })
        },
        onCancel() {
            this.$router.push({
                name: 'candidates',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.candidates-edit {
    // .candidates-edit__container

    &__container {
    }

    // .candidates-edit__wrapper

    &__wrapper {
    }

    // .candidates-edit__title

    &__title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    // .candidates-edit__block

    &__block {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    // .candidates-edit__label

    &__label {
    }

    // .candidates-edit__input

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

    // .candidates-edit__action-block

    &__action-block {
    }

    // .candidates-edit__button

    &__button {
        margin: 20px 5px 0px 5px;
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
.button-edit {
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
