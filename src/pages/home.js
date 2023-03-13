import React from "react";
import MainMenuCard from './Components/MainMenuCard.jsx';
import powerbank from './Photos/pw.png'
import iqos from './Photos/iqos.png'
import vape from './Photos/vape.png'
import nag from './Photos/nag.png'
import glo from './Photos/glo.png'
  
const Home = () => {
  return (
    
    <React.StrictMode>
    <div class="ctg" >Категорії товарів</div>
    <div class="grid">
    <a href="/heater"><MainMenuCard img ={nag} title="Системи нагрівання тютюну" /></a>
    <a href="/heater"><MainMenuCard img ={iqos} title="Iqos"/></a>
    <a href="/heater"><MainMenuCard img ={glo} title="GLO"/></a>
    <a href="/heater"><MainMenuCard img ={vape} title="JOUZ"/></a>
    <a href="/heater"><MainMenuCard img ={powerbank}  title="Павербанки та зар. станції"/></a>
    </div>
    <div class = "tovar"> Підібрати товар</div>
    </React.StrictMode>
)};
  
export default Home;