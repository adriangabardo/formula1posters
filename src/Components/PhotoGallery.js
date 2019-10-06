import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    outer: {
        flexGrow: 1,
        padding: '0 5%'
    },
    grid: {
        maxWidth: '25%',
        [theme.breakpoints.down('md')]: {
            width: '50%',
            maxWidth: '50%'
        }
    },
    media: {
        [theme.breakpoints.down('md')]: {
            height: '200px'
        },
        height: '350px',
        width: '100%',
        padding: 0
    },
    card: {
        width: '100%',
        height: '70vh',
        [theme.breakpoints.down('md')]: {
            height: '50vh'
        },
        display: "grid",
        gridTemplateRows: "1fr auto",
        // gridGap: "8px",
    },
    cardActions: {
        backgroundColor: "#FF1801",
        display: "flex",
        justifyContent: "space-between"
    },
    actionButton: {
        color: '#FFFFFF',
        textDecoration: 'none',
    }
}));

export default function PhotoGallery(data) {
    const classes = useStyles();
    return (
        <div className={classes.outer}>
            <Grid container spacing={3} >
                {data.data.map(post => {
                    return <Grid item xs={12} className={classes.grid} key={post.id}>
                        <Card className={classes.card} raised={true}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={post.image}
                                    title={post.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle2">
                                        {post.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Button size="small" color="primary" className={classes.actionButton}>
                                    <a href={`http://www.reddit.com${post.url}`} target="_blank" rel="noopener noreferrer" className={classes.actionButton}>See on Reddit</a>
                                </Button>
                                <Button size="small" color="primary" className={classes.actionButton}>
                                    <a href={`${post.image}`} target="_blank" rel="noopener noreferrer" className={classes.actionButton}>See original image</a>
                                </Button>
                            </CardActions>
                        </Card></Grid>
                })}
            </Grid>
        </div>
    );
}