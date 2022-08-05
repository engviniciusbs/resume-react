import React, { Fragment } from 'react';
import { Content, Card, Icon, Title } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'rbx/index.css';

const LayoutEducation = () => {
    return (
        <Fragment>
            <Card>
                <Card.Header>
                    <Card.Header.Title>Education</Card.Header.Title>
                    <Card.Header.Icon as="a">
                    <Icon color="dark">
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </Icon>
                    </Card.Header.Icon>
                </Card.Header>
                <Card.Content>
                    <Content>
                        <Title size={5}>
                            Bachelor in Civil Engineering, FMN (Campina Grande - PB, Brazil)
                        </Title>
                        <Title subtitle size={6}>
                            2016-2020
                        </Title>
                        <p>Additional Note: Student mentor for Calculus I</p>
                    </Content>
                    <hr />
                    <Content>
                        <Title size={5}>
                            Exchange program, The Burlington School of English (London, UK)
                        </Title>
                        <Title subtitle size={6}>
                            2018-2019
                        </Title>
                        <p>English Level: C1</p>
                    </Content>
                </Card.Content>
            </Card>
        </Fragment>
    );
};

export default LayoutEducation