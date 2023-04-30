import React from 'react'
import profile from '../asset/girl.jpg'

const Main1 = () => {
  return (
    <div class ="main1">
        <div class="phn">
            <div class="line"></div>
            <div><img src={profile} alt="img" /></div>
        </div>
        
        <main class="happy">
            <h4>Hi, I am</h4>
            <h1>Naveenjot Kaur</h1>
            <h4>B.Tech Student</h4>
            <div class="button">
                SEE MY WORK
            </div>
        </main>
    </div>
  )
}

export default Main1