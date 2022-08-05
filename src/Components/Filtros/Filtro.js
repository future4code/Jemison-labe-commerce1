import {Formulario} from "./StyleFiltro"

export function Filtro (props) {
    return (
        <Formulario>
            <h3> Filtros: </h3>
            
            <label> Valor minino:</label>
            <input
                type="number"
                placeholder="Digite um valor mínimo"
                value={props.minValor}
                onChange = {props.onChangeMinValor}
            />

            <label> Valor maximo:</label>
            <input
                type="number"
                placeholder="Digite um valor Maximo"
                value={props.maxValor}
                onChange = {props.onChangeMaxValor}
            />

            <label> Nome do produto:</label>
            <input
                type="text"
                placeholder="Digite o nome do produto"
                value={props.pesquisa}
                onChange = {props.onChangePesquisa}
            />

        </Formulario>
    )

}