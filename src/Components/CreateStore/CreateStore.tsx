import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Button, Title } from '../atoms';

const storeData =
{
    title: 'Create your free store in 4 easy steps',
    description: 'Register today and keep expanding you online business with us. Your success is inevitable here with zDrop. What are you waiting for?',
}

const CreateStore: FC = () => {
    return (
        <StoreContainer className="mt-3 mb-5">
            <div className="p-5 px-5">
                <Row>
                    <Col xl={3} lg={4}>
                        <div className="ml-5">
                            <Title className="mb-4 text-lg-left " size="md">{storeData?.title}</Title>
                            <Description className="px-sm-5 px-md-0">{storeData?.description}</Description>
                        </div>
                    </Col>
                    <Col xl={9} lg={8} >
                        <div className="pt-md-4 h-100 pt-sm-4 d-flex justify-content-xl-end justify-content-sm-center align-items-center" >
                            <Button className="" variant="dark" >Open Your Free Store Now</Button>
                            <Button className="" >Login to Seller Center</Button>
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
    color:var(--white);
    border-radius: 35px;
`

const Description = styled.p`
font-size:.8rem;
`
const ButtonContainer = styled.div`
  
`