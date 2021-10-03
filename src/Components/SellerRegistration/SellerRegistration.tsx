import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../atoms';
import RegForm from './RegForm/RegForm';

const SellerRegistration: FC = () => {
	return (
		<RegistrationSection className="">
			<Row className="mt-5 align-items-center">
				<Col className="border" md={{ span: 3, offset: 1 }}>
					<div className="">
					<div className="mb-5 ">
						<img src="/images/logo.svg" alt="logo" />
					</div>
					<div>
						<p
							style={{
								fontSize: '2rem',
								fontWeight: 'lighter',
							}}
						>
							A fresh <br /> approach to <br />
							<span
								style={{
									fontWeight: '300' as 'bold',
									fontSize: '4.5rem',
									display: 'inline-block',
									marginTop: '-19px',
								}}
							>
								shopping
							</span>
							<br />
							online powered by <br /> creativity and <br /> innovation.
						</p>
					</div>
					<Row
						style={{
							width: '500px',
						}}
						className="mt-5"
					>
						<Col>
							<Title className="text-left" size="sm" variant="black">
								Policies
							</Title>
							<p className="mb-1">Privacy Policy</p>
							<p>Terms And Conditions</p>
						</Col>
						<Col>
							<Title className="text-left" size="sm" variant="black">
								Need Help?
							</Title>
							<p className="mb-1">Call: 09638 121212</p>
							<p>Mail: sellersupport@zdrop.com.bd</p>
						</Col>
					</Row>
					</div>
				</Col>
				<Col  className="border" md={{ span: 5, offset: 3 }}>
					<FormContainer>
						<RegForm />
					</FormContainer>
				</Col>
			</Row>
		</RegistrationSection>
	);
};

const RegistrationSection = styled.section`
	
	overflow: hidden;
	background-image: url('/images/back-img.svg');
	background-color: #fffffff9;
	background-repeat: no-repeat;
	background-position: fixed;
	border: 2px solid green;
	position: relative;

	::before {
		content: '';
		background-color: #fffffffa;
		position: absolute;
		height: 100%;
		width: 100%;
	}
`;

const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url('/images/form-bg.svg');
	background-repeat: no-repeat;
	background-position: fixed;
	background-size: auto;
	height: 100vh;
`;

export default SellerRegistration;