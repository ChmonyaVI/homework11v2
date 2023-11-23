<template>
    <div class="assignments-creator__container">
        <div class="assignments-creator__wrapper">
            <div class="assignments-creator__block">
                <div class="assignments-creator__item">
                    <label class="assignments-creator__label">
                        Worker:
                        <select v-model="interviewData.workerId" class="assignments-creator__select">
                            <option v-for="worker in workersListToSelect" :key="worker.id" :value="worker.id">
                                {{ worker.name }} - {{ worker.position }}
                            </option>
                        </select>
                    </label>
                </div>
                <div class="assignments-creator__item">
                    <label class="assignments-creator__label">
                        Candidate:
                        <select v-model="interviewData.candidateId" class="assignments-creator__select">
                            <option
                                v-for="candidate in candidatesListToSelect"
                                :key="candidate.id"
                                :value="candidate.id"
                            >
                                {{ candidate.name }} - {{ candidate.position }}
                            </option>
                        </select>
                    </label>
                    <div v-if="isMessage" class="assignments-creator__error-message">
                        No candidates on this position!
                    </div>
                </div>
                <div class="assignments-creator__item">
                    <label class="assignments-creator__label">Day: </label>
                    <select v-model="interviewData.day" class="assignments-creator__select">
                        <option value="" disabled selected>Choose the day.</option>
                        <option v-for="(day, index) in days" :key="index" :value="day">
                            {{ day }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="assignments-creator__button">
                <button @click="onAdd(interviewData)">Add</button>
            </div>
            <div v-if="message" class="error-message">{{ message }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { days } from '../data/days'

export default {
    name: 'AssignmentsCreator',

    data() {
        return {
            days: days,
            interviewData: {},
            candidatesListToSelect: [],
            workersListToSelect: [],
            message: '',
        }
    },
    computed: {
        ...mapGetters('workers', ['getFilteredWorkersList', 'getWorkersList', 'getWorkerById']),
        ...mapGetters('candidates', ['getFilteredCandidatesList', 'getCandidatesList', 'getCandidateById']),
    },
    watch: {
        'interviewData.workerId'(newValue) {
            if (!this.interviewData.candidateId && newValue) {
                let selPosition = this.getWorkerById(newValue).position
                this.onFilterCandidateByPosition(selPosition)
                this.candidatesListToSelect = this.getFilteredCandidatesList
            }
        },
        'interviewData.candidateId'(newValue) {
            if (!this.interviewData.workerId && newValue) {
                let selPosition = this.getCandidateById(newValue).position
                this.onFilterWorkerByPosition(selPosition)
                this.workersListToSelect = this.getFilteredWorkersList
            }
        },
    },
    created() {
        this.candidatesListToSelect = this.getCandidatesList
        this.workersListToSelect = this.getWorkersList
    },
    methods: {
        ...mapActions('interviews', ['onAddInterview']),
        ...mapActions('candidates', ['onFilterCandidateByPosition']),
        ...mapActions('workers', ['onFilterWorkerByPosition']),

        onAdd(interviewData) {
            if (this.interviewData.workerId && this.interviewData.candidateId && this.interviewData.day) {
                this.onAddInterview(interviewData)
                this.interviewData = {}
                this.candidatesListToSelect = this.getCandidatesList
                this.workersListToSelect = this.getWorkersList
                this.message = ''
            } else {
                this.message = 'Please select all information for interview!'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.assignments-creator {
    // .assignments-creator__container

    &__container {
        margin-bottom: 25px;
    }

    // .assignments-creator__wrapper

    &__wrapper {
    }

    // .assignments-creator__block

    &__block {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        gap: 10px;
    }

    // .assignments-creator__item

    &__item {
    }

    // .assignments-creator__label

    &__label {
    }

    // .assignments-creator__select

    &__select {
        padding: 2px 10px;
        border: 1px solid #000;
        border-radius: 7px;
        transition: border 0.3s ease 0s;
        &:focus {
            transition: border 0.3s ease 0s;
            border: 1px solid #42b983;
            box-shadow: 2px 5px 18px 0px #42b983;
        }
    }

    // .assignments-creator__error-message

    &__error-message {
    }

    // .assignments-creator__button

    &__button {
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
}
.error-message {
}
</style>
