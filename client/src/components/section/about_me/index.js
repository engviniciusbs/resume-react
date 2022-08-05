import React, { Fragment } from 'react';
import { Content, Card, Icon } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'rbx/index.css';

const LayoutAboutMe = () => {
    return (
        <Fragment>
            <Card>
                <Card.Header>
                    <Card.Header.Title>About Me</Card.Header.Title>
                    <Card.Header.Icon as="a">
                    <Icon color="dark">
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </Icon>
                    </Card.Header.Icon>
                </Card.Header>
                <Card.Content>
                    <Content>
                        <p>Full Stack Developer with almost 2 years of experience in CSS and JS Frameworks building responsive web applications in the e-commerce industry. Degree in Civil Engineering from FMN-PB, Brazil. Acquired specific engineering traits, such as management and planning.</p>
                    </Content>
                </Card.Content>
            </Card>
        </Fragment>
    );
};

export default LayoutAboutMe