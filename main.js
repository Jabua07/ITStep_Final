
fetch('http://kketelauri-001-site1.gtempurl.com/api/user/login',
 { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  body: JSON.stringify({ "userName": "keti4", "firstName": "keti4", "lastName": "ketelauri4", "email": "keti4@gmail.com", "privateNumber": "12345678914", "password": "123", "active": true})
 }) 
 .then(response => response.json())
  .then(response => console.log(JSON.stringify(response)))