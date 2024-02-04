import React from 'react';

export default function Projects() {
  return (
    <div>
        <h3>my work</h3>

        <div id='cards'>
            <a href="#1">
                <div className='card'>
                    <img src="#" alt="poza site"/>
                    <div className='card-body'>
                        <h5>Titlu site</h5>
                        <p>Tehnologii folosite: </p>
                    </div>
                </div>
            </a>

            <a href="#2">
                <div className='card'>
                    <img src="#" alt="poza site"/>
                    <div className='card-body'>
                        <h5>Titlu site</h5>
                        <p>Tehnologii folosite: </p>
                    </div>
                </div>
            </a>
        </div>

        <h4>All know technologies</h4>
        {/* logo pentru fiecare chestie pe care stiu sa o folosesc */}
    </div>
  )
}