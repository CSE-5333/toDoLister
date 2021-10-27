import { Grid, Paper, Button } from '@mui/material';
import logo from '../Assets/todo-icon.png';
import icon from '../Assets/get-started_icon.jpg';
import React from 'react'
import { useHistory } from 'react-router';

function Landing() {
    let history = useHistory();
    const goTo = () =>{
        history.push('/signup')
    }
    const paperStyle = {
        padding: 20,
        height: "80vh",
        width: "100vh",
        margin: "20px auto",
    };
    const styletext = {
        fontWeight: 'bold',
        fontStyle: 'italic',
        
        fontSize: 30,
        color: "#0F52BA",
        textAlign: "center",
    }
    return (
        <div>
            <div style={{ backgroundColor: "#9CC3D5FF", padding: "15px", height: "100vh"}}>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <img src={logo} alt="logo" height="100px" width="100px" style={{ margin: "0 auto" }} />
                            <h1>Welcome to our to-do lister app!</h1>
                            <img src={icon} alt="logo" height="250px" width="500px" style={{ margin: "20px auto" }} />
                            <Grid align = 'center'>
                                <Button variant="contained" onClick={goTo} >Get Started</Button>
                            </Grid>
                            <p style={styletext}>Manage your life better with us.!!</p>
                        </Grid>

                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

export default Landing
