import React, { useRef, useState } from 'react';
import classes from '../form/Form.module.scss';

// import { Container } from './styles';

function Form() {
    const inputRef = useRef();
    const [emailEnviado, setEmailEnviado] = useState(false);

    async function enviarEmail() {
        const retorno = await fetch('https://api.convertkit.com/v3/forms/2061639/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                api_key: 'TAwh8Ii6XMTIXM-A4TMe0A',
                email: inputRef.current.value,
            }),
        });
        setEmailEnviado(true);
        console.log(retorno);
    }

    return (
        <div className={classes.formContainer}>
            {!emailEnviado ? (
                <>
                    <h2 className={classes.title}>Baixe gratuitamente seu Preset!</h2>
                    <form className={classes.form}>
                        <input ref={inputRef} placeholder="Endereço de e-mail"></input>
                    </form>
                    <button onClick={enviarEmail} className={classes.button}>
                        Baixar Agora
                    </button>{' '}
                </>
            ) : (
                <h1>
                    O preset foi enviado para seu e-mail. Não esqueça de verificar a caixa de spam
                    :)
                </h1>
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
