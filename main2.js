const form = document.getElementById('addForm')
const taskList = document.getElementById('items')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    var task = e.target.children[0].value

    var li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerText = task
    console.log(li);

    const btn = document.createElement('button')
    btn.setAttribute('class', 'btn list-btn btn-sm float-right delete')
    btn.innerText = 'X'
    li.append(btn)
    taskList.append(li)
    task = ''
    e.target.children[0].value =''

}) 

    const delBtn = document.getElementById('items')
     delBtn.addEventListener('click',(e)=> {
        e.target.classList.contains('delete')
        e.target.parentElement.remove()
     }) 

     const filter = document.getElementById('filter')
     const listItem = document.getElementsByClassName('list-group-item')

     filter.addEventListener('keyup', (e)=> {
        console.log(e.target.value);

        for(let i = 0; i<listItem.length; i++){
            if(listItem[i].innerText.tolowerCase.includes(e.target.value))
            {
                listItem[i].style.display = 'block'

            }
            else{
                listItem[i].style.display = 'none'
        }
     }})

     const theme = document.getElementById('theme')
     theme.addEventListener('click', (e) => {
        console.log(e.target.getAttribute('id'));

        removeClass()
        body.classList.add(color)
     })

     function removeClas(){
        
     }