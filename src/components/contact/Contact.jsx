import React from 'react';
import { Divider } from 'antd';
import {Button, Form, Input} from 'antd';
import './contact.css'

export default function Contact() {
    const {TextArea} = Input;
  return (
    <div>
        <Divider id='contact'><h3>contact me</h3></Divider>

        <div id='contact-container'>

        <p>You can reach me on <a href="https://www.linkedin.com/in/luana-buca/">linkedIn</a> or see the code behind my projects on my <a href="#">GitHub</a> profile.</p>
        <p>You can also sent me an email by using the form below. Whichever you prefer.</p>

        <Form
         labelCol={{
            span: 7,
         }}
         wrapperCol={{
            span: 10,
         }}
         layout='horizontal'
        >
            <Form.Item label={<label style={{color: '#ebe2db'}}>Name: </label>}>
                <Input/>
            </Form.Item>

            <Form.Item label={<label style={{color: '#ebe2db'}}>Email: </label>}>
                <Input/>
            </Form.Item>

            <Form.Item label={<label style={{color: '#ebe2db'}}>Message: </label>}>
                <TextArea rows={7}/>
            </Form.Item>

            <Form.Item>
                <Button id='send-btn'>Send</Button>
            </Form.Item>
        </Form>

        </div>

    </div>
  )
}