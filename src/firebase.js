import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyBBoLdroC5sL7WAoludBgysm2eYplwRn28",
    authDomain: "react-slack-clone-12901.firebaseapp.com",
    databaseURL: "https://react-slack-clone-12901.firebaseio.com",
    projectId: "react-slack-clone-12901",
    storageBucket: "react-slack-clone-12901.appspot.com",
    messagingSenderId: "783016969923"
};
firebase.initializeApp(config);

export default firebase;