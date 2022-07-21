import React from 'react'

const Right = () => {
  return (
    <div className='right'>
          <div class="top">
            <button id="menu-btn">                    
              <span class="material-icons-sharp">menu</span>
            </button>
            <div class="theme-toggler">
              <span class="material-icons-sharp active">light_mode</span>
              <span class="material-icons-sharp">nightlight</span>
            </div>
            <div class="profile">
              <div class="info">
                  <p class="time"><b>Hey!!</b>ox2..3e4</p>
                  <small class="time">You are VVhitelisted</small>
              </div>
              <div class="profile-photo">
                  <img src="./images/profile1.png" alt=""/>
              </div>            
            </div>
          </div>
          {/* <!-------------End of top section------------------> */}
          <div class="recent-updates">
            
            <div class="update">
              <div class="profile-photo">
                  <img src="./images/profile2.png" alt=""/>
              </div>
              <div class="message">
                  <p><b>mint: </b> token id 143</p>
                  <small class="time">20 minutes ago</small>
              </div>                
            </div>
          </div>  
          <div class="wallet-analysis">
                    <h2>Wallet stats</h2>
                    <div class="item nft">
                        <div class="icon">
                            <span class="material-icons-sharp">shopping_cart</span>
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>Total IYDL Kongs:</h3>
                                <small class="time">Number of IYDL kong NFTs in this wallet</small>
                            </div>
                            
                            <h3 class="success"><span class="success">IKN</span> 22</h3>
                        </div>
                        
                    </div>
                    <div class="item token">
                        <div class="icon">
                            <span class="material-icons-sharp">shopping_cart</span>
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>Total IYDL COINS:</h3>
                                <small class="time">Number of IYDL tokens in this wallet</small>
                            </div>
                            <h3 class="success"><span class="success">IYDL</span> 22,201</h3>
    
                        </div>
                        
                    </div>
                    <div class="item investment">
                        <div class="icon">
                            <span class="material-icons-sharp">shopping_cart</span>
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>Rewards Earned:</h3>
                                <small class="time">Your yield earnings</small>
                            </div>
        
                            <h3 class="success"><span class="material-icons-sharp">
                                monetization_on
                                </span> 1,238.32 </h3>
                        </div>
                        
                    </div>
                </div>       
        </div>
  )
}

export default Right