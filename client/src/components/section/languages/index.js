import React, { Fragment } from 'react';
import { Content, Card, Icon, Column, Title, Progress } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'rbx/index.css';

const LayoutLanguages = () => {
    return (
        <Fragment>
            <Card>
                <Card.Header>
                    <Card.Header.Title>Languages</Card.Header.Title>
                    <Card.Header.Icon as="a">
                    <Icon color="dark">
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </Icon>
                    </Card.Header.Icon>
                </Card.Header>
                <Card.Content>
                    <Content>
                        <Column.Group>
                            <Column>
                                <Title size={5}>
                                    Portuguese
                                </Title>
                                <Progress value={100} max={100} size="small" color="dark"/>
                            </Column>
                            <Column>
                                <Title size={5}>
                                    English
                                </Title>
                                <Progress value={90} max={100} size="small" color="dark"/>
                            </Column>
                            <Column>
                                <Title size={5}>
                                    Spanish
                                </Title>
                                <Progress value={60} max={100} size="small" color="dark"/>
                            </Column>
                        </Column.Group>
                    </Content>
                </Card.Content>
            </Card>
        </Fragment>
    );
};

export default LayoutLanguages