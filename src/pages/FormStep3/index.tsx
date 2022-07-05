import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useForm, FormActions } from "../../context/FormContext";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

export function FormStep3() {
    const navigate = useNavigate();
    const { state, dispatch } = useForm(); //desestruturar

    useEffect(()=>{
        if(state.name === ''){
            navigate('/');
            return;
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3 // Qual passo estamos
        })
    },[]);

    function handleNextStep() {
        if(state.name !== '' && state.github !== ''){
            console.log('Enviando dados...');
            console.log(state);
            return;
        }
        return alert("Preencha os dados!");
    }

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        })
    }
    
    function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal { state.name }, onde te encontramos?</h1>
                <p>Preencha os seus dados para conseguirmos entrar em contato.</p>

                <hr />
                <label>
                    Qual o seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to='/step2' className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
};