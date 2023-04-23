import React from 'react';
import Nav from './nav';
import Hero from './hero';
import Cards from './card';
import Cardbox from './cardbox';
import carddet from './carddet';
import Member from './member';
import "./index.css"


export default function App() {
  const cardData = carddet.map(details =>{
    return <Cardbox
            key ={details.id}
            image ={details.image}
            head ={details.headtext}
            body ={details.bodytext}
    />
  })
  return (
    <div>
     <Nav/> 
     <Hero/>
     <Cards/>
     <div className='cardgrid'>
     {cardData}
     </div>
     <Member/>
    </div>
  );
}


