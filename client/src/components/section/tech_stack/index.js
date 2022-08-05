import React, { Fragment } from 'react';
import { Content, Card, Icon, Tag } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'rbx/index.css';

const LayoutTechStack = () => {
    return (
        <Fragment>
            <Card>
                <Card.Header>
                    <Card.Header.Title>Tech Stack</Card.Header.Title>
                    <Card.Header.Icon as="a">
                    <Icon color="dark">
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </Icon>
                    </Card.Header.Icon>
                </Card.Header>
                <Card.Content>
                    <Content>
                        <Tag color="dark">
                            <span>
                                OOP  
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                HTTP  
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                GIT  
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                HTML5 CSS3 Bootstrap Bulma  
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                SASS SCSS 
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                Javascript
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                Typescript  
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                React.js 
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                Node.js Express  
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                jQuery AJAX REST 
                            </span>
                        </Tag>
                        <Tag color="dark">
                            <span>
                                PHP Apache MySQL  
                            </span>
                        </Tag>
                    </Content>
                </Card.Content>
            </Card>
        </Fragment>
    );
};

export default LayoutTechStack