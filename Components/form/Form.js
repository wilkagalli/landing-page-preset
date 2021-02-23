import React from "react";
import classes from "../form/Form.module.scss";

// import { Container } from './styles';

function Form() {
  return (
    <div className={classes.formContainer}>
      <h2 className={classes.title}>Baixe gratuitamente seu Preset!</h2>

      <a href="https://drive.google.com/uc?export=download&id=1uD5NKuRQxdlvZb6EsUlpCufeinUU-oWf">
        <button className={classes.button}>Baixar Agora</button>
      </a>
      <br />
      <br />
      <br />
      <div className={classes.information}>
        <p className={classes.arrow}>→</p>
        <a target="_blank" href="/assets/Tutorial.pdf" className={classes.span}>
          Ver instruções!
        </a>
      </div>
    </div>
  );
}

export default Form;
