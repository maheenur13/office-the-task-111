import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Demo = () => {
	return (
        
		<MainSecion className="">
			<Row className="m-0 w-100  justify-content-center section">
				<Col md={{span:4 , offset: 1}} className="border">
                </Col>
				<Col className="border">
					<SecondBackImage></SecondBackImage>
				</Col>
			</Row>
		</MainSecion>
	);
};

const MainSecion = styled.div`

 .section{
    position: relative;
    ::before {
        content: '';
        background-image: url('/images/back-img.svg');
        opacity:0.03;
        background-size:100% 100%;
        position: absolute;
        background-position: -150px;
        height: 100%;
        width: 100%;
    }
}
`;

const SecondBackImage = styled.div`
	background-image: url('/images/form-bg.svg');
	height: 100vh;
    background-position: 0 100%;
	background-size: 100% 94vh;
	background-repeat: no-repeat;
	z-index: 2;
`;
export default Demo;
