//use React library
import React from 'react';

export class Content extends React.Component {

    //render method
    render() {
        return (
            //div elements
            <div>
                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }

}