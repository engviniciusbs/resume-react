import React, { Fragment } from 'react';
import { Content, Card, Icon, Title, Column, Image, Tag } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCalendar } from '@fortawesome/free-solid-svg-icons';
import 'rbx/index.css';

const LayoutExperience = () => {
    return (
        <Fragment>
            <Card>
                <Card.Header>
                    <Card.Header.Title>Experience</Card.Header.Title>
                    <Card.Header.Icon as="a">
                    <Icon color="dark">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Icon>
                    </Card.Header.Icon>
                </Card.Header>
                <Card.Content>
                    <Content>
                        <Column.Group>
                            <Column>
                                <Image.Container size={48}>
                                    <Image rounded src="./imgs/sevensilogo.png" />
                                </Image.Container>
                            </Column>
                            <Column size={9}>
                                <Title size={6}>
                                    Junior Software Engineer
                                    <Tag size="small" color="dark">
                                        <a href="https://sevensi.com.br/" target="_blank">
                                            <span>
                                                Seven SI 
                                            </span>
                                        </a>
                                    </Tag>
                                </Title>
                                <Title subtitle size={7}>
                                    <Icon><FontAwesomeIcon icon={faCalendar} /></Icon>2021 - Currently
                                </Title>
                                <Content>
                                    <ul>
                                        <li>Designed, developed, and modified 100+ landing pages and e-commerces.</li>
                                        <li>As a part of 4-engineer unit developed the Mercado Livre Plugin optimized for e-commerces.</li>
                                        <li>Developed a clean PHP back-end with MySQL and reduced page loading time by 50%.</li>
                                        <li>Worked with Scrum / Kanban.</li>
                                        <li>Technology used: Javascript, Typescript, React.js, CSS, SCSS, PHP, MySQL, GIT</li>
                                    </ul>
                                </Content>
                            </Column>
                        </Column.Group>
                    </Content>
                    <hr />
                    <Content>
                        <Column.Group>
                            <Column>
                                <Image.Container size={48}>
                                    <Image rounded src="./imgs/jeolsilogo.png" />
                                </Image.Container>
                            </Column>
                            <Column size={9}>
                                    <Title size={6}>
                                        Full Stack Web Developer
                                        <Tag size="small" color="dark">
                                            <a href="https://jeolsi.com/" target="_blank">
                                                <span>
                                                    Jeolsi 
                                                </span>
                                            </a>
                                        </Tag>
                                    </Title>
                                    <Title subtitle size={7}>
                                        <Icon><FontAwesomeIcon icon={faCalendar} /></Icon>2021 - 2021
                                    </Title>
                                <Content>
                                    <ul>
                                        <li>Created and maintained 20+ web applications for numerous national and foreign clients.</li>
                                        <li>Developed solutions for a better user experience in e-commerces.</li>
                                        <li>Responsible for DNS management and migrations.</li>
                                        <li>Helped evolve back-end stack.</li>
                                        <li>Technology used: Javascript, React.js, Liquid, CSS, SCSS, WordPress, PHP, MySQL, MariaDB, GIT</li>
                                    </ul>
                                </Content>
                            </Column>
                        </Column.Group>
                    </Content>
                </Card.Content>
            </Card>
        </Fragment>
    );
};

export default LayoutExperience