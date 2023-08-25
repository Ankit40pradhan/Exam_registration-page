let users=[];
function AddUser(){
    let name= document.getElementById('Name');
    let email= document.getElementById('Email');
    if((name.value).trim()!== "" && ((email.value).trim()!=="")){
        let user = {
            name: name.value,
            email: email.value,
            
        }
        users.push(user);
        visible();
        displayUsers();
        clearInput();

    }
   else{
        alerting();

    }
        
      
    
    
    
}
function alerting(){
    let caption=document.getElementById('please');
    caption.classList.remove('please2');
    caption.classList.add('please');
}
function clearInput(){
    let inputboxname = document.getElementById('Name');
    inputboxname.value="";
    let inputboxemail = document.getElementById('Email');
    inputboxemail.value="";

}
function visible(){
    let page=document.getElementById('right-container');
    page.classList.remove('right-container');
    page.classList.add('container-2');
}
function invisible(){
    let card = document.getElementById('right-container');
    card.classList.remove('container-2');
    card.classList.add('right-container');
}
function check(user){
    let checkuser = users.filter((currentUser)=>{
        return currentUser.email == user.email;
    })
    users.push(user);
}

function displayUsers() {
    let usersContainer = document.getElementById('users');
    usersContainer.innerHTML=""
    users.map((a) => {
      let userDiv = document.createElement('div');
      userDiv.classList.add('user');
      let student =document.createElement('h4')
      student.innerText = "Student Details:";
      let nameElement = document.createElement('p');
      nameElement.innerText = a.name;
      let emailElement = document.createElement('p');
      emailElement.innerText = a.email;
      let examCenter = document.createElement('h4');
      examCenter.innerText = "Exam Center :"
      let city = document.createElement('p');
      city.innerText=pickRandomCity();
      usersContainer.appendChild(userDiv);
      userDiv.appendChild(student);
      userDiv.appendChild(nameElement);
      userDiv.appendChild(emailElement);
      userDiv.appendChild(examCenter);
      userDiv.appendChild(city);
   })  
}

function pickRandomCity() {
  let cities = ["Agra", "Delhi", "Bhubaneswar", "Keonjhar", "Bhadrak", "Puri", "Cuttack"];
  let randomIndex = Math.floor(Math.random() * cities.length);
  let randomCity = cities[randomIndex];
  return randomCity;
}
