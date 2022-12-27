import React, { ElementRef } from 'react';
import { useDispatch } from 'react-redux';
import './Toggle.css';

interface ToggleProp {
    action: any;
    isToggled: boolean;
}

const Toggle: React.FC<ToggleProp> = ({ action, isToggled }) => {
    const dispatch = useDispatch();
    return <label className="switch">
        <input
            type="checkbox"
            checked={isToggled}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                dispatch(action(e.target.checked))
            }} />
        <span className="slider round"></span>
    </label>
}

export default Toggle;