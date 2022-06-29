import { createContext, ReactNode, useContext, useReducer } from "react";

// Types para os dados iniciais
interface StateData {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

// Dados iniciais
const initialData: StateData = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

interface ContextType {
    state: StateData;
    dispatch: (action: ActionTypes) => void;
}

// Contexto
export const FormContext = createContext<ContextType | undefined>(undefined);

// Constantes
export enum FormActions {
    setCurrentStep,
    setName,
    SetLevel,
    setEmail,
    setGithub,
}

// Types para action
interface ActionTypes {
    // // Action pode vir somente os dados acima
    // action: FormActions;
    type: FormActions;
    // Pode receber qualquer coisa
    payload: any;

    // Obs: Evitar usar o any, mas nesse caso pode vir qualquer dado
}

// Reducer
function formReducer(state: StateData, action: ActionTypes) {
    switch(action.type){
        // Ação de trocar o passo atual
        case FormActions.setCurrentStep:
            // Clona a state e troca o passo recebido pelo payload
            return {...state, currentStep: action.payload};

        // Ação de trocar o nome
        case FormActions.setName:
            // Clona a state e troca o nome
            return {...state, name: action.payload};
        
        // Ação de trocar o nível
        case FormActions.SetLevel:
            // Clona a state e troca o nível
            return {...state, level: action.payload};
        
        // Ação de trocar o email
        case FormActions.setEmail:
            return {...state, email: action.payload};

        case FormActions.setGithub:
            return {...state, github: action.payload};
        
        // Caso o usuário não mande nada
        default:
            return state;
    }
}

interface FormProviderProps {
    children: ReactNode;
}

// Provider
export function FormProvider({ children }: FormProviderProps) {
    const [ state, dispatch ] = useReducer(formReducer, initialData);

    return (
        <FormContext.Provider value={{state, dispatch}}>
            { children }
        </FormContext.Provider>        
    );
}

export function useForm() {
    const context = useContext(FormContext);
    // Analisa se o contexto foi inserido fora do provider dele
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    // Caso contrário retorna o próprio contexto
    return context;
}


