// import firebase, {importScripts} from './firebase'
importScripts('https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.21.0/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyDurRiW3EPPGPWMnQ9qGKkEg7ljWQgck8g",
    authDomain: "fir-messaging-app-8a136.firebaseapp.com",
    projectId: "fir-messaging-app-8a136",
    messagingSenderId: "606124026194",
    appId: "1:606124026194:web:aa8872e45370f5cfdbb28b"
})

firebase.messaging();