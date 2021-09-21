import { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const frequentData = [
    {
        title: 'How Do I Get Paid?',
        description: 'All payments are made to the bank account of your choice. All payment details are collected during the onboarding process and you will then get paid as per your sales. As easy as it gets!'
    },
    {
        title: 'What Fees Do I Get Charged?',
        description: 'Listing your products on zDrop is always free. Based on product categories, we do charge a nominal commission on the value of the order placed on zDrop. Reach out to your local Key Account Manager for a specified offer.'
    },

]
const frequentListData = [
    {
        title: 'How Do I Maximise My Earnings?',
        description: 'We rate sellers with the following traits get a Top Seller Badge, good ratings attain more visibility on the platform:',
        lists: [
            {
                list: '• High-Quality and accurate product images'
            },
            {
                list: '• Detailed and Accurate Product names'
            },
            {
                list: '• Detailed Description of Product'
            },
            {
                list: '• Competitive pricing'
            },
            {
                list: '• Accurate product sizing and size guides'
            },
        ],
        extraInfo: [
            {
                title: 'We also highly suggest you to:',
                lists:[
                    {
                        list:'• Join in on any campaign we are having on the site were zDrop will promote you in marketing',
                    },
                    {
                        list:'• Create customized promotions to get more focus on your store',
                    },
                    {
                        list:'• Monitor your performance in the Analytics Dashboard',
                    }
                ],
                description:''
            }

        ]
    },
    {
        title: 'How Do I Build A Good Catalogue?',
        description: 'We always suggest you to focus on the product catalog. Make sure that you upload:',
        lists: [
            {
                list: '• Accept and Ship Orders on Time'
            },
            {
                list: '• Sell Top quality products as rated by customers'
            },
            {
                list: '• Good Packaging'
            },
            {
                list: '• Minimum Cancellations'
            },
        ],
        extraInfo:[

            {
                title:'',
                lists:[],
                description:'Feel free to reach out to your local Key Account Management if you need help with the uploading, or to create better content. We can help you all the way!'
            }
        ]
    },
]

const Frequent: FC = () => {
    return (
        <FrequentContainer className="">
            <Title className="my-5">Frequently Asked Questions</Title>
            <Row className="justify-content-around">
                {
                    frequentData?.map((data) => {

                        return (
                            <Col className="" lg={4}>
                                <div className="">
                                    <SmallTitle className="mb-3">{data?.title}</SmallTitle>
                                    <Description>{data?.description}</Description>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row className="justify-content-around my-5">
                {
                    frequentListData?.map((data) => {
                        const listData = data?.lists;
                        const extraInfos = data?.extraInfo[0];
                        const extraLists = extraInfos?.lists;
                        return (
                            <Col lg={4}>
                                
                                    <SmallTitle className="mb-3">{data?.title}</SmallTitle>
                                    <Description>{data?.description}</Description>
                                    {
                                        listData?.map((data) => {
                                            return (
                                                <Description>{data?.list}</Description>
                                            )
                                        })
                                    }
                                    <ExtraSmallTitle className="mt-4">{extraInfos?.title}</ExtraSmallTitle>
                                    {
                                        extraLists.map((data) =>{
                                            return (
                                                <Description>{data?.list}</Description>
                                            )
                                        })
                                    }
                                    <Description>{extraInfos?.description}</Description>
                                
                            </Col>
                        )
                    })
                }

            </Row>
        </FrequentContainer>
    );
};

export default Frequent;

const FrequentContainer = styled.div`

`
const Title = styled.h1`
    text-align: center;
    font-size: 45px;
    font-weight:normal;
`
const SmallTitle = styled.h1`
    font-size: 25px;
`
const Description = styled.p`
/* margin:0 0 2 0; */

`
const ExtraSmallTitle = styled.h1`
 font-size:14px;
`