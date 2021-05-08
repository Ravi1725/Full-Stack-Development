import React from 'react';


const Home =(props) =>{
    
    return (
        <div className="home">
            <h1>
                This is home page
            </h1>
            <h2>
                Welcome to the react page
            </h2>
            <button onClick={props.changeToPricingPage}>Go to Pricing Page</button>
        </div>
    )
}

export default Home;