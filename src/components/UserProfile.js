import React, {useEffect, useState} from 'react';
import '../css/UserProfile.css'
import UserLanding from './UserLanding';
import UserTable from './UserTable';
import AccountSettings from './AccountSettings';
function UserProfile (props) {
    let user = "friend";
    let major = "Enter Best Fit Major Here"
    useEffect( () => {
        console.log("UserProfile Use Effect output");
    })

    const [index, setCurrentIndex] = useState(0);
    const assignClassToListItem = (element, name) => {
        console.log(element.id + "and name should be " + name);
        if (element.id == name)
        {
            element.classList.add('highlighted');
        }
        else
        element.classList.remove('highlighted');
        
    }
    const renderCorrectPage = () => {
        let items = document.getElementsByClassName('settings-list');
        if (index === 0) {
            Array.from(items).forEach((el) => {assignClassToListItem(el, 'view-results')})
            return <UserLanding user ="User"></UserLanding>
        }
        else if (index === 1) {
            Array.from(items).forEach((el) => {assignClassToListItem(el, 'download-results')})
            return <UserTable></UserTable>;
        }
        else if (index === 2) {
            Array.from(items).forEach((el) => {assignClassToListItem(el, 'settings')})
            return <AccountSettings></AccountSettings>
        }
        else if (index === 3){
            Array.from(items).forEach((el) => {assignClassToListItem(el, 'any-other')})
            return <div className='col-lg-9 d-flex justify-content-center align-items-center'>
                <h1 className="text-center">Nothing Available here yet!</h1>
                </div>;
        }
        else {
            return <h1>Index 1</h1>;
        }
    }
    return (
        <div className='UserProfile'>
            <div className='user-profile-wrapper row'>
                <div className ="user-profile-sidebar col-lg-3">
                    <ul className = "sidebar-list">
                        <li className = "settings-list" id = 'view-results' onClick={() => {setCurrentIndex(0)}}>View Results</li>
                        <li className = "settings-list" id = 'download-results' onClick={() => {setCurrentIndex(1)}}>Download Results</li>
                        <li className = "settings-list" id =  'settings' onClick={() => {setCurrentIndex(2)}}>Settings</li>
                        <li className = "settings-list" id = 'any-other' onClick={() => {setCurrentIndex(3)}}>Any other options</li>
                    </ul>
                </div>
                {renderCorrectPage()}
            </div>
        </div>
    );
}

export default UserProfile;