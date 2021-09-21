import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Button } from '../atoms';

const storeData =
{
    title: 'Create your free store in 4 easy steps',
    description: 'Register today and keep expanding you online business with us. Your success is inevitable here with zDrop. What are you waiting for?',
}

const CreateStore: FC = () => {
    return (
        <StoreContainer className="mt-3 mb-5">
            <div className=" p-5 px-5 ">
                <Row>
                    <Col lg={3}>
                        <div className="ml-5">
                        <Title className="mb-4">{storeData?.title}</Title>
                        <Description>{storeData?.description}</Description>
                        </div>
                    </Col>
                    <Col lg={9} >
                        <ButtonContainer className="">
                            <Button  variant="dark" >Open Your Free Store Now</Button>
                            <Button >Login to Seller Center</Button>
                        </ButtonContainer>
                    </Col>

                </Row>
            </div>
        </StoreContainer>
    );
};

export default CreateStore;

const StoreContainer = styled.div`
    background-color: black;
    color:var(--white);
    border-radius: 35px;
`
const Title = styled.h1`
 font-size:1.5rem;
`
const Description = styled.p`
font-size:.8rem;
`
// const Button = styled.button`
//  border: none;
//  border-radius: 35px;
//  font-size:.8rem;
//  font-weight: 600;
// `
const ButtonContainer = styled.div`
   height:100%;
   display: flex;
   justify-content: end;
   align-items: center;
`