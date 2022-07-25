import React from 'react';
import {useNavigate} from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={'btn'}>
                <button onClick={()=>navigate('/login')}>login</button>
                <button onClick={()=>navigate('/register')}>register</button>
            </div>
        </div>
    );
};

export default Header;