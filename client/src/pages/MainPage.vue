<template>
    <div class="flex-container">
        <ChatList />
        <div class="chat-container">
            <ChatHeader />
            <ChatInterface />
            <button @click="cl">214</button>
            <InputMessage />
        </div>
    </div>
</template>
<script>
import ChatHeader from '../components/MainChat/ChatHeader.vue';
import ChatList from '../components/MainChat/ChatList/ChatList.vue';
import InputMessage from '../components/MainChat/InputMessage.vue';
import ChatInterface from '../components/MainChat/ChatInterface.vue';
import router from '../router/router.ts';
setTimeout(() => {
    if (true) {
    router.push('/auth')
}
}, 500); // костыль, на фикс
export default {
    components: {
        ChatHeader, ChatInterface, ChatList, InputMessage
    },
    // methods: {
    //     cl() {
    //         this.$router.push('/auth')
    //     }
    // },
}
</script>
<style lang="scss" scoped>
.flex-container {
    display: flex;
}

.chat-container {
    width: 100%;
}
</style>
