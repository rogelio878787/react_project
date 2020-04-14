import React from 'react';

//componetns

import Tarjeta from './carta/carta';


const CardList = props =>{
    return(
        <div className="Card-List row">
            {
               props.people.map(person => <Tarjeta key={person.id} person={person}></Tarjeta>) 
            }
        </div>
    )
}

export default CardList;