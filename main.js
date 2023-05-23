function toRegister() {
  document.querySelector("#mainform").style.display = "none"

  document.querySelector("#mainform1").style.display = "flex"

  document.getElementById("register").style.display = "none"
  document.getElementById("tologin").style.display = "flex"
}

function toLogin() {
  document.querySelector("#mainform").style.display = "flex"

  document.querySelector("#mainform1").style.display = "none"

  document.getElementById("register").style.display = "flex"
  document.getElementById("tologin").style.display = "none"
}

function register() {
  let username = document.getElementById("username1").value
  let firstname = document.getElementById("firstname1").value
  let lastname = document.getElementById("lastname1").value
  let email = document.getElementById("email1").value
  let privatenum = document.getElementById("privatenumber1").value
  let password = document.getElementById("password1").value;
 

  fetch('http://kketelauri-001-site1.gtempurl.com/api/user/adduser',
    {
      method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ "userName": username, "firstName": firstname, "lastName": lastname, "email": email, "privateNumber": privatenum, "password": password, "active": true })
    }).then(response => response.json()).then(response => console.log(JSON.stringify(response)))

  document.getElementById("message").innerHTML = "Registered Successfully!"
}

function login1() {
  
  let loginmail = document.getElementById("email").value;
  let loginpass = document.getElementById("password").value;
  fetch('http://kketelauri-001-site1.gtempurl.com/api/user/login',
    {
      method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": loginmail, "password": loginpass })
    }).then(response => response.json()).then(response => window.location.replace("index.html"))


}

      // irakli1111@gmail.com  irakli07


