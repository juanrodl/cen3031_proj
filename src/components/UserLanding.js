import React from 'react';

function UserLanding (props) {
    return (
        <div className="col-lg-9 row justify-content-center">
            <div className = "row d-flex align-items-center justify-content-center">
                <h3 className = 'm-0 p-2 text-center'> Hi <strong> {props.user}</strong></h3>
            </div>
            <div className = "col-lg-5 p-4 d-flex justify-content-center align-items-start">
                <img className = "profile-page-image" width = "300px" height = "300px" src = "https://cdn.landesa.org/wp-content/uploads/default-user-image.png" ></img>
            </div>
            <div className= "col-lg-7 p-4 d-flex flex-column justify-content-start align-items-start">
                <h1>&nbsp;</h1>
                <h3>Your Best Fit Major is</h3>
                <h4 className = "display-6">Enter Major Here</h4>
            </div>
        </div>
    );
}

export default UserLanding;