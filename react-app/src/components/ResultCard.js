import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  chip: {
    marginRight: '0px',
  },

  card: {
    width: 'calc(33% - 16px)',
    margin: '5px',
  },

  loader: {
    float: 'right'
  },

  userAvatar: {
    width: 30,
    height: 30,
    margin: '3px',
    marginBottom: '7px'
  },

  avatar: {
    fontSize: '11px',
    color: '#fff',

    border: '1px solid #e4e6b9',
    /*overflow: 'hidden',
    position: 'absolute',
    bottom: '50px',
    right: '20px',
    backgroundColor: '#fefefe',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'*/
  },
  username: {
  }
});

class ResultCard extends React.Component {

    componentDidMount() {
        // console.log(this.props);
        // const { fetchForks, id } = this.props;
        // console.log(id);
    }

    render() {
        const { gistname, id, username, owner, fileTypes, classes } = this.props;

        return (
          <Card className={classes.card}>
            <CardContent>
              <h2>{gistname}</h2>
                <div  href={`${owner.html_url}/${gistname}`}>

                  <div className={classes.username}>{owner.html_url}</div>
                  <Avatar className={classes.avatar} src={owner.avatar_url} href={owner.html_url}></Avatar>
                </div>
            </CardContent>
          </Card>
        );
    }
}

export default withStyles(styles)(ResultCard);
