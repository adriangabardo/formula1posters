import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({    
    root: {
        background: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    progress: {
        color: "#FFFFFF",
    },
    loadingText: {
        padding: '5%'
    }
})

function LoadScreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress className={classes.progress} size={70}/>
            <Typography variant="h6" className={classes.loadingText}>Loading data...</Typography>
        </div>
    )
}

export default LoadScreen;