import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import {useAuth} from "../contexts/AuthContext"



function Signup() {
    
    //variables for storing form fields
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [CPassword, setCPassword] = useState("");
    const [error, seterror] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const {register} = useAuth();
    
    async function handleSubmit(e){
        e.preventDefault()
        console.log(Fname)
        console.log(Lname)
        console.log(Email)
        console.log(Password)
        console.log(CPassword)
        
        setisLoading(true);
        register(Email, Password)
        .then((response)=>{
            console.log(response)

        })
        .catch((error)=>{console.log(error)})
            
        
     }

    const paperStyle = {
        padding: 20,
        height: "72vh",
        width: 450,
        margin: "20px auto",
    };
    return (
        <div>
            <div
                style={{
                    backgroundColor: "#9CC3D5FF",
                    padding: "15px",
                    height: "100vh",
                }}
            >
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <Avatar sx={{ bgcolor: blue[500] }}>
                                <LoginIcon />
                            </Avatar>
                            <h2>Sign Up</h2>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="stretch"
                        >
                            <TextField
                                margin="normal"
                                label="First Name"
                                placeholder="Enter your First Name"
                                onChange={(e) => {
                                    setFname(e.target.value);
                                }}
                            />
                            <TextField
                                margin="normal"
                                label="Last Name"
                                placeholder="Enter your Last Name"
                                onChange={(e) => {
                                    setLname(e.target.value);
                                }}
                            />
                        </Grid>
                        <TextField
                            margin="normal"
                            label="Email"
                            placeholder="Enter your email"
                            fullWidth
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <TextField
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            fullWidth
                            margin="normal"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <TextField
                            label="Confirm Password"
                            placeholder="Re-enter your password"
                            type="password"
                            fullWidth
                            margin="normal"
                            onChange={(e) => {
                                setCPassword(e.target.value);
                            }}
                        />
                        <Button
                            sx={{ mt: 3 }}
                            disabled={isLoading}
                            onClick={handleSubmit}
                            color="primary"
                            variant="contained"
                            fullWidth
                        >
                            Sign up
                        </Button>
                        Already have an account? Log in <a href="/login">here</a>
                        
                    </Paper>
                </Grid>
            </div>
        </div>
    );
}

export default Signup;
