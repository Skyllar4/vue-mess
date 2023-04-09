<template>
    <div class="main-container">
        <router-view />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent( {

});
</script>

<style lang="scss">
@include defaultStyles;

.main-container {
    background-color: $colorBackground;
}
</style>
