const submitBt = document.getElementById("submitbutton");

function store() { //stores items in the localStorage
 const email = document.getElementById('email').value;
 const password = document.getElementById('enterpassword').value;
 const password1 = document.getElementById('confirmpassword').value;


 if (password == password1) {
  const Data = {
   email: email,
   password: password,


  }
 } else {
  alert("password does not match");
 }

if(Data != null){
   window.localStorage.setItem(password, JSON.stringify(Data));
}

}

 submitBt.addEventListener("click",store);

console.log("hi");