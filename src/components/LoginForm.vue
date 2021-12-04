<template>
	<Form ref="loginForm" :model="form" :rules="ruleslogin" @keydown.enter.native="handleSubmit">
	
 <Input class="input-form" v-model = "form.username" placeholder = "Username">	
			</Input>
		
<Input class="input-form" type = "password" v-model = "form.password" placeholder = "Password">
			</Input>
	
	<Button class="btn" @ click = "handleSubmit" type = "primary" long> Login </Button>
	
	</Form>
</template>

<script>
export default {
	name: 'LoginForm',
	data () {
		return {
			form: {
                username: 'admin',
				password: '123456'
			},
                         ruleslogin: {// Правила формы проверки
                                 username: [// Ожидаемое значение свойства prop в теге FormItem
                                         {обязательно: true, сообщение: 'Имя пользователя не может быть пустым', триггер: 'blur'}
                ],
                                 password: [// Ожидаемое значение свойства prop в теге FormItem
                                         {обязательно: true, сообщение: 'Пароль не может быть пустым', триггер: 'blur'},
                                         {type: 'string', min: 6, message: '6-значный пароль', триггер: 'blur'}
                ]
            }
		}
	},
	methods: {
		handleSubmit () {
			this.$refs.loginForm.validate((valid) => {
             // this. $ refs.loginForm.validate: получить результат проверки формы; проверка верна -> действительный - True; проверка неуспешная -> действительный - ложный;
				if (valid) {
					this.$emit('on-success-valid', {
                                                 username: this.form.username, // Передайте this.form.username и this.form.password в параметр родительского компонента, действующий при успешном завершении
			пароль: this.form.password // и принять с именем пользователя и паролем
					})
				}
			})
		}
	}
}
</script>

<style scoped>
.input-form {
    background-color: #ffffff;
    border: none;
    font-size: 24;
    font-weight: 600;
    padding: 15px;
    color: #ffffff;
	margin-right: 15px;
    transition: all ease 400ms;
    } 

    .input-form:focus, .input-form:hover {
        outline: none;    
      background-color: #ffffff;
      color: #0076c0;
      border: 1px solid #0076c0;           
}
.btn {
       outline: none;    
      background-color: #ffffff;
      color: #0076c0;
      border: 1px solid #ffffff;
	cursor: pointer;
    transition: all ease 400ms;
	padding: 15px;
	border-radius: 5px;
	width: 100px;
}
</style>

