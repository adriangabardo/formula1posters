import React from 'react'
import { withStyles } from '@material-ui/styles';

import reddit from '../Request/reddit'

import PhotoGallery from '../Components/PhotoGallery'
import LoadScreen from '../Components/Loading'

const styles = theme => ({
    root: {
        background: '#282c34',
        padding: '5% 2%'
    },
});

class NewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        reddit('new').then(response => {
            this.setState({ posts: response });
        }).catch(error => console.log('Failed with error >', error))
    }


    render() {
        const { classes } = this.props;
        return (
            (this.state.posts.length === 0) ? <LoadScreen /> :
            <div className={classes.root}>
                <PhotoGallery data={this.state.posts} />
            </div>
        )
    }

}

export default withStyles(styles)(NewPage);