import React, { Fragment } from 'react';
import { Container, Column, Section } from "rbx";
import LayoutIndexCard from '../cards';
import LayoutAboutMe from './about_me/index'
import LayoutExperience from './experience';
import LayoutEducation from './education';
import LayoutTechStack from './tech_stack';
import LayoutLanguages from './languages';
import 'rbx/index.css';

const LayoutColumns = () => {
    return (
        <Fragment>
            <Section>
                <Container>
                    <Column.Group>
                        <Column>
                            <LayoutIndexCard/>
                        </Column>
                        <Column size={9}>
                            <LayoutAboutMe/>
                            <LayoutExperience/>
                            <LayoutEducation/>
                            <LayoutTechStack/>
                            <LayoutLanguages/>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    );
};

export default LayoutColumns