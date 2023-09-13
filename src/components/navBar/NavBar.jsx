import React from 'react';
import style from './NavBar.module.css';

export default function NavBar() {
   
return(
  <div>
    <div className={style.NavBar}>
      <h1 className={style.Text}>Hardworking Squirrel</h1>
      <a href='#Home' className={style.Btn}>HOME</a>
      <a href='#Services' className={style.Btn}>SERVICES</a>
      <a href='#About' className={style.Btn1}>ABOUT</a>
      <a href='#Contact' className={style.Btn1}>CONTACT</a>
      </div>
      </div>
  
  )}