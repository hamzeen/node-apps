import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex'
    },

    searchButton: {
        height: '38px',
        width: '150px',
        marginTop: '30px',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

class SearchCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "hamzeen"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({
            username: event.target.value,
        });
    };

    render() {
        const { onSearchClick, classes } = this.props;
        const { username } = this.state;
        return (
            <div className={classes.container}>
                <TextField
                    id="filled-name"
                    label="Username"
                    className={classes.textField}
                    value={username}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="filled"
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.searchButton}
                    onClick={() => onSearchClick(username)}
                >
                    {'Search'}
                </Button>
            </div >
        )
    }
}

export default withStyles(styles)(SearchCard);
