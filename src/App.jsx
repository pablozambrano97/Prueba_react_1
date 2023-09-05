import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import './App.css'
import  Seleccionar  from './components/Seleccionar';
import  Listado  from './components/Listado';
import Header from './components/Header';
import { MiApi } from './components/MiApi';
import Buscador from './components/Buscador';

function App() {
const [data, setData] = useState();
const [idioma, setIdioma]= useState('spa');
const [newData, setNewData]= useState();

  useEffect(()=>{
    MiApi(setData, idioma);
  },[idioma]);

  useEffect(()=>{
    setNewData(data);
  },[data]);

  return (
    <>
    <div className='d-flex flex-column gap-3'>
      <Header/>
      <Buscador newData={data} setNewData={setNewData}/>
    </div>
      <div className='d-flex flex-column gap-3'>
      <Seleccionar setIdioma={setIdioma} idioma={idioma}/>
      <Listado  newData={newData}/>
      </div>
    </>
  )
}

export default App
