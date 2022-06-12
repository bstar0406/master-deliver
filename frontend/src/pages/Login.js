import React, { useEffect } from 'react';
import { ui } from '../helpers/firebase.js'
import { useFirestore } from 'reactfire'
import firebase from "firebase/app"

// Handles the user's signup/login with FirebaseUI, and stores the user in the Firestore DB upon new signup
const Login = () => {
    const usersCollection = useFirestore().collection("users")

    useEffect(() => {
        // Sets a new user at the /users/{user.uid} path
        async function AddNewUser(user) {
            usersCollection.doc(user.uid).set({ 
                name: user.displayName,
                email: user.email
            })
        }

        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true
                }
            ],
            signInSuccessUrl: "/console",
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    const user = authResult.user
                    const isNewUser = authResult.additionalUserInfo.isNewUser
                    if (isNewUser) {
                        AddNewUser(user)
                    }
            
                    return false
                }
            }
        });
    }, [usersCollection]);
    return (
        <div id="firebaseui-auth-container"></div>
    );
  };
  
export default Login;