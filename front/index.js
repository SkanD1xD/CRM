const url = "http://localhost:3000/api/clients"
const addBtn = document.getElementById("addBtn")
const modal = document.getElementById("modal")





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
        .then((body) => console.log(body))
}


