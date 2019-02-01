import React from "react"
import './App.css';

const menu = [
    {
      'label': 'Tab1',
      'content': 'One'
    },
    {
      'label': 'Tab2',
      'content': 'Two'
    },
    {
      'label': 'Tab3',
      'content': 'Three'
    },
  ]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: menu[0]
        }
    }

    handleClick = (index) => () => {
        this.setState({ active: menu[index] })
    }

    render() {
        return (
            <div>
        <div className="header">
        {menu.map((item, index) => <div onClick = {this.handleClick(index)} 
           className = {item.label === this.state.active.label ? "active" : ""}>
            {item.label}
            </div>
            )
            }
            </div>
            <div className="footer">{this.state.active.content}</div>
        </div>
        )
    }
}