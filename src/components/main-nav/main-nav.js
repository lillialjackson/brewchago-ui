import React from 'react';
import './main-nav.css';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Column,
  Heading,
  Icon,
  Link,
  Tabs,
  Text,
  TextField
} from "gestalt";
import 'gestalt/dist/gestalt.css';


class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isMobile: true
    };
    this.handleChange = this._handleChange.bind(this);
  }
  _handleChange({ activeTabIndex, event }) {
    event.preventDefault();
    this.setState({
      activeIndex: activeTabIndex
    });
  }


  render() {
    const isMobile = true;

    if (!isMobile) {
    return (
      <div id= "nav-tabs">
        <Tabs
          tabs={[
            {
              text: "Home",
              href: "#"
            },
            {
              text: "New Brew",
              href: "#"
            },
            {
              text: "Search",
              href: "#"
            },
            {
              text: "Favorites",
              href: "#"
            },
            {
              text: "Shopping List",
              href: "#"
            },
            {
              text: "Brewlytics",
              href: "#"
            },
            {
              text: "Manual Mode",
              href: "#"
            },
            {
              text: "About",
              href: "#"
            }
          ]}
          activeTabIndex={this.state.activeIndex}
          onChange={this.handleChange}
        />
      </div>
    );
  } else {
    return (
          <div className="nav-container">
            <ul className="main-nav">
              <Card>
                <li>
                  <a href="#">
                  <Icon className = "main-nav-mobile-icon" icon="handle" accessibilityLabel="Home" color="darkGray" />
                  </a>
                </li>
              </ Card>
              <Card>
                <li>
                  <a href="#">
                  <Icon className = "main-nav-mobile-icon" icon="add-circle" accessibilityLabel="add-circle" color="darkGray" />
                  </a>
                </li>
              </ Card>
              <Card>
                <li>
                  <a href="#">
                  <Icon className = "main-nav-mobile-icon" icon="search" accessibilityLabel="Search" color="darkGray" />
                  </a>
                 </li>
               </ Card>
               <Card>
                <li>
                  <a href="#">
                  <Icon className = "main-nav-mobile-icon" icon="heart" accessibilityLabel="Heart" color="darkGray" />
                  </a>
                </li>
              </ Card>
              <Card>
                <li>
                  <a href="#">
                  <Icon className = "main-nav-mobile-icon" icon="shopping-bag" accessibilityLabel="shopping list" color="darkGray" />
                  </a>
                </li>
              </ Card>
              <Card>
                <li>
                  <a href="#">
                  <Icon className = "main-nav-mobile-icon" icon="graph-bar" accessibilityLabel="Analytics" color="darkGray" />
                  </a>
                </li>
              </ Card>
              <Card>
                <li>
                  <a href="#">
                  <Icon className = "main-nav-mobile-icon" icon="terms" accessibilityLabel="Terms" color="darkGray" />
                  </a>
                  </li>
              </ Card>
              <Card>
                <li>
                  <a href="#">
                  <Icon className = "main-nav-mobile-icon" icon="question-mark" accessibilityLabel="About" color="darkGray" />
                  </a>
                </li>
              </ Card>
            </ul>
          </div>

    );

  }
  }
}
//   return (
//     <div className="nav-container">
//       <ul className="main-nav">
//         <li>
//           <a href="#">
//           <Icon icon="handle" accessibilityLabel="Home" color="darkGray" />
//           Home
//           </a>
//         </li>
//         <li>
//           <a href="#">
//           <Icon icon="add-circle" accessibilityLabel="add-circle" color="darkGray" />
//           New Brew
//           </a>
//         </li>
//         <li>
//           <a href="#">
//           <Icon icon="search" accessibilityLabel="Search" color="darkGray" />
//           Search
//           </a>
//          </li>
//         <li>
//           <a href="#">
//           <Icon icon="heart" accessibilityLabel="Heart" color="darkGray" />
//           Favorites
//           </a>
//         </li>
//         <li>
//           <a href="#">
//           <Icon icon="shopping-bag" accessibilityLabel="shopping list" color="darkGray" />
//           Shopping List
//           </a>
//         </li>
//         <li>
//           <a href="#">
//           <Icon icon="graph-bar" accessibilityLabel="Analytics" color="darkGray" />
//           Brewlytics
//           </a>
//         </li>
//         <li>
//           <a href="#">
//           <Icon icon="terms" accessibilityLabel="Terms" color="darkGray" />
//           Manual</a>
//           </li>
//         <li>
//           <a href="#">
//           <Icon icon="question-mark" accessibilityLabel="About" color="darkGray" />
//           About
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

export default MainNav;
