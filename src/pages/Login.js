import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { blue } from "@mui/material/colors";
import { useHistory } from 'react-router';
import React from "react";


function Login() {
    let history = useHistory();
    const goTo = () =>{
        history.push('/home')
    }
    const paperStyle = {
        padding: 20,
        height: "60vh",
        width: 280,
        margin: "20px auto",
    };
    return (
        <div>
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
                    />

                    <TextField
                        label='Password'
                        placeholder='Enter your password'
                        type='password'
                        fullWidth
                        margin="normal"

                    />

                    <Button sx={{mt:3}} type='submit' onClick={goTo} color='primary' variant='contained' fullWidth>
                        Login
                    </Button>

                </Paper>
            </Grid>
        </div>
    </div>
    );
}

export default Login;
