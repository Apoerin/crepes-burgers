import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { burgers } from "./Burgers";
import { crepes } from "./Crepes";

import sweetLunch from "../images/sweet-lunch.jpg";
import sweetCrepes from "../images/sweet-crepes.jpg";

//Menu of burgers, crepes, lunch of the day. Switch by clicking on tab

const Menu = () => {
  
  return (
      <Tabs className="tabs-wrapper" id="menu">
      <TabList className="tabs">
        <Tab className="tab-item">Burgers</Tab>
        <Tab className="tab-item">Lunch of the day</Tab>
        <Tab className="tab-item">Crepes</Tab>
      </TabList>
      <TabPanel>
        <div className="burgers">
          <ul> 
          {burgers.map(burger => (
            <li key={burger.id}>
            <h4>{burger.title}</h4>
            <span>{burger.price}</span>
            <img src={burger.image} alt={burger.title} />
            <p>{burger.description}</p>
            </li>
            ))}
          </ul>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="lunch">
          <h4>Sweet lunch today!</h4>
          <span>7$</span>
          <p>You can choose one of our 3 sweet crepes + one of our 4 cold drinks!
            <br />
            Nutella crepe, Crepe with salted caramel and nuts or Oreo Bang crepe with whipped cream and raspberries.
            <br />
            For drink - one of our homemade lemonades - Melon, Orange or Lemon-Mint. Or a Frozen Coffee!
          </p>
          <div>
          <img src={sweetLunch} alt="Sweet crepe lunch" />
          <img src={sweetCrepes} alt="Sweet crepes lunch" />
          </div>
        </div>
      </TabPanel>
      <TabPanel>
      <div className="crepes">
          <ul>
          {crepes.map(crepe => (
            <li key={crepe.id}>
              <h4>{crepe.title}</h4>
              <span>{crepe.price}</span>
              <img src={crepe.image} alt={crepe.title} />
              <p>{crepe.description}</p>
            </li>
            ))}
          </ul>
        </div>
      </TabPanel>
    </Tabs>
  )
}

export default Menu;
