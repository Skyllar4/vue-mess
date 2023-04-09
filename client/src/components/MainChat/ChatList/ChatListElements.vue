<template>
    <div class="chat-list-el-container">
        <img class="chat-list-el__user-avatar" src="@/img/free-icon-user-6711472.png" alt="Аватар">
        <div class="chat-list-el__text-container">
            <h2 class="chat-list-el__userName-companion chatListElText">Егор Антонов</h2>
            <p class="chat-list-el__userName-companion-message chatListElText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur quisquam doloremque delectus tempore amet tempora eveniet voluptas deleniti at? Eius dolorem incidunt expedita aliquid voluptatum harum excepturi iure quaerat?</p>
        </div>
        <div>
            1
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.chat-list-el-container {
    padding: 5px 8px;
    max-width: 100%;
    display: flex;
    text-align: center;
}

.chat-list-el__text-container {
    margin: 0px 10px;
    padding-top: 5px;
}

.chat-list-el__user-avatar {
    width: 65px;
    height: 65px;
}

.chat-list-el__userName-companion {
    display: flex;
    margin-bottom: 5px;
}

.chat-list-el__userName-companion-message {

}

.chatListElText {
    color: $textColor;
    max-width: 375px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>