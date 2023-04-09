<template>
    <div class="togle-auth-container">
        <div class="togle-focus">
            <button class="togle__btn" :class="{activeBtn: IsActive}" @click="authStateChange">Регистрация</button>
        </div>
        <div class="togle-focus">
            <button class="togle__btn" :class="{activeBtn: !IsActive}" @click="authStateChange">Вход</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            IsActive: true
        }
    },
    methods: {
        authStateChange() {
            this.IsActive = !this.IsActive;
            this.$emit('authStateSwitch');
        }
    },
}
</script>
<style lang="scss" scoped>
.togle-auth-container {
    display: flex;
    margin-bottom: 15px;
}

.animation-border {
    border: 3px solid white;
}

.togle__btn {
    background-color: inherit;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 14px;
    padding: 5px 10px;
    font-weight: 700;
}

// .togle-focus {
//   background: inherit;
//   position: relative;

//   &:after {
//     position: absolute;
//     content:"";
//     width: 0;
//     height: 100%;
//     bottom: 0;
//     right: 0;
//     left: 0;
//     transition: all .5s;  
//     z-index: -1;
//   } 

//   &:hover {
//     &:after {
//       width: 100%; 
//       border: 3px solid red;
//       z-index: 1;
//     }
//   }

.activeBtn {
    background-color: darken(#4B0082, 15%);
}
</style>
