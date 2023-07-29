let add = document.getElementById("add");
let del = document.getElementById("del");
let taskContainer = document.getElementsByClassName("taskContainer")[0];
let taskCount = 0;
add.addEventListener("click", () => {
  let text = document.getElementById("text").value;
  taskCount++;
  if (text != "") {
    taskContainer.innerHTML += `
        <div class="card my-4" id="counter${taskCount}">
          <div class="card-header">Task-${taskCount}</div>
          <div class="card-body">
            <p class="card-text" id="text${taskCount}">
              ${text}
              </p>
            <a href="#" class="btn btn-outline-danger mx-2"
              id="${taskCount}" onClick="deleteTask(this.id)">Delete <i class="fa-solid fa-trash"></i
            ></a>
            <a href="#" id="done${taskCount}" onClick="done(this.id)" class="btn btn-outline-success mx-2" onClick="deleteTask(this.id)">Done <i class="fa-solid fa-circle-check"></i></a>
            </div>
            </div>
        `;

        let alert = document.getElementsByClassName("alert")[0];
        alert.style.display = "block";
        setTimeout (()=>{
          alert.style.display = "none";
        }, 2000)
  }
});

del.addEventListener("click", () => {
  document.getElementById("text").value = "";
});

function deleteTask(id){
    console.log("delete " + id);
    document.getElementById(`counter${id}`).style.display = "none";
    taskCount--;
}

function done(id){
    id = id[id.length - 1];
    console.log(id);
    document.getElementById(`text${id}`).style.textDecoration = "line-through";
}