import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../atoms';

const toolsData = [
    {
        title: 'Easy Order And Inventory Management',
        description: "Add products on Seller Centre one-by-one in our easy to use dashboard, or bulk upload with Excel. Easily manage orders, add multiple warehouses, edit prices, stock and product details in your Seller Centre account.",
    },
    {
        title: 'Analytics Dashboard',
        description: "Improve sales by monitoring your store's performance using the analytics dashboard on Seller Centre. Get detailed analysis of top selling products, new orders, customer visits, returns and cancellations.",
    },
    {
        title: 'Marketing Service',
        description: "Access a range of services including cataloging, photoshoots, graphic design and social media marketing to promote your store on zDrop.",
    }
]

const Tools: FC = () => {



    return (
        <ToolsBox className="px-5 my-5">
            <Title className="my-4 font-weight-normal" variant="black">Powerful Tools To Grow Your Business</Title>
            <Row>
                {toolsData?.map((data) => {
                    return (
                        <Col lg={4}>
                            <div className="p-5 p-md-3 ">
                                <Title className="mb-3 text-left" variant="black" size="md" >{data.title}</Title>
                                <Description>{data.description}</Description>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </ToolsBox>
    );
};

export default Tools;

const ToolsBox = styled.div`

`

const Description = styled.p`
font-size:0.87rem;
`