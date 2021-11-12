import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user,setUser]= useState({});
    const [isLoading,setIsLoading]= useState(true);
    const [error,setError]=useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    // login,register using google account 
    const signInUsingGoogle= (history,redirect_uri) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=> {
            const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setUser(user);
        })
        .finally(()=>{
            history.push(redirect_uri);
            setIsLoading(false)}
        )
    }
    // sign in using email and password,then redirect to target url 
    const signInUsingEmailPassword= (email,password,history,redirect_uri)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
            history.push(redirect_uri);
        })
        .catch(err=>{
            setError(err.message);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }
    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[auth])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(()=>{
            
            setIsLoading(false)})
    }
    // update User info after registration complete 
    const updateUser=(name,history,redirect_uri)=>{
        setIsLoading(true)
        updateProfile(auth.currentUser,{displayName:name})
        .then(res=>{
            setIsLoading(false);
            history.push(redirect_uri);
        })
    }
    // crete a user using email and password 
    const createUser=(email,password,name,history,redirect_uri)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
            // save user to the database
            saveUser(email, name, 'POST');
            updateUser(name,history,redirect_uri);
        })
        .catch((err=>{
            setError(err.message)
        }))

    }
    useEffect(() => {
        fetch(`https://enigmatic-stream-34553.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://enigmatic-stream-34553.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        error,
        admin,
        signInUsingGoogle,
        logOut,
        isLoading,
        createUser,
        signInUsingEmailPassword
    }
}
export default useFirebase;