import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';



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
        <SellingContainer className="py-4 px-5" >
            <Image />
            <Row>
                <HeaderText className="mb-5">Why sell on zDrop?</HeaderText>
                <Row>
                    
                    {sellTextArray?.map(texts => {
                        return (
                            <Col className="px-5 mb-3" lg={3}>
                                <SellHeadText>{texts?.heading}</SellHeadText>
                                <SellParaText>{texts?.details}</SellParaText>
                            </Col>
                        )
                    })
                    }
                    
                </Row>
            </Row>
            <div className="py-4 px-5 ">
                <SellingHeaderText className="my-5">How To Start Selling</SellingHeaderText>
                <Row>
                    {
                        startSellingData?.map((data) => {
                            return (
                                <Col  lg={3} md={6}>
                                    <SellingBox className="pt-5 pl-4 pr-4 my-3">
                                        <IconSvg className="">{data.icon}</IconSvg>
                                        <h6 className="my-2">{data?.title}</h6>
                                        <SellParaText  className="pb-2">{data?.details}</SellParaText>
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
height:320px;
width:320px;
`
const HeaderText = styled.h1`
color:var(--white);
text-align:center;
font: normal normal normal 45px/60px Segoe UI;
text-align:center;
margin: auto;
`

const SellHeadText = styled.h3`
font: normal normal 600 25px/33px Segoe UI;
color:var(--white);
word-wrap: break-word;

`
const SellParaText = styled.p`
color:var(--white);
font-size:0.87rem;
`

const SellingHeaderText = styled.h1`
color:var(--white);
text-align:center;
`
const SellingBox = styled.div`
background-color: var(--primary);
border-radius: 35px;
color:var(--white);
min-height:250px;

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