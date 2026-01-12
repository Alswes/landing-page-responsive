const addButton = document.querySelector("#add-todo-btn")
const input = document.querySelector("#title-input")
const list = document.querySelector(".todo-container_list")

function addTodo() {
    const text = input.value
    if (!text) return

    const card = document.createElement('div')
    card.className = 'list_todo-card'

    card.innerHTML = `
        <div class="todo-card_left">
            <label class="checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
                <p>${text}</p>
            </label>
        </div>
        <div class="todo-card_right">
            <button class="delete-btn">x</button>
        </div>
    `

    list.appendChild(card)
    input.value = ''
    input.focus()
}

function deleteTodo(event) {
    if (!event.target.matches(".delete-btn")) return
    
    const cardParaRemover = event.target.closest(".list_todo-card")
    cardParaRemover.remove()
}

addButton.addEventListener('click', addTodo)
list.addEventListener('click', deleteTodo)


input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") { 
        addTodo()
    }
})