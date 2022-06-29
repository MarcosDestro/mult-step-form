import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useForm, FormActions } from "../../context/FormContext";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export function FormStep2() {
    const navigate = useNavigate();
    const { state, dispatch } = useForm(); //desestruturar

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2 // Qual passo estamos
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

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>Vamos começar com o seu nome.</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="🥳"
                />
                
                <SelectOption
                    title="Sou programador"
                    description="Já programo a 2 anos ou mais"
                    icon="😎"
                />

                <button onClick={handleNextStep} >Próximo</button>
            </C.Container>
        </Theme>
    );
};