import React, { useState } from 'react';
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
];

const Tab = () => {
  const [active, changeActive] = useState(menu[0]);

  const handleClick = (index) =>  changeActive(menu[index]);
  return (
    <div>
      <div className="header">
        {menu.map((item, index) =>
          <div onClick = {() => handleClick(index)}
               className = {item.label === active.label ? "active" : ""}>
            {item.label}
          </div>
        )
        }
      </div>
      <div className="footer">{active.content}</div>
    </div>
  )
};
export default Tab;