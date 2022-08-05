import React, { Fragment } from 'react';
import { Content, Footer } from "rbx";
import 'rbx/index.css';

const LayoutFooter = () => {
    return (
        <Fragment>
            <Footer>
                <Content textAlign="centered">
                    <p>
                    <strong>Developed</strong> by <a href="https://www.linkedin.com/in/viniciusbsarmento/">Vinícius Bispo Sarmento</a>.
                        The source code is on my 
                    <a href="https://github.com/engviniciusbs"> Github</a>
                    .
                    </p>
                </Content>
            </Footer>
        </Fragment>
    );
};

export default LayoutFooter