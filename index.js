function addTask()
{
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');


    if(taskInput.value.trim() === ''){
        alert('please enter any task');
        return ;
    }

    const li =document.createElement('li');
    li.textContent = textContent= taskInput.value;
     

    const deleteBin = document.createElement('button');
    deleteBin.textContent = 'delete';
    deleteBin.className = 'deleteBin';

    deleteBin.onclick= function(){
        taskList.removeChild(li);
    }

    li.appendChild(deleteBin);
    taskList.appendChild(li);

    taskInput.value='';





}