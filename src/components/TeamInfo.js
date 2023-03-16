import React from 'react'

export default function TeamInfo() {
  return (
    <div id='d0'>
      <div class="text_1">
      <div className='teaminfo_description' >
      <h1>"Advanced Coding, Cloud Engineering, and Lifelong Execution with Reliability"</h1>
      </div>
      <div className='team_members'> 
        Team members
      </div>
      </div>

      <div id='d1'>
        <div class='mem_group'>
          <img name="seungil" class = "profile_img" src= {require("../assets/profile/Seungil.png")} alt="profile"/>
          <p class="text_name"><b>Seungil Han</b></p>
          <p>thesence01@gachon.ac.kr</p>
        </div>
        <div class='mem_group'>
          <img name="jimin" class = "profile_img" src= {require("../assets/profile/Jimin.png")} alt="profile"/>
          <p class="text_name"><b>Jimin Lee</b></p>
          <p>reakin@gachon.ac.kr</p>
        </div>
        <div class='mem_group'>
        <img name="doyeon" class = "profile_img" src= {require("../assets/profile/Doyeon.png")} alt="profile"/>
          <p class="text_name"><b>Doyeon Hyun</b></p>
          <p>118ssun@gachon.ac.kr</p>
        </div>
        <div class='mem_group'>
          <img name="bumgi" class = "profile_img" src= {require("../assets/profile/Beomgi.png")} alt="profile"/>
          <p class="text_name"><b>Beomgi Kim</b></p>
          <p>chromato99@gachon.ac.kr</p>
        </div>
        <div class='mem_group'> 
          <img name="yejin" class = "profile_img" src= {require("../assets/profile/Yejin.png")} alt="profile"/>
          <p class="text_name"><b>Yejin Choi</b></p>
          <p>chldppwls12@gachon.ac.kr</p>
        </div>
      </div>
    </div>
  )
}
