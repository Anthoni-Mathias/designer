import Botao from '../Botao'
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

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido')
  }

  return (
      <section className="formulario">
        <form onSubmit={aoSalvar}>
          <h2>Preencha para criar card</h2>
          <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
          <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
          <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem"/>
          <ListaSuspesa obrigatorio={true} label="Time" itens={times}/>
          <Botao>
            Criar card
          </Botao>        
        </form>
      </section>
  )
}

export default Formulario