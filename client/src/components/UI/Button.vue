<template>
    <button class="app-btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'app-btn'
}
</script>
<style lang="scss" scoped>

.app-btn {
    @include button;
}
</style>