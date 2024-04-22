import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/BottomNav.css'; 
import toolsIcon from '../images/tools_Icon.png';
import trackingIcon from '../images/tracking_Icon.png';
import resourcesIcon from '../images/resources_Icon.png';

const BottomNav = () => {
    return (
        <div className="bottom-nav">
            <Link to="/tools" className="tools">
                <img src={toolsIcon} alt="Tools" />
                <span>Tools</span>
            </Link>
            <Link to="/tracking" className="tracking">
                <img src={trackingIcon} alt="Tracking" />
                <span>Tracking</span>
            </Link>
            <Link to="/resources" className="resources">
                <img src={resourcesIcon} alt="Resources" />
                <span>Resources</span>
            </Link>
        </div>
    );
};

export default BottomNav;
