import React, { Fragment } from 'react';
import { Navbar, Button, Field, Control, Icon } from "rbx";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'rbx/index.css';

const LayoutNavbar = () => {
    return (
        <Fragment>
        <Navbar transparent>
          <Link to={'/'}>
          <Navbar.Brand>
            <Navbar.Item>
              <img
                src="./imgs/logo.png"
                alt="My logo"
                width="112"
                height="28"
              />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          </Link>
          <Navbar.Menu>
            <Navbar.Segment align="start">
            <Link to={'/'}>
              <Navbar.Item >Home</Navbar.Item>
            </Link>
            <Link to={'/contact'}>
              <Navbar.Item >Contact</Navbar.Item>
            </Link>
            </Navbar.Segment>
            <Navbar.Segment align="end">
              <Navbar.Item as="div">
                <Field kind="group">
                  <Control>
                    <Button as="a" color="light" href="https://www.linkedin.com/in/viniciusbsarmento/" target="_blank">
                      <Icon>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Icon>
                      <span>LinkedIn</span>
                    </Button>
                  </Control>
                  <Control>
                    <Button as="a" color="dark" href="#">
                      <Icon>
                        <FontAwesomeIcon icon={faDownload} />
                      </Icon>
                      <span>Download CV</span>
                    </Button>
                  </Control>
                </Field>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>
      </Fragment>
    );
};

export default LayoutNavbar