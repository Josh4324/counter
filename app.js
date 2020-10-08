 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 let firebaseConfig = {
     apiKey: "AIzaSyCgdSLhr6zwL60VBzTbX92ItHEkhvD-WC0",
     authDomain: "dano-better-days-pledge.firebaseapp.com",
     databaseURL: "https://dano-better-days-pledge.firebaseio.com",
     projectId: "dano-better-days-pledge",
     storageBucket: "dano-better-days-pledge.appspot.com",
     messagingSenderId: "541137023083",
     appId: "1:541137023083:web:631c7a4eb572343fbcc12e",
     measurementId: "G-11HYNVGTZL",
 };

 // Initialize Firebase
 let app = firebase.initializeApp(firebaseConfig);
 console.log(app);
 firebase.analytics();
 let ip = uuid.v4()
 let button = document.querySelector(".but");
 let counter = document.querySelector(".counter");
 const check = localStorage.getItem("count");
 let count;
 firebase.database().ref("ip/").once('value').then((snapshot) => {
     console.log(snapshot.val());
     count = Number(snapshot.val().count)
     counter.textContent = count
 })

 if (check) {
     button.textContent = "Subscribed";
     button.setAttribute("disabled", true);
 }
 button.addEventListener("click", async () => {
     firebase.database().ref("ip/").once('value').then((snapshot) => {
         console.log(snapshot.val());
         count = Number(snapshot.val().count)
         count++

         firebase.database().ref("ip/").set({
             count: count
         });
         counter.textContent = count
     })

     localStorage.setItem("count", "done");
     button.textContent = "Subscribed";
 });