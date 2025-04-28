let tasks = [];
const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("todolist");
button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    tasks.push({ text: text });
  }
  tasklist();
});
function tasklist() {
  const todolist = document.getElementById("todolist");
  const li = document.createElement(li);
  tasks.forEach((task) => {
   
    li.innerHTML = `
        <div class="taskitem">
          <div>
          <input type="checkbox" class="checkbox">
          <p>My first project</p>
          </div>
          <div class="icons">
          <img src="edit.jpeg"/>
          </div>
        </div>`;
    todolist.append(li);
  });
}
