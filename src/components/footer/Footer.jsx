import React from 'react';
import style from './Footer.module.css';

export default function Footer() {
   
    return(
      
      <div> 
        <div className={style.Footer}>
        <h1 className={style.Text}>Hardworking Squirrel</h1>
        <p className={style.Name}>Vania Martinez L.</p>
        <div className={style.Btns}>
        <button className={style.Btn}>HOME</button>	
        <button className={style.Btn}>SERVICES</button>
        <button className={style.Btn1}>ABOUT</button>
        <button className={style.Btn1}>CONTACT</button>
        </div>
        </div>
        </div>
      
      )}