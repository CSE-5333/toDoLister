import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { blue } from "@mui/material/colors";
import {useEffect, useState } from "react";
import { useHistory } from 'react-router';
import {useAuth} from "../contexts/AuthContext"



function Signup() {
    
    //variables for storing form fields
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [CPassword, setCPassword] = useState("");
    const [emailError, setemailError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    const [cpasswordError, setcpasswordError] = useState("")
    const [isLoading, setisLoading] = useState(true)
    const {register} = useAuth();
    let history = useHistory();
    
    async function handleSubmit(e){
        e.preventDefault()
        setisLoading(true);
        register(Email, Password)
        .then((response)=>{
            //console.log(response)
            history.push('/home')

        })
        .catch((error)=>{
            console.log(error)
            setisLoading(false)
        })
            
        
     }


     useEffect(()=>{
         var regexEmail = /@+.+(com|co|org|fr|net|de|ru|it|es|nl|ca|be|ch|edu)/;
         var resultEmail = regexEmail.test(Email)
         if(!resultEmail && Email.length>0)
         {
            setemailError("Invalid Email");
            

         }
         else{
             setemailError("");
             setisLoading(false);

         }
         if((Password.length <8 || Password.length >15)&& Password.length>0)
         {
            setpasswordError("Password length should be 8 to 15 characters")
            
         }
         else
         {
            setpasswordError("")
            setisLoading(false)
         }
         if(!passwordError.length && Password !== CPassword && CPassword.length)
         {
            setcpasswordError("The password didn't match")
         }
         else
         {
            setcpasswordError("")
            setisLoading(false)
         }

         if(!Email.length || !Password.length || cpasswordError.length)
         {
             setisLoading(true)
         }
        
     },[Email, Password, CPassword, emailError, passwordError, cpasswordError])

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
                        
                        <TextField
                            error={emailError.length}
                            helperText={emailError}
                            margin="normal"
                            label="Email"
                            placeholder="Enter your email"
                            fullWidth
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <TextField
                            error={passwordError.length}
                            helperText={passwordError}
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
                            error={cpasswordError.length}
                            helperText={cpasswordError}
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
