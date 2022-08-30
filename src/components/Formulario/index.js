import { useState } from 'react'
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

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido => ', nome, cargo, imagem, time)
  }

  return (
      <section className="formulario">
        <form onSubmit={aoSalvar}>
          <h2>Preencha para criar card</h2>
          <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)}
          />
          <CampoTexto 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu cargo"
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
          />
          <CampoTexto 
            label="Imagem" 
            placeholder="Digite o endereco da imagem"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
          />
          <ListaSuspesa 
            obrigatorio={true} 
            label="Time" 
            itens={times}
            valor={time}
            aoAlterado={valor => setTime(valor)}
          />
          <Botao>
            Criar card
          </Botao>        
        </form>
      </section>
  )
}

export default Formulario