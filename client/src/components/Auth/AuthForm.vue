<template>
    <div class="auth-container">
        <TogleButton v-on:authStateSwitch="authStateSwitch"/>
        <form v-if="!authState" action="#">
            <app-input class="auth__input-elements" v-model:value.trim="login" typeInput="text" placeholder="Login" />
            <app-input class="auth__input-elements" v-model:value.trim="email" typeInput="email" placeholder="Email" />
            <app-input class="auth__input-elements" v-model:value.trim="password" typeInput="password" placeholder="Password" />
            <app-btn type="submit">Зарегистрироваться</app-btn>
        </form>
        <form v-else action="#">
            <app-input class="auth__input-elements" v-model:value.trim="login" typeInput="text" placeholder="Login" />
            <app-input class="auth__input-elements" v-model:value.trim="password" typeInput="password" placeholder="Password" />
            <app-btn type="submit">Войти</app-btn>
        </form>
    </div>
</template>
<script>
import TogleButton from './TogleButton.vue';
export default {

    components: {
        TogleButton
    },

    data() {
        return {
            toogleBtn: true,
            authState: false, // Если false, то регистрация, true - вход
            login: '',
            email: '',
            password: '', 
        }
    },
    methods: {
        authStateSwitch() {
            this.authState = !this.authState;
        }
    }

}
</script>
<style lang="scss" scoped>

.auth-container {
    @include containersPadding;
    background-color: $backgroundContainers;
    max-width: 300px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 5px;
    margin-top: -118px;
    margin-left: -160px;
}

.auth__input-elements {
    @include authFormElements;
}

.auth__submit-btn {
    @include button;
}
</style>
