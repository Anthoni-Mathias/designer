import CampoTexto from '../CampoTexto'
import ListaSuspesa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

  const times = [
    'Programacao',
    'Front-End',
    'Data Science',
    'Inoivacao'
  ]

  return (
      <section className="formulario">
        <form>
          <h2>Preencha para criar card</h2>
          <CampoTexto label="Nome" placeholder="Digite seu nome"/>
          <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
          <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem"/>
          <ListaSuspesa label="Time" itens={times}/>
        </form>
      </section>
  )
}

export default Formulario