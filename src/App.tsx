import { Container } from "react-bootstrap";
import styled from "styled-components";
import CreateStore from "./Components/CreateStore/CreateStore";
import Frequent from "./Components/Frequent/Frequent";
import Help from "./Components/Help/Help";
import Selling from "./Components/Selling/Selling";
import SellOnZDrop from "./Components/SellOnZDrop/SellOnZDrop";
import Tools from "./Components/Tools/Tools";

function App() {
  return (
    <AppContainer>
      <Container className="py-5">
        <SellOnZDrop/>
        <Selling/>
        <Tools/>
        <CreateStore/>
        <Frequent/>
        <Help/>
      </Container>
    </AppContainer>
  );
}

export default App;

const AppContainer =styled.div`

@media only screen and (max-width: 421px){
    .title{
             font-size: 1.8rem;
         }
     }
     @media only screen and (max-width:349px){
        .button-box Button{
            font-size: .7rem;
        }
    }
`
