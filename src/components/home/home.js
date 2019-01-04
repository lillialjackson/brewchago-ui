import React from 'react';
import './home.css';
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



const Home = (props) => {
  return(
    <div className="home-container">
      <Box display="flex" direction="row" paddingY={2}>
          <div title="Card">
            <Box maxWidth={200} padding={2} column={12}>
              <Card>
                <Link color="darkGray" href="">
                  <Box paddingX={3} paddingY={2}>
                    <Icon icon="add-circle" accessibilityLabel="add-circle" color="darkGray" />
                    <Text align="center" bold>
                      Start A New Brew
                    </Text>
                  </Box>
                </Link>
                <Button color="red" text="Follow" />
              </Card>
            </Box>
          </div>
          <div title="Card">
            <Box maxWidth={200} padding={2} column={12}>
              <Card>
                <Link color="darkGray" href="">
                  <Box paddingX={3} paddingY={2}>
                  <Icon icon="search" accessibilityLabel="Search" color="darkGray" />
                    <Text align="center" bold>
                    Search Old Brews
                    </Text>
                  </Box>
                </Link>
                <Button color="red" text="Follow" />
              </Card>
            </Box>
          </div>
          <div title="Card">
            <Box maxWidth={200} padding={2} column={12}>
              <Card>
                <Link color="darkGray" href="">
                  <Box paddingX={3} paddingY={2}>
                    <Icon icon="heart" accessibilityLabel="Heart" color="darkGray" />
                    <Text align="center" bold>
                    Favorites
                    </Text>
                  </Box>
                </Link>
                <Button color="red" text="Follow" />
              </Card>
            </Box>
          </div>
          <div title="Card">
            <Box maxWidth={200} padding={2} column={12}>
              <Card>
                <Link color="darkGray" href="">
                  <Box paddingX={3} paddingY={2}>
                    <Icon icon="graph-bar" accessibilityLabel="Analytics" color="darkGray" />
                    <Text align="center" bold>
                    Brewlytics
                    </Text>
                  </Box>
                </Link>
                <Button color="red" text="Follow" />
              </Card>
            </Box>
          </div>
        </Box>
      </div>
  );
};

export default Home;
