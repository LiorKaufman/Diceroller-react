import React from 'react';
import './App.css';


class Rolls extends React.Component {

    render(){
        const {values,value} = this.props
        return(
            <div className="rolls">
                {values.map((theNums)=> {
                    return <p>{theNums} </p>
                })}
            </div>
        )

    }
}

export default Rolls;
