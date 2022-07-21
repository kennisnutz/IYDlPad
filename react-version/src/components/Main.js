import React from 'react'
import Table from './Table'

const Main = () => {
  return (
    <main>
          <h1>DASHBOARD</h1>
          <div class="date">
              <input type="date"/>
          </div>
          <div class="overview">
                <div class="mint-stats">
                    <span class="material-icons-sharp">
                        analytics
                    </span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Minted</h3>
                            <h1>576 minted</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36">
                                </circle>
                            </svg>
                            <div class="number">
                                <p>
                                    39%
                                </p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted"> whitelist phase</small>
                </div>
                {/* <!------------End of "mint-stats" card--> */}
                <div class="expenses">
                    <span class="material-icons-sharp">
                        analytics
                    </span>
                    <div class="middle">
                        <div class="left">
                            <h3>Mint here</h3>
                            <h1>576 minted</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36">
                                </circle>
                            </svg>
                            <div class="number">
                                <p>
                                    39%
                                </p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted"> whitelist phase</small>
                </div>
                {/* <!------------End of "expenses" card--> */}
            </div>
            <div class="recent-activities">
                    <h2>Recent Activity</h2>
                    <Table/>
                    <a href="" class="more">More...</a>
                </div>
        </main>
  )
}

export default Main