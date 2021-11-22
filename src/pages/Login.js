import { Avatar, Button, Grid, Paper, TextField, Zoom } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { blue } from "@mui/material/colors";
import { useHistory } from 'react-router';
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
    const {login} = useAuth();
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [isLoading, setisLoading] = useState(false)
    let history = useHistory();
    const notify = () =>{
        toast("Wow so easy!",{
            className:"custom-toast",
            draggable: true,
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    async function handleSubmit(e){
        //history.push('/home')
        setisLoading(true);
        console.log(Email)
        console.log(Password)
        login(Email, Password)
        .then((response)=>{
            console.log(response)
            history.push('/home')
        })
        .catch((error)=>{
            console.log(error)
            setisLoading(false)
            
        });
    }
    const paperStyle = {
        padding: 20,
        height: "60vh",
        width: 280,
        margin: "20px auto",
    };
    return (
        <div>
            <ToastContainer draggable={false} transition={Zoom} autoClose={8000}/>
            <div style={{ backgroundColor: "#9CC3D5FF", padding: "15px", height: "100vh"}}>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar sx={{ bgcolor: blue[500] }}>
                            <LoginIcon />
                        </Avatar>
                        <h2>Log In</h2>
                    </Grid>
                    <TextField
                        margin="normal"
                        label='Email'
                        placeholder='Enter your email'
                        fullWidth
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <TextField
                        label='Password'
                        placeholder='Enter your password'
                        type='password'
                        fullWidth
                        margin="normal"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}

                    />

                    <Button sx={{mt:3}} type='submit' onClick={handleSubmit} color='primary' variant='contained' fullWidth disabled={isLoading}>
                        Login
                    </Button>

                </Paper>
            </Grid>
        </div>
    </div>
    );
}

export default Login;
