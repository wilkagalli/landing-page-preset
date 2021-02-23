import React from "react";
import classes from "../form/Form.module.scss";
import Link from "next/link";

// import { Container } from './styles';

function Form() {
  return (
    <div className={classes.formContainer}>
      <h2 className={classes.title}>Baixe gratuitamente seu Preset!</h2>
      <Link href="/assets/NORDESTE-IV.dng">
        <a>
          <button className={classes.button}>Baixar Agora</button>
        </a>
      </Link>
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
