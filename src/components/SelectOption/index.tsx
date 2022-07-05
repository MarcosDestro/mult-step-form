import * as C from "./styles";

interface Props {
    title: String;
    description: String;
    icon: String;
    selected: boolean;
    onClick: ()=> void;
}

export function SelectOption({ title, description, icon, selected, onClick }: Props) {
    return(
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{ icon }</C.Icon>
            <C.Info>
                <C.Title>{ title }</C.Title>
                <C.Description>{ description }</C.Description>
            </C.Info>
        </C.Container>
    );
}