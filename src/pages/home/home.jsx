import React from 'react';

//components

import CardList from '../../components/card-list/cardList';
import SearchBox from '../../components/searchbox/searchbox';


class Home extends React.Component{
    constructor(){
        super()

        this.state = {
            people: [
                // {id:1,name:'Rogelio', lastname: 'Gomez'},
                // {id:2,name:'Elizabeth', lastname: 'Aguilar'},
                // {id:3,name:'Brenda', lastname:'Gomez'},
                // {id:4,name:'Debora', lastname:'Cruz'}
            ],

            search:'',
        }

    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({people:users}))
    }

    render(){
       
        //destructuring

        const {people, search} = this.state;
        const filteredMonsters = people.filter(person =>
            person.name.toLowerCase().includes(search.toLowerCase())
                )

        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Home Page</h2>
                        <hr/>
                        
                        <SearchBox
                        
                            placeholder="Buscar por nombre"
                            handleChange = {event => this.setState({search:event.target.value})}

                        
                        />

                        <CardList people={filteredMonsters}></CardList>

                    </div>
                </div>
            </div>
        )
    }
}


export default Home;