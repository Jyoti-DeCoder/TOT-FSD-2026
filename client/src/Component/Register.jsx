import React from 'react'
import { useEffect } from 'react';

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
useEffect(() => {
    // fetch("http://localhost:3002/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUsers(data.userdata);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    loadUser();
  }, []);
const loadUser = ()=>{
  try{
            const res = axios.get("http://localhost:3001/users");
            console.log("Data: ",res.data);
            setUsers(res.data);
        }
        catch(err){
            console.error("Error",err);
        }
}

}
  // Handle input change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    alert("User Registered Successfully!");

    // Clear the form
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>Register User</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </div>

        <br />

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register