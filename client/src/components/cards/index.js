import React, { Fragment } from 'react';
import { Content, Icon, Card, Image, Media, Title, Tag } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'rbx/index.css';

const LayoutIndexCard = () => {
    return (
        <Fragment>
            <Card>
                <Card.Image>
                    <Image.Container size="2by3">
                    <Image src="/imgs/cvpicture.png" />
                    </Image.Container>
                </Card.Image>
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Title as="p" size={4}>
                                Vinícius Sarmento
                            </Title>
                            <Tag size="medium" color="dark">
                                <span>
                                    Full Stack Web Developer  
                                </span>
                            </Tag>
                        </Media.Item> 
                    </Media>
                    <Content>
                        <Icon>
                            <FontAwesomeIcon icon={faEnvelope} /><p>
                                contato@viniciusbsarmento.com
                            </p>
                        </Icon>
                    </Content>
                    <Content>
                        <Icon>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/engviniciusbs" target="_blank">
                                engviniciusbs
                            </a>
                        </Icon>
                    </Content>
                </Card.Content>
            </Card>
        </Fragment>
    );
};

export default LayoutIndexCard