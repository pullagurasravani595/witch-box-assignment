
import React, {useState, useEffect} from 'react';
import firebase from "firebase";
import './index.css';

const auth = firebase.auth();

firebase.initializeApp({
   apiKey: "AIzaSyBYkR17dpDv5WMU6yNMedB7vCnu76Pclpw",
   authDomain: "sign-project-596dc.firebaseapp.com",
   projectId: "sign-project-596dc",
   storageBucket: "sign-project-596dc.appspot.com",
   messagingSenderId: "849495191543",
   appId: "1:849495191543:web:e5a9f91604bc2bf7a3c8f2"
})

const Login = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        auth.onAuthStateChanged(person => {
            if (person) {
                setUser(person);
            }
            else {
                setUser(null);
            }
        })

    }, [])

    const signInWithPopup = async() => {
        try {
            await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
    <>
        {user ? 
        <div>
            <h5>Welcome to Home</h5>
            <button type="button">Sign out</button>
        </div> :
        <div className='app-login-container'>
            <div>
                <div className='logo-container'>
                    <img src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1724569431/Logo_12_x0sooz.png" alt="avatar" />
                </div>
                <hr />
            </div>
            <div className='login-card-outer'>
                <div className='login-card-container'>
                    <div>
                        <h5 className='new-paragraph'>Create a new account</h5>
                        <button className='signup-btn' onClick={signInWithPopup}>
                            <div className='center-view'>
                                <img src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1724573358/Frame_xh3saz.png" alt="avatar" />
                                <p className='botton-content'>Sign Up with Google</p>
                            </div>
                        </button>
                    </div>
                    <div className='center-vertical'>
                        <button className='create-btn'>Create an Account</button>
                        <p className='last'>Already have an account? Sign In</p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p className='footer-paragraph'>© 2023 Reachinbox. All rights reserved.</p>
            </div>
        </div>
        }
        
    </>
    )
}

export default Login;
