import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      alignItems: 'center'
    },

    searchButton: {
      width: '150px',
      height: '56px',
      marginTop: '8px'
    },


    textField: {
      flexGrow: 1
    },

    multilineColor:{
      backgroundColor: 'white'
    }
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
                    backgroundColor="white"
                    InputProps={{
                      classes: {
                        input: classes.multilineColor
                      }
                    }}
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
