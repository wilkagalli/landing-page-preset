import React from "react";
import classes from "../form/Form.module.scss";
import Link from "next/link";

// import { Container } from './styles';

const download = (url, name) => {
  if (!url) {
    throw new Error("Resource URL not provided! You need to provide one");
  }

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";

      if (name && name.length) a.download = name;
      document.body.appendChild(a);
      a.click();
    })
    .catch(() => null);
};

function Form() {
  return (
    <div className={classes.formContainer}>
      <h2 className={classes.title}>Baixe gratuitamente seu Preset!</h2>

      <button
        onClick={() => download("/assets/NORDESTE-IV.dng", "NORDEST-IV.dng")}
        className={classes.button}
      >
        Baixar Agora
      </button>

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
