import React from 'react'


const Pricing=(props)=>{
    return(
        <div className="pricing">
            <h1>Welcome to pricing page</h1>
            <h2>learning is too expensive</h2>
            <button onClick={props.backToHomePage}>Go to home page</button>
        </div>
    )
}

export default Pricing;