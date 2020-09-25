import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey            : 'AIzaSyASgMNHxTQUok_sy_4Tyo8Rfl0yS0mEc3Y',
	authDomain        : 'de-la-tierra-cac1c.firebaseapp.com',
	databaseURL       : 'https://de-la-tierra-cac1c.firebaseio.com',
	projectId         : 'de-la-tierra-cac1c',
	storageBucket     : 'de-la-tierra-cac1c.appspot.com',
	messagingSenderId : '129292105416',
	appId             : '1:129292105416:web:00c420c2a7eb73ab91d7fd',
	measurementId     : 'G-DGGBJP96K8'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);
