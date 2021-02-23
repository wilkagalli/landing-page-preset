import React from "react";
import Form from "../form/Form";
import Photo from "../photo/Photo";
import TextBlock from "../text-block/TextBlock";
import classes from "./ContainerBlock.module.scss";

// import { Container } from './styles';

function ContainerBlock() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.block}>
            <TextBlock></TextBlock>
            <Form></Form>
          </div>
          <div className={classes.spacer} />
          <div className={classes.photo}>
            <Photo></Photo>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContainerBlock;
