import React from 'react';
import "./home.css";
import { Social } from './Social';
import { Data } from './Data';
export const Home = () => {
  return (
   <section className='home section' id="home">
    <div className='home__container '>
       <div className="home__content">
       <Social/>
       <div className='home__img'></div>
       <Data/>

       </div> 

    </div>
   </section>
  )
}
