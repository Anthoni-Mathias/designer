import './CampoTexto.css'

const CampoTexto = (props) => {

  const placeholderModifica = `${props.placeholder}...`

  let valor = 'Guilherme Silveira'

  const aoDigitado = (evento) => {
    valor = evento.target.value
    console.log(valor)
  }

  return (
    <div className= "campo-texto">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto