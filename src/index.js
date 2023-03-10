import React from "react";
import ReactDOM from "react-dom";

//list 
const songs = [
    { id: 1, name: 'monkey dance' },
    { id: 2, name: 'what makes you beautiful' },
    { id: 3, name: 'fade to black' },
]

const list = ( <
        ul > {
            songs.map(item => < li > { item.name } < /li>)} <
                /ul>
            )
            //rendering elements 
            ReactDOM.render(list, document.getElementById('root'))