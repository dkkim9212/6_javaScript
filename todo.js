const todoInput = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const todoList = document.getElementById("todoList")
const remainingCount = document.getElementById("remainingCount")
const totalCount = document.getElementById("totalCount")

// 상태를 메모리에만 저장(새로고침하면 사라짐)
const todos = []


//변수명이랑 키값이 같으면 키값으로 올라감
function addTodo() {
    const text = todoInput.ariaValueMax.trim()
    if(!text) return

    todos.push({ text, done: false})
    todoInput.value = ""
    todoInput.focus()
    //화면 그리기
}

addBtn.addEventListener("click", addTodo)

todoInput.addEventListener("keydown", (e) =>{
    if(e.key === "Enter") addTodo()
} )