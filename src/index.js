import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Components/Card';
// import powerbank from './Photos/pw.png'
import iqos from './Photos/iqos.png'
import vape from './Photos/vape.png'
import nag from './Photos/nag.png'
import glo from './Photos/glo.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Card img ={nag} title="Ситсеми нагрівання тютюну"/>
   <Card img ={iqos} title="Iqos"/>
   <Card img ={glo} title="GLO"/>
   <Card img ={vape} title="JOUZ"/>
   <Card img ={iqos}  title="Павербанки та зар. станції"/>
  </React.StrictMode>
);



