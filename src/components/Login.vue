<template>
    <div id="login">
        <h2>Login</h2>
        <div class="form-inputs">
 <login-form @on-success-valid="handleSubmit"></login-form>
 <p class = "login-tip"> Write your name and password. </p>
        </div>
    </div>
</template>

<script>

import LoginForm from '@/components/LoginForm.vue'

    export default {
        name: 'Login',
         data(){
  return{

}
	},
		components: {
			LoginForm
},
		methods:{
            handleSubmit({username, password}){
                this.$api.api_all.post_user_login_api(
                    username,password
                ).then((response)=>{
                    this.$Message.success(response.data.msg);
                                         localStorage.setItem ('TOKEN', JSON.stringify (response.data.results.TOKEN)); // устанавливаем TOKEN
                                         this.$router.push ("/") // Переход на домашнюю страницу
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                })
            }
		}
	}
</script>

<style>
#login .form-inputs {
       width: 100%;
    background-color: #0076C0;
    font-size: 24;
    font-weight: 600;
    padding: 15px;
    color: #ffffff;
    transition: all ease 400ms;
    margin-bottom: 15px;
}
.input {
    border: none;
    border-radius: 5px;
    width: 450px;
    margin-left: 10px;
    padding: 15px;
}

    input:focus, input:hover {
        outline: none;
    
      background-color: #ffffff;
      color: #0076c0;
      border: 1px solid #0076c0;
            
}
</style>