import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useForm, FormActions } from "../../context/FormContext";
import { ChangeEvent, useEffect } from "react";

export function FormStep1() {
    const navigate = useNavigate();
    const { state, dispatch } = useForm(); //desestruturar

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1 // Qual passo estamos
        })
    },[]);

    function handleNextStep() {
        // Se tiver algo em nome, passa pra próxima tela
        if(state.name !== ''){
            navigate('/step2');
            return;
        }
        return alert("Preencha os dados!");
    }

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        })
    }


    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome.</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr />
                <label>Seu nome completo:
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep} >Próximo</button>
            </C.Container>
        </Theme>
    );
};