<template>
    <div class="aside_title">
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
    name: 'asideTitle',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
 .aside_title {
    margin-bottom: 1.2rem;
    border-bottom: 1px solid rgba(0,0,0,0.0785);
    h3{
        padding-bottom: 1rem;
        display:inline-block;
        position: relative;

        &::after{
            content: '';
            display:block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,1);
        }
    }
}
</style>