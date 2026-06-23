const todoInput = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const todoList = document.getElementById("todoList")
const remainingCount = document.getElementById("remainingCount")
const totalCount = document.getElementById("totalCount")

// 상태를 메모리에만 저장(새로고침하면 사라짐)
const todos = []

function render() {
    todoList.innerHTML = ""
    // [{text:" 아침식사", done=false}, {text:"운동하기", odne=false,...]
    todos.forEach((todo, index) => {
        const li = document.createElement("li") //<li></li>
        if (todo.done) li.classList.add("done") //<li class=done></li>

        const delBtn = document.createElement("button")
        delBtn.type = "button"
        delBtn.textContent = "삭제"
        delBtn.className = "delete-btn"
        delBtn.addEventListener("click", ()=>{
            todos.splice(index, 1)
            render()
        })
        
        const left = document.createElement("div") //<div></div>
        left.className = "left"//<div class="left"></div>
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox" // <input tpye="checkbox"></input>
        checkbox.checked = todo.done //<input tpye="checkbox" checked="false"></input>
        checkbox.addEventListener("change", ()=>{
            todo.done = checkbox.checked
            render()
        })

        const text = document.createElement("span")//<span></span>
        text.className = "todo-text" // <span class="todo-text"></span>
        text.textContent = todo.text// <span class="todo-text">아침식사</span>

        left.appendChild(checkbox)
        left.appendChild(text)
        left.appendChild(delBtn)


        li.appendChild(left)
        todoList.appendChild(li)


    })
    updateCounts()
}

function updateCounts() {
    const total = todos.length
    const remaining = todos.filter((t)=> !t.done).length
    remainingCount.textContent = String(remaining)
    totalCount.textContent = String(total)
}

//변수명이랑 키값이 같으면 키값으로 올라감
function addTodo() {
    const text = todoInput.value.trim()
    if(!text) return

    todos.push({ text, done: false})
    todoInput.value = ""
    todoInput.focus()
    //화면 그리기

    render()
}

addBtn.addEventListener("click", addTodo)

todoInput.addEventListener("keydown", (e) =>{
    if(e.key === "Enter") addTodo()
} )