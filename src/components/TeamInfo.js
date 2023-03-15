import React from 'react'
import { Card } from 'react-bootstrap'

export default function TeamInfo() {
  return (
    <div id='d0'>
      <div className="text_1">
        <h1>Team members</h1>
      </div>
      <div id='d1'>
        <Card className='mem_group'>
          <Card.Body>
            <img name="seungil" className="profile_img" src={require("../assets/profile/Seungil.png")} alt="profile" />
            <p className="text_name"><b>Seungil Han</b></p>
            <p>thesence01@gachon.ac.kr</p>
          </Card.Body>
        </Card>

        <Card className='mem_group'>
          <Card.Body>
            <img name="jimin" className="profile_img" src={require("../assets/profile/Jimin.png")} alt="profile" />
            <p className="text_name"><b>Jimin Lee</b></p>
            <p>reakin@gachon.ac.kr</p>
          </Card.Body>
        </Card>

        <Card className='mem_group'>
          <Card.Body>
            <img name="doyeon" className="profile_img" src={require("../assets/profile/Doyeon.png")} alt="profile" />
            <p className="text_name"><b>Doyeon Hyun</b></p>
            <p>118ssun@gachon.ac.kr</p>
          </Card.Body>
        </Card>

        <Card className='mem_group'>
          <Card.Body>
            <img name="bumgi" className="profile_img" src={require("../assets/profile/Beomgi.png")} alt="profile" />
            <p className="text_name"><b>Beomgi Kim</b></p>
            <p>chromato99@gachon.ac.kr</p>
          </Card.Body>
        </Card>

        <Card className='mem_group'>
          <Card.Body>
            <img name="yejin" className="profile_img" src={require("../assets/profile/Yejin.png")} alt="profile" />
            <p className="text_name"><b>Yejin Choi</b></p>
            <p>chldppwls12@gachon.ac.kr</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
