import React from 'react'
import logo_image from "../images/logo.png"

const Sidebar = () => {
  return (
    <aside>
    <div class="top">
        <div class="logo">
            <img src={logo_image} alt=""/>
            <h2>IY<span class="danger">DL</span></h2>
        </div>
        <div class="close" id="close-btn">
            <span class="material-icons-sharp">close</span>
        </div>
    </div>
    <div class="sidebar">
        <a href="#" class="active" >
            <span class="material-icons-sharp">grid_view</span>
            <h3>COLLECTIBLES</h3>
        </a>
        <a href="#" >
            <span class="material-icons-sharp ">
                account_balance
                </span>
            <h3>INVESTMENTS</h3>
            <span class="comming_soon"> demo</span>                  
        </a>
        <a href="#">
            <span class="material-icons-sharp"> gavel  </span>                        
            <h3>GOVERNANCE</h3>
            <span class="comming_soon"> soon</span>
        </a>
        <a href="#">
            <span class="material-icons-sharp"> settings  </span>                        
            <h3>Settings</h3>
            
        </a>
        <a href="#">
            <span class="material-icons-sharp"> help  </span>                        
            <h3>info</h3>
            
        </a>
    </div>
</aside>
  )
}

export default Sidebar