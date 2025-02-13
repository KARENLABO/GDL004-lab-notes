import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AvatarImage from '../Images/Avatar.png'

const firebaseConfig = {
    apiKey: "AIzaSyCcIAiarXr60m4z1_KMt82tie0LrZGj82I",
    authDomain: "lab-notes-df536.firebaseapp.com",
    databaseURL: "https://lab-notes-df536.firebaseio.com",
    projectId: "lab-notes-df536",
    storageBucket: "lab-notes-df536.appspot.com",
    messagingSenderId: "487133628879",
    appId: "1:487133628879:web:91dcb0f7237dbce8b42aba"
};


// En esta clase estan todas las peticiones a Firebase
class Firebase {
	constructor() {
		firebase.initializeApp(firebaseConfig)
		this.auth = firebase.auth()
        this.db = firebase.firestore()
        this.providerFacebook= new firebase.auth.FacebookAuthProvider()
        this.providerGoogle= new firebase.auth.GoogleAuthProvider()
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

    currentUser(){
        return this.auth.currentUser.displayName;
    }

    ProfilePicture(){
        const defaultPhoto= {AvatarImage};
        if(this.auth.currentUser.photoURL != null){
            return this.auth.currentUser.photoURL
        } else {
            return defaultPhoto
        }
    }

    async authFacebook (){
        await this.auth.signInWithPopup(this.providerFacebook)
    }

    async authGoogle (){
        await this.auth.signInWithPopup(this.providerGoogle)
    }

    

    fetchData  (setNotas) {
        this.db.collection('Notes').where('user', '==', this.auth.currentUser.email).onSnapshot(snapshot =>{
            const dataNotes= [];
            snapshot.forEach(doc => dataNotes.push({...doc.data(), id: doc.id}))
            setNotas(dataNotes)
        })
    }
 
    upLoadNote(data, tittleNote, bodyNote){
        const user = this.auth.currentUser.email;
        this.db.collection('Notes').doc(data.id).set({titleNote: tittleNote, bodyNote: bodyNote, user:user});
    }
  

    deleteNote(data){
        this.db.collection("Notes").doc(data.id).delete()
    }
    
    createNote(newNote){
        const user = this.auth.currentUser.email;
        this.db.collection('Notes').add({titleNote: newNote, bodyNote: newNote , user:user})   
    }
}

export default new Firebase()