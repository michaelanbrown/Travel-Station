import React from 'react';
import './App.css';

function Password({ passClass, handlePasswordChange, passwordData}) {


    return (
        <div className={passClass}>Enter the Password to Edit:
            <br></br>
            <form >
                <input type="text" id="password" value={passwordData} onChange={handlePasswordChange} placeholder="Password"/>
            </form>
        </div>
    )
}

export default Password;