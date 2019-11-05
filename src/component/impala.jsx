import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 360,
    backgroundColor:"white",
  },
  media: {
    height: 0,
    paddingTop: '40.20%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ImpalaSpace() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            I.S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="impala.space"
        subheader="CREATIVECOMMUNALLIVING"
      />
       <CardMedia
        className={classes.media}
        image="impspc.jpeg"
        title="impala"
      />

       </Card>
    );
}
export default ImpalaSpace;