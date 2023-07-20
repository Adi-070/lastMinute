import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://static01.nyt.com/images/2023/06/22/multimedia/22hours-paris-tjzf/22hours-paris-tjzf-master768.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Paris</h1>
            <h1>104 properties</h1>
        </div>
        
        </div>
        <div className="featuredItem">
            <img src="https://www.planete-energies.com/sites/default/files/styles/1200x630/public/migrated_files/images/thumbnails/image/moscow.jpg?itok=lPt9jNWR" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Moscow</h1>
            <h1>313 properties</h1>
        </div>
        
        </div>
        <div className="featuredItem">
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/191212182124-04-singapore-buildings.jpg?q=w_2994,h_1996,x_3,y_0,c_crop" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Singapore</h1>
            <h1>431 properties</h1>
        </div>
        
        </div>
    </div>
  )
}

export default Featured