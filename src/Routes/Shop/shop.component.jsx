import React from 'react'
import SHOP_DATA from "../../utils/shop-data.json"


function Shop() {
  return (
    <div>
        { SHOP_DATA.mpa(({id, name}) => {
            <div key={id}>
                 <h2>  </h2>   
            </div>
        })

        
        
        
        }
    </div>
  )
}

export default Shop