import React from "react";
import classes from "../photo/Photo.module.scss";

// import { Container } from './styles';

function Photo() {
  return (
    <div className={classes.photo}>
      <img width="350px" src="/assets/photo1.png"></img>
    </div>
  );
}

export default Photo;
