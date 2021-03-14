import React from "react";
import classes from "./TextBlock.module.scss";

// import { Container } from './styles';

function TextBlock() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Edite com um Click, de GRAÇA! :)</h1>

      <h3 className={classes.blockText}>
        Ei pessoal! Que bom ter vocês por aqui! <br />
        Esses são meus presets, estou disponibilizando alguns aos poucos
        gratuitamente pra vocês deixarem suas fotos ainda mais lindas :)
        <br /> Eu tô muito animada pra ver vocês usando esses presets por aí :)
        baixe a edição e aproveite esse presentinho meu para você! <br />
        <br /> Com muito amor, <br />
        <br /> Wilka :)
        <br />
        <br />
      </h3>
    </div>
  );
}

export default TextBlock;
