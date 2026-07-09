import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Registration() {

const [name,setName]=useState();
const[email,setEmail] = useState();
const[password, setPassword] = useState();
async function sendData()
{
   const serverres = await fetch("http://localhost:3003/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  const res = await serverres.json();

  alert(res.msg);
}

return (
    <div>

        <h2>Employee Registration Form</h2>
        <form>
<div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputName"  placeholder="Enter name" />
    </div>
{name}
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
   </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={sendData}>Registration</button>
</form>




    </div>
  )
}

export default Registration