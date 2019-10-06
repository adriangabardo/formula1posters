import React from 'react'
import { withStyles } from '@material-ui/styles';

import reddit from '../Request/reddit'

import LoadScreen from '../Components/Loading';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';


const styles = theme => ({
    root: {
        background: '#282c34',
        padding: '2%',
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    poster: {

    },
    media: {
        height: '450px',
        width: '300px',
        padding: 0,
        objectFit: 'cover'
    },
    cardActions: {
        backgroundColor: "#FF1801",
        display: "flex",
        justifyContent: "space-between"
    },
    actionButton: {
        color: '#FFFFFF',
        textDecoration: 'none',
    },
    refresh: {
        position: 'absolute',
        color: '#FFFFFF'
    }
});

class RandomPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

        this.getRandom = this.getRandom.bind(this);
    }

    getRandom() {
        reddit('random').then(response => {
            this.setState({ posts: response });
        }).catch(error => console.log('Failed with error >', error))
    }

    async componentDidMount() {
        this.getRandom();
    }


    render() {
        const { classes } = this.props;
        return (
            <>
                <IconButton aria-label="refresh" className={classes.refresh} onClick={() => this.getRandom()}>
                    <RefreshIcon />
                </IconButton>
                <div className={classes.root}>
                    {(this.state.posts.length === 0) ? <LoadScreen /> :
                    this.state.posts.map(post => {
                        return <div className={classes.poster} key={post.id}>
                            <img src={post.image} className={classes.media} alt={post.title} />
                            <Typography variant="subtitle2">{post.title}</Typography>
                            <Button size="small" color="primary" className={classes.actionButton}>
                                <a href={`http://www.reddit.com${post.url}`} target="_blank" rel="noopener noreferrer" className={classes.actionButton}>See on Reddit</a>
                            </Button>
                            <Button size="small" color="primary" className={classes.actionButton}>
                                <a href={`${post.image}`} target="_blank" rel="noopener noreferrer" className={classes.actionButton}>See original image</a>
                            </Button></div>
                    })}
                </div>
            </>
        )
    }

}

export default withStyles(styles)(RandomPage);