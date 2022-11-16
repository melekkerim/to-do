let input = document.getElementById('entered-list');
let addBtn = document.getElementById('add-list');
let tasks = document.getElementById('tasks');


input.addEventListener('keyup', function () {
    if (input.value.trim()) {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }

})

addBtn.addEventListener('click', () => {
    if (input.value.trim()) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p>${input.value}</p>`;
        input.value = '';
        const itemBtn = document.createElement('div')
        itemBtn.className = 'item-btn'
        const pen = document.createElement('i')
        pen.className = 'fa-solid fa-pen-to-square'
        const remove = document.createElement('i')
        remove.className = 'fa-sharp fa-solid fa-xmark'
        remove.onclick = () => {
            newItem.remove()
        }
        pen.onclick = ()=>{
            newItem.classList.add('item-completed')
        }
        itemBtn.append(pen, remove)
        newItem.appendChild(itemBtn)
        tasks.appendChild(newItem);
    } else {
        alert('Please enter a task');
    }

})
