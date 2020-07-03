import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
    }

    // Registers user
    async register(name, email, password){
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
    
        return await newUser.user.updateProfile({
            displayName: name
        })
    }

    // User login
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }
}

const firebase = new Firebase();

export default firebase;