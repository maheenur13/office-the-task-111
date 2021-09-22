import {FC} from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Button, Title } from '../atoms';

const helpSectionData = [
    {
        title:'Need more help? Contact us for any help',
        email:'sellersupport@zdrop.com.bd',
        phone:'09638121212',
        date:'Monday- Friday: 9AM- 6PM',
        adress:'Bashati Dream, Plot- 03, Road- 20, Level-05 (C/5), Gulshan- 1, Dhaka- 1212, Bangladesh'
    },
]


const Help:FC = () => {
    return (
        <HelpContainer>
            <div className="py-5 px-3 px-sm-5 px-md-5">
                <Row className="justify-content-around">
                    <Col md={12} lg={5}>
                        {
                            helpSectionData?.map((data) => {
                                return (
                                    <div>
                                        <Title className="mb-3 text-left" size='md'>{data?.title}</Title>
                                        <Description>Mail: {data?.email}</Description>
                                        <Description>Call: {data?.phone}</Description>
                                        <Description>{data?.date}</Description>
                                        <Description className="mt-3">{data?.adress}</Description>
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col md={12} lg={4} className="">
                        <div className="button-box pt-md-5 pt-sm-4">
                        <Button className="mx-auto"variant="white">Call Seller Support Center</Button>
                        </div>
                    </Col>

                </Row>
            </div>
        </HelpContainer>
    );
};

export default Help;



const Description = styled.p`

`

const HelpContainer = styled.div`
    background-color:black;
    color:var(--white);
    border-radius: 35px;

    .button-box{
        display:flex;
        height:100%;
        justify-content:flex-end;
        align-items:center;
    }
`