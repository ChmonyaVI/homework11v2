<template>
    <div class="assignments__container">
        <div class="assignments__wrapper">
            <assignment-creator />
            <assignments-list />
        </div>
    </div>
</template>

<script>
import AssignmentCreator from '../components/AssignmentsCreator.vue'
import AssignmentsList from '@/components/AssignmentsList.vue'
export default { name: 'AssignmentsView', components: { AssignmentCreator, AssignmentsList } }
</script>

<style lang="scss" scoped></style>
