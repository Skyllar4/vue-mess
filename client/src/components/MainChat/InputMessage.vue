<template>
    <form action="#" class="message-form">
        <app-input class="message-input" typeInput="text" placeholder="Введите сообщение..."/>
        <button type="submit" class="message-btn"></button>
    </form>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

.message-form {
    display: flex;
}

.message-btn {
    padding: 1px 15px;
    cursor: pointer;
}

.message-input {
    width: 100%;
}
</style>