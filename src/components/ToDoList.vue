<template>
<div class="container">
    <li class="list-item" :class="{ done: isDone }">
        <input type="checkbox" class="checkbox" :id="idComputed" @change="onTaskStatusChange" :checked="isDone">
        <label class="label" :for="idComputed"></label>
        <span class="text">
            {{ text }}
        </span>
        <span class="icon-delete" @click="onTaskDelete">x</span>
    </li>
</div>
</template>

<script>
    export default {
        name: "ToDoList",
        props: {
            id: {
                type: Number,
                default: 0
            },
            text: {
                type: String,
                default: ""
            },
            isDone: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            idComputed() {
                return `item-${this.id}`
            }
        },
        methods: {
            /**
             * Event: on task status changed
             */
            onTaskStatusChange(e) {
                const checked = e.target.checked
                this.$emit("eventTaskStatusChange", this.id, checked)
            },
            /**
             * Event: on task deleted
             */
            onTaskDelete() {
                this.$emit("eventTaskDelete", this.id)
            }
        } 
    }
</script>

<style lang="css" scoped>
  .icon-delete {
            display: inline-block;
            width: 40px;
            height: 40px;
            cursor: pointer;
            color: #0076C0;
            transition: all ease 300ms; 
}
.icon-delete:hover, .icon-delete:focus {
    color: #00558a;
    }
         
</style>