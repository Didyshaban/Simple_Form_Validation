let Form = document.getElementById("form");

let error = [];


Form.addEventListener('submit', e => {
    e.preventDefault();
let Username = document.getElementById('username');
let Password = document.getElementById('password');



if(Username.value == "" || Password.value == ""){
    error.push('Please Fill The Username and Password !!');

}else{
  alert('Data Recorded Successfully');

}

// if(Password.value == ""){
//     error.push('Please Fill The Password !!');
// }

let Message = document.getElementById('message');

Message.innerText = error;



})