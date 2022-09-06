import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programacao',
      corPrimaria: '',
      corSegundaria: ''
    },
    {
      nome: 'Front-End',
      corPrimaria: '',
      corSegundaria: ''
    },
    {
      nome: 'Data Science',
      corPrimaria: '',
      corSegundaria: ''
    },
    {
      nome: 'Inovacao',
      corPrimaria: '',
      corSegundaria: ''
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programacao"/>
      <Time nome="Front-End"/>
      <Time nome="Data Science"/>
      <Time nome="inovacao"/>
    </div>
  );
}

export default App;
