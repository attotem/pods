import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Components/Card';
// import powerbank from './Photos/pw.png'
// import iqos from 'src/iqos.png'
// import vape from 'src/vape.png'
// import nag from 'src/nag.png'
import glo from './Photo/glo.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Card img ={glo} title="Ситсеми нагрівання тютюну"/>
   <Card img ={glo} title="Iqos"/>
   <Card img ={glo} title="GLO"/>
   <Card img ={glo} title="JOUZ"/>
   <Card img ={glo}  title="Павербанки та зар. станції"/>
  </React.StrictMode>
);



