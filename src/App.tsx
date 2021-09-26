import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import CreateStore from './Components/CreateStore/CreateStore';
import Frequent from './Components/Frequent/Frequent';
import Help from './Components/Help/Help';
import Selling from './Components/Selling/Selling';
import SellOnZDrop from './Components/SellOnZDrop/SellOnZDrop';
import Tools from './Components/Tools/Tools';

function App() {
	return (
		<AppContainer>
			<Container>
				<SellOnZDrop />
				<Selling />
				<Tools />
				<CreateStore />
				<Frequent />
				<Help />
			</Container>
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div`
	@media only screen and (max-width: 425px) {
		.title {
			font-size: 1.6rem !important;
		}
		.md-title {
			font-size: 1.2rem !important;
		}
		.description {
			text-align: justify;
		}
	}
	@media only screen and (max-width: 425px) {
		.button-box Button {
			font-size: 0.7rem;
		}
	}
	@media only screen and (max-width: 768px) {
		.title {
			font-size: 1.7rem;
		}
		.md-title {
			font-size: 1.3rem;
		}
	}
	@media only screen and (max-width: 1024px) {
		.title {
			font-size: 1.8rem !important;
		}
		.md-title {
			font-size: 1.4rem !important;
		}
	}
`;
