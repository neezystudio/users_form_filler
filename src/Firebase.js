import * as firebase from 'firebase';

import firestore from 'firebase/firestore'


 


const settings = {timestampsInSnapshots: true};


 


const config = {


  apiKey: "AIzaSyBYlx-jwVmGxM5ri5EMYkmO2DAwT6kOPV0",


  authDomain: "tukio-408c1.firebaseapp.com",


  databaseURL: "https://tukio-408c1.firebaseio.com",


  projectId: "ukio-408c1",


  storageBucket: "tukio-408c1.appspot.com"


};


firebase.initializeApp(config);


 


firebase.firestore().settings(settings);


 


export default firebase;