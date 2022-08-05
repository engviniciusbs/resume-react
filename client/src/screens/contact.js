import React, { Fragment } from 'react';
import { Container, Column, Section } from "rbx";
import LayoutNavbar from '../components/navbar/index';
import LayoutFooter from '../components/footer/index';
import LayoutIndexCard from '../components/cards';
import LayoutContactMe from '../components/section/contact_me';
import 'rbx/index.css';

const ContactScreen = () => {
    return (
        <Fragment>
            <LayoutNavbar/>
            <Section>
                <Container>
                    <Column.Group>
                        <Column>
                            <LayoutIndexCard/>
                        </Column>
                        <Column size={9}>
                            <LayoutContactMe/>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
            <LayoutFooter/>
        </Fragment>
    );
};

export default ContactScreen