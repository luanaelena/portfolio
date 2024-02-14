import React from 'react';
// import { Divider } from 'antd';
import {Card, Space, Divider} from 'antd';
import './projects.css'

export default function Projects() {
    const {Meta} = Card;
  return (
    <div>
        <Divider id='projects'><h3>my work</h3></Divider>

        <div id='projects-container'>
        <Space direction='horizontal' size={30}>
        <a href='https://www.google.com/' target='blank'>
        <Card
         style={{
            width: 300,
         }}
         cover={
            <img src='https://placeholder.pics/svg/100x100' alt='poza site'/>
         }
         hoverable
        >
            <Meta 
              title='Titlu site'
              description='Tehnologii folosite:'
            />
        </Card>
        </a>

        <a href='https://www.youtube.com/' target='blank'>
            <Card
              style={{
                width: 300,
              }}
              cover={
                <img src='https://placeholder.pics/svg/100x100' alt='poza site'/>
              }
              hoverable
            >
                <Meta
                 title='Titlu site 2'
                 description='Tehnologii folosite: '
                />
            </Card>
        </a>
        </Space>

        <h4>All know technologies</h4>
        {/* logo pentru fiecare chestie pe care stiu sa o folosesc */}
        </div>
    </div>
  )
}