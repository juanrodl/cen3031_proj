import React, {useEffect, useState} from 'react';

/**
 * Just as a note, the following div names refer to the following
 * - general-settings concerns everything related to user profile picture and public username
 * - past-results-settings concerns things related to past results, like downloading all past results, deleting all past results, or deleting some past results
 *  - administrative settings have to do with things like changing email, changing password, and deleting one's account
 * @returns a component including all of the form details required for the account setting modification page
 * @note all input fields should be controlled fields
 */
function AccountSettings () {
    //here for the useState default value we would pass the props of the user session
    let changeEmailButton;
    let changePasswordButton;
    const [username, setUsername] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /**
     * @function handleDeleteResults
     * Called whenever the user presses the delete past results button.
     * past-results would first be cleared from the object storing them in the local cache
     * Then, an async request to delete all the results for the current user will be sent to the django server
     * Once this is finalized, a modal should pop up confirming the deletion of past results!
     */
    const handleDeleteResults = (e) => {
        e.preventDefault()
        console.log("User deleted past results");
    };
    const handleEmailChange = (e) => {
        e.preventDefault()
        console.log("User changed email");
    }
    const handlePasswordChange = (e) => {
        e.preventDefault()
        console.log("User changed password!");
    }
    /**
     * @function onEmailValueDifference
     * Meant to run after a change has been made to the email input field.
     * Checks if email in input field != current user email. 
     * This then signals for a "change email" button to appear, which then, when pressed, handles the email change process.
     * @param e refers to the event, used to obtain the value  of the target element on which the function took place
     */
    const onEmailValueDifference = (e) => {
        setEmail(e.target.value);
        email !== "Email stored in the user object" ?  changeEmailButton.disabled = false: changeEmailButton.disabled = true 
    }
    /**
     * @function onPasswordValueDifference
     * Meant to run after a change has been made to the password input field.
     * Checks if password in input field != current user password.
     * This then signals for a "change password" button to enable, which then, when pressed, handles the email change process.
     * @param e refers to the event, used to obtain the value  of the target element on which the function took place
     */
    const onPasswordValueDifference = (e) => {
        password !== "password stored in user object" ? changePasswordButton.disabled = false : changePasswordButton.disabled = true;
    }
    useEffect(() => {
        changeEmailButton = document.getElementById('change-email-btn');
        changePasswordButton = document.getElementById('change-password-btn');
    })
    return (

        
        <div className='AccountSettings p-3 col-lg-9'>
            <form>
                <div className = "general-settings p-2 form-horizontal"></div>
                    <h3>Profile Settings</h3>
                    <hr className = "settings-hr"></hr>
                    <div className = "form-group custom-form-group">
                        <label htmlFor =  "profile-picture-input">Profile Picture:  &nbsp;</label>
                        <input type = "file" accept="image/*" id="profile-picture-input" name="profile-picture-input"></input>
                    </div>
                    <div className ="form-group custom-form-group">
                    <label htmlFor = "username-input">Public Username: &nbsp;</label>
                    <input type="text" id ="username-input" name= "username-input" className = "settings-change-field" onChange= {(e) => {setUsername(e.target.value)}} value = {username}></input>         
                    </div>
                <div className = "past-result-settings p-2 form-horizontal">
                    <h3>Past-Results Settings</h3>
                    <hr className = "settings-hr"></hr>
                    <label htmlFor = "delete-past-results-btn">Delete Past Results?: &nbsp;</label>
                    <button id="delete-past-results-btn" className = 'settings-change-btn' name= "delete-past-results-btn" onClick= {(e) => {handleDeleteResults(e)}}>Delete Past Results</button>    
                </div>  
                <div className = "administrative-settings form-horizontal">
                    <h3>Account Settings</h3>
                    <hr className = "settings-hr"></hr>
                    <div className = "form-group custom-form-group">
                        <label htmlFor="change-email-input">User Email: &nbsp;</label>
                        <input type="text" id="change-email-input" name = "change-email-input" className = "settings-change-field" onChange={(e) => {onEmailValueDifference(e)}} value={email}></input>
                        <button type="button" className = 'settings-change-btn' id="change-email-btn" name = "change-email-btn" onClick={(e) => {handleEmailChange(e)}} disabled>Change email</button>
                    </div>
                    <div className = "form-group custom-form-group">
                        <label htmlFor="change-password-input">Change Password: &nbsp;</label>
                        <input type="password" id ="change-password-input" name="change-password-input" className = "settings-change-field" onChange= {(e) => {onPasswordValueDifference(e)}} value ={password}></input>
                        <button type="button" className = 'settings-change-btn' id="change-password-btn" name = "change-password-btn" onClick={(e) => {handlePasswordChange(e)}} disabled>Change password</button>
                    </div>
                </div> 
            </form>
        </div>
    );
}

export default AccountSettings;