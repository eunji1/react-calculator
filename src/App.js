import React from "react";
import DisplayContainer from "./Components/Container/DisplayContainer";
import ControlContainer from "./Components/Container/ControlContainer";
import Container from "./Components/ContainerPresent";

const App = () => {
  return (
    <Container>
      <DisplayContainer />
      <ControlContainer />
    </Container>
  );
};

export default App;
