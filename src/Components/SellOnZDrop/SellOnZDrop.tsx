import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Button, Title } from '../atoms';

const texts = [
    {
        icon: '',
        text: 'Register and List your products for free on zDrop'
    },
    {
        icon: '',
        text: 'Reach out to millions of customers'
    },
    {
        icon: '',
        text: 'Receive online orders and grow your business'
    },
    {
        icon: '',
        text: 'Change the online experience'
    },
]


const Text = styled.p`
    color:var(--white);
    padding:0;
    margin:0 0 5px 0;
    
    `
const CheckIcon = styled.svg`
        display: inline-block;
    `

const SellOnZDrop: FC = () => {
    return (
        <SellSection className="mt-4 py-5 px-2 px-sm-5 px-md-5 px-lg-2 px-xl-5">
            <Row>
                <Col xs={12} md={12} lg={6} className="" >
                    <div className="px-5 d-md-flex flex-md-column d-md-flex justify-content-md-center align-items-md-center d-lg-block d-xl-block">
                        <Title className="title text-lg-left text-xl-left mb-3 font-weight-normal text-center">Sell on zDrop</Title>
                        <div className="my-md-3">
                            {
                                texts.map((s) => {
                                    console.log(s)
                                    return (
                                        <Text>  <CheckIcon className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" width="17" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="rgba(185,255,220,1)" /></CheckIcon> {s?.text}</Text>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={6} className="mt-sm-3 p-0" >
                    <div className="button-box ">
                        <Button variant='black'>Open Your Free Store Now</Button>
                        <Button variant='white'>Log in to Seller Center</Button>
                    </div>
                </Col>
            </Row>
        </SellSection>
    );
};

export default SellOnZDrop;

const SellSection = styled.div`
 background:var(--primary);
 border-radius: 35px  35px 0px 0px;
 
 .button-box{
     height:100%;
     display:flex;
     justify-content:flex-end;
     align-items:center;
     @media only screen and (max-width:991px){
        justify-content:center;
     }
     @media only screen and (max-width:575px){
         flex-direction: column;
         Button:nth-child(1){
             margin-top: 10px;
             margin-bottom:10px;
         }
         Button:nth-child(2){
             margin-left:5px;
         }
     }
    
 }


`