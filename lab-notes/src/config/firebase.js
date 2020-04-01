import app from 'firebase/app';
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyCcIAiarXr60m4z1_KMt82tie0LrZGj82I",
    authDomain: "lab-notes-df536.firebaseapp.com",
    databaseURL: "https://lab-notes-df536.firebaseio.com",
    projectId: "lab-notes-df536",
    storageBucket: "lab-notes-df536.appspot.com",
    messagingSenderId: "487133628879",
    appId: "1:487133628879:web:91dcb0f7237dbce8b42aba"
};

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
    }
    login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
    }
    async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
        })
    }
}

export default new Firebase()