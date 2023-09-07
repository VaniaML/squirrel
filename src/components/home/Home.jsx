import React from 'react';
import { createPortal } from 'react-dom';
import style from './Home.module.css';
import Ardillas from './ardillas.jpg';
import Nieve from './nieve.jpg';
import Lap from './lap.jpg';
import Patin from './patin.jpg';
import Cerrucho from './cerrucho.jpg';
import Carro from './carro.jpg';
import Carreta from './carreta.jpg';
import Bombero from './bombero.jpg';

export default function Home() {
   
    return(
      
      <div>
        <div>
        <img className={style.Img} src={ Ardillas } alt="Ardi" />
        <p className={style.Srv}>SERVICES</p>
        <div className={style.Line1}>
        <hr className={style.Line}></hr>
        </div>

        {createPortal(
        <div className={style.HeroBlock}>
        <h1 className={style.HeroText1}>Hardworking, noble and friendly</h1>
		    <hr className={style.Line3}></hr>
		    <h1 className={style.HeroText2}>They love the forest</h1>
        </div>,
        document.body
  )}
        </div>
        
        <div className={style.LineContainer}>
        <div className={style.ImgContainer}>     
          <img className={style.Imgs} src={ Nieve } alt="Nv" />
          <div className= {style.Name}>Squirrels</div>
          <div className= {style.Text}>We are building a snowman</div>
          </div>

          <div className={style.ImgContainer}>
          <img  className={style.Imgs} src={ Lap } alt="Lp" />
          <div className= {style.Name}>Squirrel</div>
          <div className= {style.Text}>Working with my laptop</div>
          </div>

          <div className={style.ImgContainer}>
          <img className={style.Imgs} src={ Patin } alt="Pt" />
          <div className= {style.Name}>Squirrel</div>
          <div className= {style.Text}>I work polishing the floor</div>
          </div>
          </div>

          <div className={style.LineContainer}>
          <div className={style.ImgContainer}>
          <img className={style.Imgs} src={ Cerrucho } alt="Ch" />
          <div className= {style.Name}>Squirrel</div>
          <div className= {style.Text}>Working cutting snowballs</div>
          </div>

          <div className={style.ImgContainer}>
          <img className={style.Imgs} src={ Carro } alt="Cr" />
          <div className= {style.Name}>Squirrel</div>
          <div className= {style.Text}>Driving on my way to work</div>
          </div>

          <div className={style.ImgContainer}>
          <img className={style.Imgs} src={ Carreta } alt="Ct" />
          <div className= {style.Name}>Squirrel</div>
          <div className= {style.Text}>Carrying wood for the campfire</div>
          </div>
          </div>

          <div className={style.AboutContainer}>
          <div className={style.LineContainer}>          
          <img className={style.Img1} src={ Bombero } alt="Bb" />
          <p className={style.Abt}>ABOUT</p>
          <hr className={style.LineAbt}></hr> 
          <div className= {style.About}>Squirrels are small but amazingly hardworking creatures of nature. These small rodents are always busy, whether it's foraging for food, building nests, or storing supplies for the winter.
          One of the most notable activities of squirrels is their constant search for food.
          When fall arrives and temperatures begin to drop, squirrels become even more industrious. 
          They spend hours collecting food and burying it in multiple secret locations. 
          This strategy allows them to survive during the cold winter months when food is scarce.</div>                  
          </div>         
          </div>

          <div>
          <p className={style.Srv}>CONTACT</p>
          <div className={style.Line1}>
          <hr className={style.Line}></hr>
          </div>
          </div>

          <div className={style.ContactContainer}>
            <iframe className={style.Map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369702.88759945694!2d13.091970793484215!3d52.501505676123905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerl%C3%ADn%2C%20Alemania!5e0!3m2!1ses-419!2smx!4v1693947171327!5m2!1ses-419!2smx"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
    
      )}