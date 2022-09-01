import React from "react";



function Maps() {
    return (
        <div className="Maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7323377990097!2d72.67427201489222!3d23.106892134910467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e80efba9d53a5%3A0xca3f739d07034c49!2sFortune%20North%20Industrial%20Park%2C%20GIDC%20Naroda%2C%20Ahmedabad%2C%20Gujarat%20382330!5e0!3m2!1sen!2sin!4v1660821705332!5m2!1sen!2sin"
                width="650"
                height="400"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Maps;