import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Button, Description, Title } from '../atoms';

const storeData = {
	title: 'Create your free store in 4 easy steps',
	description:
		'Register today and keep expanding you online business with us. Your success is inevitable here with zDrop. What are you waiting for?',
};

const CreateStore: FC = () => {
	return (
		<StoreContainer className="mt-3 mb-5 px-xl-5 store-container">
			<div className="py-5 px-4 px-sm-5">
				<Row>
					<Col xl={3} lg={4}>
						<div className="">
							<Title className="mb-4 text-sm-left md-title" size="md">
								{storeData?.title}
							</Title>
							<Description className="px-sm-5 px-md-0 text-sm-left" variant='white'>{storeData?.description}</Description>
						</div>
					</Col>
					<Col xl={9} lg={8}>
						<div className="pt-sm-4 h-100  button-box d-flex justify-content-center justify-content-lg-end  justify-content-sm-center flex-wrap align-items-center">
							<Button className="" variant="dark">
								Open Your Free Store Now
							</Button>
							<Button className="">Login to Seller Center</Button>
						</div>
					</Col>
				</Row>
			</div>
		</StoreContainer>
	);
};

export default CreateStore;

const StoreContainer = styled.div`
	background-color: black;
	color: var(--white);
	border-radius: 35px;
	
`;

