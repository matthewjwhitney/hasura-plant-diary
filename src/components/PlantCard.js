import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import { Avatar, CardActionArea, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function PlantCard(props) {
  const { tag_number, image, location, origin, species, status } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/160/90"
          title="placeholder image"
        />
        <CardHeader
          avatar={<Avatar>{tag_number}</Avatar>}
          title={species}
          titleTypographyProps={{ variant: "h5" }}
          subheader={<Chip label={status.toUpperCase()} />}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Location:</strong> {location?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Origin:</strong> {origin}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
