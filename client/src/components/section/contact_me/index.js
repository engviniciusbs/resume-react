import React, { Fragment, useState } from 'react';
import axios from "axios"
import { Card, Content, Field, Label, Icon, Control, Input, Textarea, Button, Help } from "rbx";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faExclamationTriangle, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'rbx/index.css';

const LayoutContactMe = () => {
      
    function handleInputChange(event){
        fields[event.target.name] = event.target.value;
        setFields(fields);
        // console.log(fields);
    }

    const[sent, setSent] = useState(false)
    const [fields, setFields] = useState ({
        name: '',
        email: 'hello@',
        message: ''
    });

    const handleSend = async (e) => {
        e.preventDefault();
        console.log(fields);
        setSent(true)
        try {
        await axios.post("http://localhost:3001/send_mail", {
            name: fields.name,
            email: fields.email,
            message: fields.message
        })
        } catch (error) {
        console.log(error)
        }
    }

    return (
        <Fragment>
            <Card>
                <Card.Header>
                    <Card.Header.Title>Contact Me</Card.Header.Title>
                    <Card.Header.Icon as="a">
                    <Icon color="dark">
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </Icon>
                    </Card.Header.Icon>
                </Card.Header>
                <Card.Content>
                    <Content>
                        <form className="contact-form" onSubmit={handleSend}>
                            <Field>
                                <Label>Name</Label>
                                <Control>
                                <Input type="text" placeholder="Text input" name="name" id="name" onChange={handleInputChange}/>
                                </Control>
                            </Field>            

                            <Field>
                                <Label>Email</Label>
                                <Control iconLeft iconRight>
                                <Input
                                    defaultValue="hello@"
                                    placeholder="Email input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleInputChange}
                                />
                                <Icon size="small" align="left">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </Icon>
                                <Icon size="small" align="right">
                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                </Icon>
                                </Control>
                                {/* <Help color="danger">This email is invalid</Help> */}
                            </Field>

                            <Field>
                                <Label>Message</Label>
                                <Control>
                                <Textarea placeholder="Textarea" name="message" id="message" onChange={handleInputChange}/>
                                </Control>
                            </Field>

                            <Field kind="group">
                                <Control>
                                <Button color="dark">Submit</Button>
                                </Control>
                                <Control>
                                <Link to={'/'}>
                                    <Button inverted color="danger">Cancel</Button>
                                </Link>
                                </Control>
                            </Field>
                        </form>
                    </Content>
                </Card.Content>
            </Card>
        </Fragment>
    );
};

export default LayoutContactMe