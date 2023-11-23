<template>
    <div class="home">
        <h1 class="home__title">Welcome to the site!</h1>
        <h2 class="home__sub-title">Login to continue working!</h2>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {},
}
</script>
<style lang="scss" scoped>
.home {
    // .home__title

    &__title {
        font-size: 36px;
        margin-bottom: 10px;
        font-weight: 600;
    }

    // .home__sub-title

    &__sub-title {
        font-size: 30px;
    }
}
</style>
