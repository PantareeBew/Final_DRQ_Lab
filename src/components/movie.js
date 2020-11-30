import React from 'react';
import {MovieItem} from './movieItem'

export class Movie extends React.Component{

    render(){
        return(this.props.movie.map((movie) => {
            return <MovieItem movie = {movie} ReloadData={this.props.ReloadData}></MovieItem>
        }));
          /*  <div>
                <h3>Hello From Movies Component</h3>
               
            </div>*/
        
    }
}