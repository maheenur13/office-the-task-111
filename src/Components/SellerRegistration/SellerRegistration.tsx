import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../atoms';
import RegForm from './RegForm/RegForm';

const SellerRegistration: FC = () => {
	return (
		<RegistrationSection>
			<Row className="mt-5 align-items-center w-100">
				<Col className="pl-4" md={{ span: 3, offset: 1 }}>
					<div className="p-2">
						<div className="mb-4 ">
							<img style={{ width: '8rem' }} src="/images/logo.svg" alt="logo" />
						</div>
						<div>
							<p
								style={{
									fontSize: '1.7rem',
									fontWeight: 'lighter',
								}}
							>
								A fresh <br/> approach to<br/>
								<span
									style={{
										padding: '0',
										fontWeight: '300' as 'bold',
										fontSize: '4.3rem',
										display: 'inline-block',
										marginTop: '-19px',
									}}
								>
									shopping
								</span>
								<br/>
								online powered by <br /> creativity and <br /> innovation.
							</p>
						</div>
						<div
							className="mt-5 mb-5 d-flex justify-content-between align-items-center"
						>
							<div>
								<Title className="text-left" size="sm" variant="black">
									Policies
								</Title>
								<p className="mb-1">Privacy Policy</p>
								<p>Terms And Conditions</p>
							</div>
							<div>
								<Title className="text-left" size="sm" variant="black">
									Need Help?
								</Title>
								<p className="mb-1">Call: 09638 121212</p>
								<p>Mail: sellersupport@zdrop.com.bd</p>
							</div>
						</div>
					</div>
				</Col>
				<Col md={{ span: 5, offset: 2 }}>
					<FormContainer>
						<RegForm />
					</FormContainer>
				</Col>
			</Row>
		</RegistrationSection>
	);
};

const RegistrationSection = styled.section`
	/* overflow: hidden; */
	background-image: url('/images/back-img.svg');
	background-repeat: no-repeat;
	margin-left: 100px;
	position: relative;
	/* height: 100vh; */

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
	background-size: 100% 92%;
	background-position: 50%;
	height: 94vh;
`;

export default SellerRegistration;
