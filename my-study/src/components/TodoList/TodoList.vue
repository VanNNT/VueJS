<template>
    <div>
        <input v-model="newTodoText" 
                v-focus @keydown.enter="addTodo">
        <ul v-if="todos.length">
            <todo-list-item
                v-for="todo in todos"
                v-bind:key="todo.id"
                :todo="todo"
                @remove="removeTodo(todo.id)"
            />
        </ul>
        <p v-else>
            Nothing left in the list. Add a new todo in the input above.
        </p>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import FocusDirective from '../../directive/FocusDirective.js'

let nextTodoId = 1

export default {
    name: 'TodoList',
    components: {
        TodoListItem
    },
    directives: {
        focus: FocusDirective
    },
    data() {
        return {
            newTodoText: '',
            todos: [
            {
                id: nextTodoId++,
                text: 'Learn Vue'
            },
            {
                id: nextTodoId++,
                text: 'Learn about single-file components'
            },
            {
                id: nextTodoId++,
                text: 'Fall in love'
            }
        ]
        }
    },
    methods: {
        addTodo (){
            const trimmedText = this.newTodoText.trim()
            if (trimmedText) {
				this.todos.push({
					id: nextTodoId++,
					text: trimmedText
				})
				this.newTodoText = ''
			}
        },
        removeTodo (idToRemove) {
			this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove
			})
		}
    }
}
</script>

<style scoped>

</style>