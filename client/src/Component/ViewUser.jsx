import { useEffect, useState } from "react";

function ViewUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => {
        //setUsers(data.userdata);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h2>List of Users</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button>Edit</button>
                 <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUser;