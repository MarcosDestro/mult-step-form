import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useForm, FormActions } from "../../context/FormContext";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";
import { Link } from "react-router-dom";

export function FormStep2() {
    const navigate = useNavigate();
    const { state, dispatch } = useForm(); //desestruturar

    useEffect(()=>{
        if(state.name === ''){
            navigate('/');
            return;
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2 // Qual passo estamos
        })
    },[]);

    function handleNextStep() {
        // Se tiver algo em nome, passa pra próxima tela
        if(state.name !== ''){
            navigate('/step3');
            return;
        }
        return alert("Preencha os dados!");
    }

    function setLevel(level: number){
        dispatch({
            type: FormActions.SetLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{ state.name }, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0} // Devolve true
                    onClick={()=> setLevel(0)}
                />
                
                <SelectOption
                    title="Sou programador"
                    description="Já programo a 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=> setLevel(1)}
                />

                <Link to='/' className="backButton">Voltar</Link>
                <button onClick={handleNextStep} >Próximo</button>
            </C.Container>
        </Theme>
    );
};