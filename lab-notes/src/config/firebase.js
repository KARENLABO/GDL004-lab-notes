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
        this.providerFacebook= new app.auth.FacebookAuthProvider()
        this.providerGoogle= new app.auth.GoogleAuthProvider()
    }
    login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        
        console.log(this.auth.currentUser)
		return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    async authFacebook (){
        await this.auth.signInWithPopup(this.providerFacebook)
        
    }

    async authGoogle (){
        await this.auth.signInWithPopup(this.providerGoogle)
    }

    async fetchData  (setNotas) {
        const data = await this.db.collection('Notes').onSnapshot(snapshot =>{
            const dataNotes= [];
            snapshot.forEach(doc => dataNotes.push({...doc.data(), id: doc.id}))
            setNotas(dataNotes)
        })
    return data;
    }

    upLoadNote(AddNote, name){
       this.db.collection('Notes').doc(AddNote.id).set({name: name});
    }

    deleteNote(AddNote){
        this.db.collection("Notes").doc(AddNote.id).delete()
       
    }
    
    createNote(newNote){
        this.db.collection('Notes').add({name: newNote})
    }
}

export default new Firebase()