<template>
<div class="container">
    <form @submit="onAddNewTask">
		<input class="input-text" type="text" placeholder="What needs to be done?" v-model="text" required>
	</form>
</div>
</template>

<script>
    export default {
        name: "ToDoInput",
		data() {
			return {
				text: ""
			}
		},
		methods: {
			/**
			 * Event: add new task
			 */
			onAddNewTask(e) {
				e.preventDefault()
				const taskName = this.text
				this.$emit("eventAddNewTask", taskName)
				// reset the textbox
				this.text = ""
			}
		}
    }
</script>

<style scoped>
.input-text {
    width: 100%;
    background-color: #0076C0;
    border: none;
    font-size: 24;
    font-weight: 600;
    padding: 15px;
    color: #ffffff;
    transition: all ease 400ms;
    } 

    .input-text:focus, .input-text:hover {
        outline: none;
    
      background-color: #ffffff;
      color: #0076c0;
      border: 1px solid #0076c0;
            
}
</style>