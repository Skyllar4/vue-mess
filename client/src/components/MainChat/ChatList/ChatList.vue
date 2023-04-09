<template>
    <div class="chat-list-container">
        <ChatListElements />
    </div>
</template>
<script>
import ChatListElements from '@/components/MainChat/ChatList/ChatListElements.vue';
export default {
    components: {
        ChatListElements
    }
}
</script>
<style lang="scss" scoped>

.chat-list-container {
    background-color: $backgroundContainers;
    max-height: 100%;
}
</style>