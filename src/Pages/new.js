import React from 'react'
import reddit from '../Request/reddit'
import PhotoGallery from '../Components/PhotoGallery'
import { withStyles } from '@material-ui/styles';

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
            <div className={classes.root}>
                <PhotoGallery data={this.state.posts} />
            </div>
        )
    }

}

export default withStyles(styles)(NewPage);