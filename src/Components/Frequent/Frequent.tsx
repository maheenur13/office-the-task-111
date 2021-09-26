import { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Description, Title } from '../atoms';
import { frequentData, frequentListData } from './frequentData';

const Frequent: FC = () => {
	return (
		<FrequentContainer className="py-lg-5 px-3 px-sm-0 frequent-container">
			<Title className="title mb-5 font-weight-normal" variant="black">
				Frequently Asked Questions
			</Title>
			<Row className="justify-content-around">
				{frequentData?.map((data) => {
					return (
						<Col lg={4}>
							<div className="mb-5 px-sm-5 px-lg-0">
								<Title className="mb-3 mb-sm-2  text-left md-title" variant="black" size="md">
									{data?.title}
								</Title>
								<Description className="mb-md-3">
									{data?.description}
								</Description>
							</div>
						</Col>
					);
				})}
			</Row>
			<Row className="justify-content-around">
				{frequentListData?.map((data) => {
					const listData = data?.lists;
					const extraInfos = data?.extraInfo[0];
					const extraLists = extraInfos?.lists;
					return (
						<Col lg={4}>
							<div className="mb-5 px-sm-5 px-lg-0">
								<Title className="mt-3 mt-sm-0 text-left md-title" variant="black" size="md">
									{data?.title}
								</Title>
								<Description className=" px-sm-0 px-md-2 px-lg-2 px-xl-2 description">
									{data?.description}
								</Description>

								{listData?.map((data) => {
									return <Description className=" px-md-0 px-lg-0 px-xl-0">{data?.list}</Description>;
								})}
								<ExtraSmallTitle className=" px-md-0 px-lg-0 px-xl-0 mt-3 mt-sm-0">
									{extraInfos?.title}
								</ExtraSmallTitle>
								{extraLists.map((data) => {
									return <Description className=" px-md-0 px-lg-0 px-xl-0">{data?.list}</Description>;
								})}
								<Description className=" px-md-0 px-lg-0 px-xl-0">
									{extraInfos?.description}
								</Description>
							</div>
						</Col>
					);
				})}
			</Row>
		</FrequentContainer>
	);
};

export default Frequent;

const FrequentContainer = styled.div``;
const ExtraSmallTitle = styled.h1`
	font-size: 14px;
`;
