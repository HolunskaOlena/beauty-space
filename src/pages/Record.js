import React, { Component } from 'react'
import { Form, FormControl, Container, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', textarea: '', checkbox: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <Container style={{ maxWidth: '500px', marginTop: '100px' }}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <Form.Group id="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <FormControl type="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email} />
                    </Form.Group>

                    <Form.Group id="formBasicTextarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.handleChange} value={this.state.textarea} />
                    </Form.Group>

                    <Form.Group id="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" onChange={this.handleChange} value={this.state.checkbox} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </Container>
        )
    }

    handleChange(event) {
        this.setState({ textarea: event.target.value, checkbox: event.target.value, email: event.target.value })
    }

    handleSubmit(event) {
        const templateId = 'template_id';

        this.sendFeedback(templateId, { message_html: this.state.textarea, choice: this.state.checkbox, reply_to: this.state.email })
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
}
