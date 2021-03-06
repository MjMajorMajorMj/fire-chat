import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config';

firebase.initializeApp(config.firebase);

const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true});

export default firestore;

