import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Description, Title } from '../atoms';
import { sellTextArray, startSellingData } from './sellingData';

const Selling: FC = () => {
	return (
		<SellingContainer className=" py-4 px-md-5">
			<Image className="d-block w-auto" />
			<div className="px-5">
				<Row>
					<Title className="title mb-3 mb-sm-5 mx-auto font-weight-normal">Why sell on zDrop?</Title>
					<Row>
						{sellTextArray?.map((texts) => {
							return (
								<Col lg={6} xl={3} className="">
									<div className=" mr-2 mb-3 px-sm-4">
										<Title className="text-left md-title" size="md">
											{texts?.heading}
										</Title>
										<Description className="description text-sm-left" variant='white'>{texts?.details}</Description>
									</div>
								</Col>
							);
						})}
					</Row>
				</Row>
			</div>
			<div className="py-2 px-md-5">
				<Title className="title my-4 mx-auto text-center font-weight-normal">How To Start Selling</Title>
				<Row className="w-100 m-auto card-box ">
					{startSellingData?.map((data) => {
						return (
							<Col lg={6} md={6} sm={6} xs={6} xl={3} className="p-1 px-sm-3 sell-card">
								<SellingBox className="pt-5 px-4 my-3 mx-auto ">
									<IconSvg>{data.icon}</IconSvg>
									<Title className="my-2 text-left card-title" size="sm">
										{data?.title}
									</Title>
									<Description className="text-sm-left" variant='white'>{data?.details}</Description>
								</SellingBox>
							</Col>
						);
					})}
				</Row>
			</div>
		</SellingContainer>
	);
};

export default Selling;

const SellingContainer = styled.div`
	background-color: var(--black);
	border-radius: 0px 0px 35px 35px;
	@media only screen and (max-width: 425px) {
		.md-title {
			margin-top: 15px;
		}
	}
	@media only screen and (max-width: 446px) {
		.card-box {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.sell-card {
			min-width: 100% !important;
		}
	}
`;
const Image = styled.img`
	display: block;
	margin: auto;
	max-height: 320px;
	max-width: 320px;
`;

const SellingBox = styled.div`
	background-color: var(--primary);
	border-radius: 35px;
	color: var(--white);
	height: 245px;
	max-width: 255px;
	@media only screen and (min-width: 447px) {
		min-height: 280px;
	}
`;
const IconSvg = styled.h2`
	display: inline-block;
	border: 1px solid;
	background-color: var(--white);
	color: var(--primary);
	width: 35px;
	height: 35px;
	text-align: center;
	font-size: 1.5rem;
	border-radius: 35px;
`;
