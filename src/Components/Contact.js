import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import Whatsapp from "./Whatsapp";
import Maps from "./Maps";



const Contact = () => {


    return(
        <>
      
        <div className="ContactUsdiv">
        <h1 className="heading">Contact Us</h1>
        <div className="ContactUsData">
        < Maps/>
          <div className="sameRow">
            <FiHome className="iconStyle" />
            <h2 className="subheading">Meet us</h2>
          </div>
          <b className="data">
          64,Fortune North Industrial park, Behind Gamthi hotel,
          </b>
          <b className="data">
            Nana Chiloda chokdi, Sardar Patel ring road, Muthiya-Naroda Ahmedabad-382330
          </b>
          <div className="sameRow">
            <FiPhoneCall className="iconStyle" />
            <h2 className="subheading">Call us</h2>
          </div>
          <b className="data">Jitendra Mewada: +91 9978836101</b>
          <b className="data">Pankit Mewada : +91  9376144908</b>
          <div className="sameRow">
            <FiMail className="iconStyle" />
            <h2 className="subheading">Mail us</h2>
          </div>
          <b className="data">info@mewadaindustries.com</b>
        </div>
      </div>

      <Whatsapp />

        </>

    );
}

export default Contact;