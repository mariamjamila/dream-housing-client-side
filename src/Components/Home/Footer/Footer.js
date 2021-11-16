import React from 'react';

const Footer = () => {
    return (
          
        <div className="footer bg-black" style={{position:'fixed', left:"0",
        bottom: "0",color:"white",padding:'20px',
        width:"100%"}}>

        <div className="row">
            <div className="col-6">
               <small>Contact us:</small>

            </div>

            <div className="col-6">
               <small>Subscribe:</small>
            </div>
        </div>
    </div>
    );
};

export default Footer;