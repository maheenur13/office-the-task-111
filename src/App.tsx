import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import CreateStore from './Components/CreateStore/CreateStore';
import Frequent from './Components/Frequent/Frequent';
import Help from './Components/Help/Help';
import Selling from './Components/Selling/Selling';
import SellOnZDrop from './Components/SellOnZDrop/SellOnZDrop';
import Tools from './Components/Tools/Tools';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SellerRegistration from './Components/SellerRegistration/SellerRegistration';

function App() {
	return (
		<AppContainer>
			<Router>
				<Switch>
					<Route exact path="/">
						<Container>
							<SellOnZDrop />
							<Selling />
							<Tools />
							<CreateStore />
							<Frequent />
							<Help />
						</Container>
					</Route>
					<Route exact path="/reg">
						<SellerRegistration />
					</Route>
				</Switch>
			</Router>
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div``;
