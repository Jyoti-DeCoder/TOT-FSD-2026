import express from "express"
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT||3002;
const app = express();
app.use(express.json());
const userdata = [{
    id:1,
    name: "Jyoti",
    email:"jyoti@gmail.com"
},{
    id:2,
    name: "Arvind",
    email:"arvind@gmail.com"
}
]
app.get("/users",(req,res)=>{
    try{
        res.status(200).json({message:"data received",userdata})
    }
    catch(err)
    {console.error("Not received")}
})
app.get("/user/:id",(req,res)=>{
    try{
        const id = req.params.id;
        const user = userdata.find((u)=>u.id==id);
        if(!user)
        {
            res.status(400).json({message:"user not found"})
        }
        res.status(200).json({message:"data received",user})
    }
    catch(err)
    {console.error("Not received")}
})
app.get("/",(req,res)=>{res.status(200).json({message: "Welcome User"})})

app.post("/user", (req, res) => {
  try {
    const { name, email } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({
        message: "Name and Email are required",
      });
    }

    // Check duplicate email
    const existingUser = userdata.find((u) => u.email === email);

    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    // Create new user
    const newUser = {
      id: userdata.length + 1,
      name,
      email,
    };

    userdata.push(newUser);

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
app.listen(port,()=>{console.log(`server in running on port ${port}`)})