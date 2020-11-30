//use React library
import React from 'react';
import { Movie } from './movie';
import axios from 'axios';

export class Read extends React.Component {
    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }
    
    state = {
        movie: [    ]
    };

    componentDidMount() {
        axios.get(' http://localhost:4000/api/movies')
            .then(
                (response) => {
                    this.setState({ movie: response.data })
                }
            )
            .catch(
                (error) => { console.log(error) }
            );
    } 

    ReloadData(){
        axios.get(' http://localhost:4000/api/movies')
        .then(
            (response) => {
                this.setState({ movie: response.data })
            }
        )
        .catch(
            (error) => { console.log(error) 
            });
    }

    //</div><Movie = {this.state.movie}></Movie>
    //render method
    render() {
        return (
            //div elements
            <div>
                <h3>This is Read components</h3>
                <Movie movie={this.state.movie} ReloadData={this.ReloadData}></Movie>


            </div>
        );
    }

}