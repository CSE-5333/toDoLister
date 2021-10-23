import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { blue } from "@mui/material/colors";

import React from "react";


function Login() {
    const paperStyle = {
        padding: 20,
        height: "60vh",
        width: 280,
        margin: "20px auto",
    };
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar sx={{ bgcolor: blue[500] }}>
                            <LoginIcon />
                        </Avatar>
                        <h2>Sign In</h2>
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

                    <Button sx={{mt:3}} type='submit' color='primary' variant='contained' fullWidth>
                        Login
                    </Button>


                </Paper>
            </Grid>
        </div>
    );
}

export default Login;
