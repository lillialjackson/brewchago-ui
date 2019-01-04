import React from 'react';
import './main-nav.css';
import {
  Avatar,
  Box,
  Button,
  Card,
  Column,
  Heading,
  Icon,
  Link,
  Text,
  TextField
} from "gestalt";
import 'gestalt/dist/gestalt.css';


const MainNav = (props) => {
  return (
    <div className="nav-container">
      <ul className="main-nav">
        <li>
          <a href="#">
          <Icon icon="handle" accessibilityLabel="Home" color="darkGray" />
          Home
          </a>
        </li>
        <li>
          <a href="#">
          <Icon icon="add-circle" accessibilityLabel="add-circle" color="darkGray" />
          New Brew
          </a>
        </li>
        <li>
          <a href="#">
          <Icon icon="search" accessibilityLabel="Search" color="darkGray" />
          Search
          </a>
         </li>
        <li>
          <a href="#">
          <Icon icon="heart" accessibilityLabel="Heart" color="darkGray" />
          Favorites
          </a>
        </li>
        <li>
          <a href="#">
          <Icon icon="shopping-bag" accessibilityLabel="shopping list" color="darkGray" />
          Shopping List
          </a>
        </li>
        <li>
          <a href="#">
          <Icon icon="graph-bar" accessibilityLabel="Analytics" color="darkGray" />
          Brewlytics
          </a>
        </li>
        <li>
          <a href="#">
          <Icon icon="terms" accessibilityLabel="Terms" color="darkGray" />
          Manual</a>
          </li>
        <li>
          <a href="#">
          <Icon icon="question-mark" accessibilityLabel="About" color="darkGray" />
          About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
