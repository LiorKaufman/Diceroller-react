import React from 'react';
import './App.css';
import Dice from './Dice'
import Rolls from './Rolls'
import die1 from './die1.png'
import die2 from './die2.png'
import die3 from './die3.png'
import die4 from './die4.png'
import die5 from './die5.png'
import die6 from './die6.png'


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            diceFace: 1,
            list:[],
            diceImg: die1
        }
    }

    rollDice = () => {
        let randNum = Math.floor(Math.random()*6 + 1)
        this.updateList(randNum)
        this.updateImg(randNum)
        this.setState({diceFace:randNum})
    }

    updateList = (num) => {
        let newArr = this.state.list
        let numAsString = num.toString()
        newArr.push(numAsString)
        this.setState({list:newArr})
    }
    updateImg = (num) => {
        if(num === 1){
            this.setState({diceImg:die1})
        } else if(num === 2){
            this.setState({diceImg:die2})

        } else if(num === 3){
            this.setState({diceImg:die3})

        } else if(num === 4){
            this.setState({diceImg:die4})

        } else if(num === 5){
            this.setState({diceImg:die5})

        }else if(num === 6){
            this.setState({diceImg:die6})
        }
    }
    render(){
        return(
            <div className="main-container">
                <Dice  image={this.state.diceImg}
                 roll={this.rollDice}/>
                <Rolls values={this.state.list}/>
            </div>
        )

    }
}

export default App;
