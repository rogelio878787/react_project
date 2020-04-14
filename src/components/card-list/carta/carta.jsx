import React from 'react';
import './carta.css';

const Tarjeta = props =>{
    return(
        <div className="col-md-3 mb-3 text-center">
            <div className="container tarjeta">
            <img className='img-fluid mb-3'src={`https://robohash.org/monster/${props.person.id}/?set=set2`} alt=""/>
            <h2 className="text-center">{props.person.name}</h2>
            <h5 className="text-center">{props.person.username}</h5>
    <h5 className="text-center">{props.person.email}</h5>
            
            </div>
        </div>
    )
}

export default Tarjeta;