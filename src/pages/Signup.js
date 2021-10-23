import React from 'react'
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { blue } from "@mui/material/colors";

function Signup() {
    const paperStyle = {
        padding: 20,
        height: "80vh",
        width: 500,
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
                        <h2>Sign Up</h2>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch">
                        <TextField
                            margin="normal"
                            label='First Name'
                            placeholder='Enter your First Name'

                        />
                        <TextField
                            margin="normal"
                            label='Last Name'
                            placeholder='Enter your Last Name'

                        />
                    </ Grid>

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
                    <TextField
                        label='Confirm Password'
                        placeholder='Re-enter your password'
                        type='password'
                        fullWidth
                        margin="normal"

                    />

                    <Button sx={{ mt: 3 }} type='submit' color='primary' variant='contained' fullWidth>
                        Sign up
                    </Button>


                </Paper>
            </Grid>
        </div>
    );
}

export default Signup
