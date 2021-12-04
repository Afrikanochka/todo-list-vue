<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <Login />
<h1 class="fs-h1 text-center">
			To Do List
		</h1>

    <ToDoInput @eventAddNewTask="onAddNewTask" />
    <ToDoList v-for="item in itemList" :key="item.id" :text="item.text" :id="item.id" :isDone="item.isDone" @eventTaskStatusChange="onTaskStatusChange" @eventTaskDelete="onTaskDelete" />

  </div>
</template>

<script>
import Login from "@/components/Login.vue"
import ToDoInput from "@/components/ToDoInput.vue"
import ToDoList from "@/components/ToDoList.vue"
	
  export default {
		name: "App",
		components: {
      Login,
			ToDoInput,
			ToDoList
		},
		data() {
            return {
                itemList: []
            }
},
 methods: {
			/**
			 * Event: add new task
			 */
			onAddNewTask(taskName) {
				const task = {
					id: (new Date()).getTime(),
					text: taskName,
					isDone: false
				}
				this.itemList.push(task)
			},
            /**
             * Event: on task status changed
             */
            onTaskStatusChange(id, checked) {
                console.log(id, checked)
                let item = this.itemList.find(i => i.id == id)
                if (item) {
                    item.isDone = checked
                }
                
                console.log(this.itemList)
            },
            /**
             * Event: on task deleted
             */
            onTaskDelete(id) {
                console.log(id)
                let index = this.itemList.findIndex(i => i.id == id)
                if (index > -1) {
                    this.itemList.splice(index, 1)
                }
                console.log(this.itemList)
            },
            /**
             * Load item list from local storage
             */
            loadItemList() {
                this.itemList = JSON.parse(localStorage.getItem("VuejsTodo")) || []
                console.log("this.itemList =", this.itemList)
            },
            /**
             * Update the item list to local storage
             */
            updateItemList() {
                localStorage.setItem("VuejsTodo", JSON.stringify(this.itemList))
            }
        },
        mounted() {
            // Load item list from local storage
            this.loadItemList()
        },
        watch: {
            itemList: {
                handler() {
                    console.log("item changed")
                    // save to localStorage
                    this.updateItemList()
                },
                deep: true
            }
        }
  }
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.container {
  padding-left: 25px;
  padding-right: 25px;
  margin: 0 auto;
  max-width: 320px
}
@media screen and (min-width: 768px) {
  .container {
    max-width: 728px;
  }
}
@media screen and (min-width: 1280px) {
  .container {
    max-width: 1252px;
  }
}
</style>
