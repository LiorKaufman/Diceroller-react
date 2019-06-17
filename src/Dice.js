import React from 'react';
import './App.css';



class Dice extends React.Component {

    render(){
        const {image,roll} = this.props
        return(
            <div className= "dice-container">
                <div className= "dice">
                    <img src={image}/>
                </div>
                <button onClick= {roll}>Roll </button>
             </div>
        )

    }
}

export default Dice;
