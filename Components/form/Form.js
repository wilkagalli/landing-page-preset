import React, { useRef, useState } from "react";
import classes from "../form/Form.module.scss";

// import { Container } from './styles';

function Form() {
  const inputRef = useRef();
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [erro, setErro] = useState("");

  async function enviarEmail() {
    if (!validateEmail(inputRef.current.value)) {
      setErro("Ops, o e-mail não é válido!");
      return;
    }
    const retorno = await fetch(
      "https://api.convertkit.com/v3/forms/2061639/subscribe",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: "TAwh8Ii6XMTIXM-A4TMe0A",
          email: inputRef.current.value,
        }),
      }
    );
    setEmailEnviado(true);
    console.log(retorno);
  }

  function validateEmail(email) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    }

    return false;
  }

  return (
    <div className={classes.formContainer}>
      {!emailEnviado ? (
        <>
          <h2 className={classes.title}>Baixe gratuitamente seu Preset!</h2>
          <form className={classes.form}>
            <input
              name="email"
              type="email"
              ref={inputRef}
              placeholder="Endereço de e-mail"
            ></input>
            {erro && <p className={classes.erro}>{erro}</p>}
          </form>
          <button onClick={enviarEmail} className={classes.button}>
            DOWNLOAD
          </button>{" "}
        </>
      ) : (
        <textarea className={classes.textarea}>
          O preset foi enviado para seu e-mail. Não esqueça de verificar a caixa
          de spam :)
        </textarea>
      )}

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
