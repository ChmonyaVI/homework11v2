<template>
    <div class="candidate__container">
        <h1 class="candidate__title">Workers list</h1>
        <ul class="candidate__list">
            <li v-for="candidate in getCandidatesList" :key="candidate.id" class="candidate__item">
                <div class="candidate__name">{{ candidate.name }} - {{ candidate.position }}</div>
                <div class="candidate__btn-block">
                    <button class="candidate__button button-edit" @click="onEdit(candidate.id)">Edit</button>
                    <button class="candidate__button button-delete" @click="deleteCandidate(candidate.id)">
                        Delete
                    </button>
                </div>
            </li>
        </ul>
        <router-link class="button-add" :to="{ name: 'candidates-edit' }">Add candidate</router-link>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CandidateView',

    computed: {
        ...mapGetters('candidates', ['getCandidatesList']),
    },
    methods: {
        ...mapActions('candidates', ['deleteCandidate']),
        onEdit(id) {
            this.$router.push({
                name: 'candidates-edit',
                params: { id: id },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.candidate {
    // .candidate__container

    &__container {
        margin: 0 auto;
        width: 800px;
    }

    // .candidate__title

    &__title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    // .candidate__list

    &__list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    // .candidate__item

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

    // .candidate__name

    &__name {
    }

    // .candidate__btn-block

    &__btn-block {
        display: flex;
        gap: 5px;
    }

    // .candidate__button

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
