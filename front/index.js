const url = "http://localhost:3000/api/clients"
const addBtn = document.getElementById("addBtn")
const modal = document.getElementById("modal")
const dataTable = document.getElementById("dataTable")
addBtn.addEventListener('click', ()=>{
    //показать модальное окно
    modal.classList.remove("hidden")


   const closeModal = document.getElementById("closeModal")

   closeModal.addEventListener("click",()=>{
    modal.classList.add("hidden")

   })

    const saveForm = document.getElementById("saveForm")
    saveForm.addEventListener("submit", (e)=>{
        //прочитать данные из формы
        e.preventDefault();
     console.log("test")
  
     const formData = new FormData(saveForm); // создаём объект FormData, передаём в него элемент формы
     // теперь можно извлечь данные
     const name = formData.get('name'); // 'John'
     const surname = formData.get('surname'); // 'Smith'
     const lastName = formData.get('lastName'); // 'Smith'

     const user = {
         "name": name,
         "surname":surname,
         "lastName": lastName,
         "contacts" : []
     }
    //  console.log({user})
    postData(user)
})
})

function postData(user) {
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((response) => { return response.json() })
        .then((body) => { console.log(body); getData()}
     
    )
}


function getData(){
    fetch(url)
    .then((response) => { return response.json() })
    .then((users) => {console.log(users);   renderClients(users)})
    
}

function renderClients(users){
    users.forEach((user)=>{
        dataTable.innerHTML += 
        ` <tr class="main__row">
                <td class="main__hcol">${user.id}</td>
                <td class="main__hcol">${user.surname}  ${user.name}  ${user.lastName}</td>
                <td class="main__hcol">${user.createdAt}</td>
                <td class="main__hcol">${user.updatedAt}</td>
                <td class="main__hcol">${user.contacts}</td>
                 <td class="main__hcol">

                 <button data-id = "${user.id}"> Изменить  </button>
                   <button  data-id = "${user.id}"> Удалить  </button>
                 </td>
            </tr>`
    }
)
}

getData()


