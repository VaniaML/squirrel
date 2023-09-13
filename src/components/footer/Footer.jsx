import React from 'react';
import style from './Footer.module.css';

export default function Footer() {
   
    return(
      
      <div> 
        <div className={style.Footer}>
        <h1 className={style.Text}>Hardworking Squirrel</h1>
        <p className={style.Name}>Vania Martinez L.</p>
        <div className={style.Btns}>
        <a href='#Home' className={style.Btn}>HOME</a>
        <a href='#Services' className={style.Btn}>SERVICES</a>
        <a href='#About' className={style.Btn1}>ABOUT</a>
        <a href='#Contact' className={style.Btn1}>CONTACT</a>
        </div>
        </div>
        </div>
      
      )}