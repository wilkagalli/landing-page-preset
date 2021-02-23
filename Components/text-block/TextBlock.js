import React from "react";
import classes from "./TextBlock.module.scss";

// import { Container } from './styles';

function TextBlock() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Edite com um Click, de GRAÇA! :)</h1>

      <h3 className={classes.blockText}>
        Ei pessoal! Demorou mas saiu kkk <br />
        Esse é meu preset "Nordeste IV", criei um pack na minha viagem para o
        Brasil e esse foi o que eu mais usei. <br /> Eu tô muito animada pra ver
        vocês usando esse preset por aí :) baixe a edição e aproveite esse
        presentinho meu para você! <br />
        <br /> Com muito amor, <br />
        <br /> Wilka :)
        <br />
        <br />
      </h3>
    </div>
  );
}

export default TextBlock;
