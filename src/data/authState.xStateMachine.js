import {Machine} from 'xstate';
import React, {createContext} from 'react';

  //Simple toggle for logged in and logged out, to be used later for front-end authentication usage.
  export const simpleMachine = Machine ({
    id: 'simpleMachine',
    initial: 'checkingLogIn',
    states: {
      checkingLogIn: {
          on: {
              JWT_EXPIRED: {
                  target: "loggedOut",
              },
              JWT_NOT_EXPIRED: {
                  target: "loggedIn",
              },
          },
          invoke: {
              src: 'checkLogIn',
          },
      },
          
      loggedOut: {
        on : {
            LOG_IN:{
            target: 'loggedIn',
            actions: ['saveJWTSession']
            }
        },
      },
      loggedIn: {
        on: {
            LOG_OUT: {
            target: 'loggedOut',
            actions:['deleteJWTSession']
            }
        },
      },
    },
},
{
    services: {
        checkLogIn: (context,event) => (callback, onReceive) => {
            //if the user is already logged in
            const jwtFromStorage = null;
            if (jwtFromStorage)
            callback("JWT_NOT_EXPIRED");
            else
            callback("JWT_EXPIRED");
        } 
    },
    actions: {
        saveJWTSession: () => {
            const saveLoginDetails = () => {console.log("session saved")};
            saveLoginDetails();
            console.log("Logged In!");
        },
        deleteJWTSession: () => {
            const deleteLoginDetails = () => {console.log("session deleted")};
            deleteLoginDetails();
            console.log("Logged Off!");
        }
    }
});

export const AuthStateContext = createContext({});