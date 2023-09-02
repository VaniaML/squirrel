import React from 'react';
import style from './Home.module.css';
import Ardillas from './ardillas.jpg';
import Nieve from './nieve.jpg';
import Lap from './lap.jpg';
import Patin from './patin.jpg';
import Cerrucho from './cerrucho.jpg';
import Carro from './carro.jpg';
import Carreta from './carreta.jpg';

export default function Home() {
   
    return(
      
      <div>
        <img className={style.Img} src={ Ardillas } alt="Ardi" />
        <p className={style.Srv}>SERVICES</p>
        <div className={style.Line1}>
        <hr className={style.Line}></hr>
        </div>
        <div className={style.Line1}>
        <img className={style.Imgs} src={ Nieve } alt="Nv" />        
        <img  className={style.Imgs} src={ Lap } alt="Lp" />
        <img className={style.Imgs} src={ Patin } alt="Pt" />
        <img className={style.Imgs} src={ Cerrucho } alt="Ch" />
        <img className={style.Imgs} src={ Carro } alt="Cr" />
        <img className={style.Imgs} src={ Carreta } alt="Ct" />
        </div>

      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      <p>HOLA</p>
      </div>
      
      )}