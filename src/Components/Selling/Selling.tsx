import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../atoms';



const sellTextArray = [
    {
        icon: '',
        heading: 'Low Commissions',
        details: 'Open a zDrop Seller Centre account and list your products for free on zDrop. Sell to a vast customer base for a small commission on orders.'
    },
    {
        icon: '',
        heading: 'Business Growth',
        details: 'Create your online store and reach millions of buyers. Launch discounts and promotions to grow your reach.'
    },
    {
        icon: '',
        heading: 'Large Assortments of Products',
        details: 'Sell across multiple categories including electronics, fashion, lifestyle, beauty, home goods, and more.'
    },
    {
        icon: '',
        heading: 'Secure & Timely Payments',
        details: "Enjoy reliable, secure and timely payments. Gain your buyer's trust with 100% payment protection."
    },
]

const startSellingData = [
    {
        icon: '1',
        title: 'Simple Registration',
        details: 'Add contact  details to create a free account on zDrop Seller Centre. Provide basic business details to get verified.'
    },
    {
        icon: '2',
        title: 'Add Products',
        details: 'Add products on Seller Centre one-by-one in our easy to use dashboard, or bulk upload with Excel.'
    },
    {
        icon: '3',
        title: 'Manage Orders',
        details: 'Keep track of all your orders in one place. Enjoy easy and reliable delivery provided by our shipping partners.'
    },
    {
        icon: '4',
        title: 'Receive Payments',
        details: 'Receive payments directly to your account.'
    },
]
const Selling: FC = () => {

    return (
        <SellingContainer className="px-sm-2 py-4  px-md-5  px-xl-5 " >
            <Image className="d-block w-auto" />
            <div className="px-5">
                <Row>
                    <Title className="title mb-5 mx-auto font-weight-normal">Why sell on zDrop?</Title>
                    <Row>
                        {sellTextArray?.map(texts => {
                            return (
                                <Col lg={6} xl={3} className="">
                                    <div className=" mr-2 mb-3">
                                        <Title className="text-left md-title" size='md'>{texts?.heading}</Title>
                                        <SellParaText className="">{texts?.details}</SellParaText>
                                    </div>
                                </Col>
                            )
                        })
                        }
                    </Row>
                </Row>
            </div>
            <div className="py-2 px-lg-5 px-xl-5 px-md-5 px-sm-0">
                <Title className="title my-5 mx-auto text-center font-weight-normal">How To Start Selling</Title>
                <Row className="">
                    {
                        startSellingData?.map((data) => {
                            return (
                                <Col md={6} lg={6} xl={3}>
                                    <SellingBox className="pt-5 px-4 my-3 mx-auto">
                                        <IconSvg>{data.icon}</IconSvg>
                                        <Title className="my-2 text-left" size="sm">{data?.title}</Title>
                                        <SellParaText >{data?.details}</SellParaText>
                                    </SellingBox>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </SellingContainer>
    );
};

export default Selling;

const SellingContainer = styled.div`
background-color: var(--black);
border-radius:0px 0px 35px 35px;
`
const Image = styled.img`
display: block;
 margin: auto;
background: transparent  0% 0% no-repeat padding-box;
max-height:320px;
max-width:320px;
`
const SellParaText = styled.p`
color:var(--white);
font-size:0.87rem;
`
const SellingBox = styled.div`
background-color: var(--primary);
border-radius: 35px;
color:var(--white);
height:245px;
max-width:255px;


`
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
`