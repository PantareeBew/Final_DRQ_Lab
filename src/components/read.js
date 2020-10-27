//use React library
import React from 'react';
import { Movie } from './movie';
import axios from 'axios';

export class Read extends React.Component {
    state = {
        movie: [

        ]

    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(
                (response) => {
                    this.setState({ movie: response.data.Search })
                }
            )
            .catch(
                (error) => { console.log(error) }
            );
    } 

    //</div><Movie = {this.state.movie}></Movie>
    //render method
    render() {
        return (
            //div elements
            <div>
                <h3>This is Read components</h3>
                <Movie movie={this.state.movie}></Movie>


            </div>
        );
    }

}