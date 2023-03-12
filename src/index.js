import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Components/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Card title="Ситсеми нагрівання тютюну"/>
   <Card title="Iqos"/>
   <Card title="GLO"/>
   <Card title="JOUZ"/>
   <Card title="Павербанки та зар. станції"/>
  </React.StrictMode>
);



