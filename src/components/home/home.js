import React from 'react';
import './home.css';
import {
  Avatar,
  Box,
  Button,
  Card,
  Column,
  Divider,
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
      <Box display="flex" direction="column" paddingY={2}>
          <div title="Card">
            <Box padding={2} column={12}>
              <Card>
                <Link color="darkGray" href="">
                  <Box paddingX={3} paddingY={2}>
                    <Icon icon="add-circle" accessibilityLabel="add-circle" color="orchid" size={24} inline = {true} />
                    <Text align="left" inline = {true} size= "lg" bold>
                      Start New
                    </Text>
                    <Text align="left" >
                      Fill out a brew form to log and track a new brew.
                    </Text>
                  </Box>
                </Link>
              </Card>
            </Box>
          </div>
          <Divider />
          <div title="Card">
            <Box padding={2} column={12}>
              <Card>
                <Link color="darkGray" href="">
                  <Box paddingX={3} paddingY={2} >
                  <Icon icon="search" accessibilityLabel="Search" color="orchid" size={24} inline = {true} />
                    <Text align="left" inline = {true} size= "lg" bold>
                    Search
                    </Text>
                    <Text align="left" >
                      Search all saved brews.
                    </Text>
                  </Box>
                </Link>
              </Card>
            </Box>
          </div>
          <Divider />
          <div title="Card">
            <Box padding={2} column={12}>
              <Card>
                <Link color="darkGray" href="">
                  <Box paddingX={3} paddingY={2}>
                    <Icon icon="heart" accessibilityLabel="Heart" color="orchid" size={24} inline = {true} />
                    <Text align="left" inline = {true} size= "lg" bold>
                    Favorites
                    </Text>
                    <Text align="left" >
                      Keep your favorite batches a click away.
                    </Text>
                  </Box>
                </Link>
              </Card>
            </Box>
          </div>
          <Divider />
          <div title="Card">
            <Box padding={2} column={12} wrap = {true}>
              <Card>
                <Link color="darkGray" href="">
                  <Box paddingX={3} paddingY={2}>
                    <Icon icon="clock" accessibilityLabel="current" color="orchid" size={24} inline = {true} />
                    <Text align="left" inline = {true} size= "lg" bold>
                    Current
                    </Text>
                    <Text align="left" >
                      Access all brews currently fermenting.
                    </Text>
                  </Box>
                </Link>
              </Card>
            </Box>
          </div>
        </Box>
      </div>
  );
};

export default Home;
