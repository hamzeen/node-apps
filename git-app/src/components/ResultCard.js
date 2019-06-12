import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Link from "@material-ui/core/Link";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    chip: {
        marginRight: '5px',
    },

    card: {
        width: '100%',
        margin: '8px',
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
        backgroundColor: '#3f51b5',
    },
});

class ResultCard extends React.Component {

    componentDidMount() {
        console.log(this.props);
        const { fetchForks, id } = this.props;
        // console.log(id);
    }

    render() {
        const { gistname, id, username, owner, fileTypes, classes } = this.props;

        const fileTypeChips = fileTypes.map((fileType, i) => {
            return <Chip
                key={i}
                avatar={
                    <Avatar className={classes.avatar}>
                        {fileType.shortname}
                    </Avatar>
                }
                label={fileType.name}
                className={classes.chip}
                component="a"
                href="#"
                clickable
                variant="outlined"
            />;
        }, this)


        return (
            <Card className={classes.card}>
                <CardActionArea href={`${owner.html_url}\/${gistname}`}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Name:: {gistname}
                            <Typography component="p">
                                Authro:: {username}
                            </Typography>
                            <Typography component="p">

                                <Link href={owner.html_url} className={classes.link}>
                                    Author:: {id}
                                </Link>
                            </Typography>
                        </Typography>
                        T:: {fileTypeChips}

                                <img src={owner.avatar_url} width="20px"/>


                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(ResultCard);
