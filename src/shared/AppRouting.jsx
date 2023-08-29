import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from '../containers/Home';
import About from '../containers/About';
import ContactUs from "../containers/ContactUs";
const AppRouting = () => {
  return (
    <div>  
<Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
    </div>
  );
};

export default AppRouting;