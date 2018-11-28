
// Load this script file at the beginning of all HTML files, before body
// <script src="load-firebase.js"></script>

(function(){
  var config = {
    apiKey: "AIzaSyBwkzTE8ITt7GNesfRDgZ3W81l_8m3speQ",
    authDomain: "comp1930-project-b6b53.firebaseapp.com",
    databaseURL: "https://comp1930-project-b6b53.firebaseio.com",
    projectId: "comp1930-project-b6b53",
    storageBucket: "comp1930-project-b6b53.appspot.com",
    messagingSenderId: "512590927196"
  };
  firebase.initializeApp(config);
  app_firebase = firebase; 
})();
