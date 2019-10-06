import React from 'react';
import { makeStyles } from '@material-ui/styles';
import logo from './logo.svg';

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
    logo: {
        height: '60vmin',
    },
});

function Main() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={logo} className={classes.logo} alt="logo" />
        </div>
    )
}

export default Main;