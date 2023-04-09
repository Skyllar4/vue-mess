<template>
    <input :type="type" :value="value" @input="updateInput" class="input-elements">
    <!-- :placeholder="inputplaceholder" на фикс -->
</template>
<script>
export default {
    name: 'app-input',
    props: {
        value: [String, Number],
        typeInput: [String],
        // inputplaceholder: [String]
    },
    data() {
        return {
            type: this.typeInput,
            // inputplaceholder: this.placeholder
        }
    },
    methods: {
        updateInput(e) {
            this.$emit('update:value', e.target.value);
        }
    },
}
</script>
<style lang="scss" scoped>

.input-elements {
    @include inputElements;
}
    
</style>