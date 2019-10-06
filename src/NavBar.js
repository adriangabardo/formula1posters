import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        color: '#282c34',
        height: '8vh'
    },
    headerWrapper: {
        backgroundColor: '#FF1801',
        height: '8vh',
        padding: '0 25px',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    title: {
        flexGrow: 1,
    },
    linkButton: {
        height: '8vh',
        textTransform: 'capitalize',
        borderRadius: '0',
        '&:hover': {
            color: "#FFFFFF",
            backgroundColor: '#FF1801',
        }
    },
    link: {
        color: 'inherited',
        textDecoration: 'none'
    }
});

const pages = ['top', 'hot', 'new', 'rising', 'random'];

function Navigation() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar disableGutters={true} variant={"dense"}>
                    <div className={classes.headerWrapper}>
                        Formula 1 Posters
                    </div>

                    {pages.map(page => {
                        return <Link to={`${page}`} className={classes.link}>
                            <Button className={classes.linkButton}>
                                <Typography variant="p">
                                    {page}
                                </Typography>
                            </Button>
                        </Link>
                    })}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;