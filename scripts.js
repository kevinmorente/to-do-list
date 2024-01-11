const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const completedList = document.querySelector('.list-tasks')

let myListItens = []

function addNewTesk() {
  myListItens.push({
    task: input.value,
    done: false
  })
  input.value = ''
  ShowTesks()
}


function ShowTesks() {

    let newLi = ''

  myListItens.forEach((newText, index) => {
    newLi = newLi + `
        <li class="task ${newText.done && 'flagDoneTask'}">
         <img src="./img/icon-check.png" alt="check-icon" onclick="doneTask(${index})" />
         <p>${newText.task}</p>
         <img src="./img/icon-lixeira.png" alt="lixeira-icon" onclick="delBin(${index})"/>
        </li>
        `
  })

  completedList.innerHTML = newLi

  localStorage.setItem('list', JSON.stringify(myListItens))
}

function rerunList(){
    const tasksLocalStorage = localStorage.getItem('list')
    console.log(tasksLocalStorage)
    if(tasksLocalStorage){
     myListItens = JSON.parse(tasksLocalStorage)
    }

    ShowTesks()
}

function delBin(index) {
    myListItens.splice(index,1)
    ShowTesks()
}

function doneTask(index){
    myListItens[index].done = !myListItens[index].done
    ShowTesks()
}

rerunList()
button.addEventListener("click", addNewTesk)
