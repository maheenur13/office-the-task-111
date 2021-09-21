import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const toolsData = [
    {
        title: 'Easy Order And Inventory Management',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        title: 'Analytics Dashboard',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        title: 'Marketing Service',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    }
]

const Tools: FC = () => {



    return (
        <ToolsBox className="px-5 my-5">
            <Title className="my-4">Powerful Tools To Grow Your Business</Title>
            <Row>

                {toolsData?.map((data) => {
                    return (
                        <Col lg={4}>
                            <div className="p-5 ">
                                <SmallTitle className="mb-3" >{data.title}</SmallTitle>
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

const Title = styled.h1`
    text-align: center;
    font-size: 2.8rem;
    font-weight: normal;
`
const ToolsBox = styled.div`

`
const SmallTitle = styled.h1`
/* text-align: center; */
font-weight: 600;
    font-size: 1.5rem;
`
const Description = styled.p`
font-size:0.87rem;
`