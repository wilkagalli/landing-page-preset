import React from "react";
import classes from "../photo/Photo.module.scss";

// import { Container } from './styles';

function Photo() {
  return (
    <div className={classes.photo}>
      <img src="/assets/photo.jpg"></img>
    </div>
  );
}

export default Photo;
