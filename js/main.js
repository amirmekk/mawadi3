const googleSignInButton = document.getElementById('google') ,
    facebookSignInButton = document.getElementById('facebook') ,
    emailText = document.getElementById('emailInput').value,
    passwordText = document.getElementById('passwordInput').value,
    signInButton = document.getElementById('signInButton') , 
    provider_google = new firebase.auth.GoogleAuthProvider(), 
    provider_facebook = new firebase.auth.FacebookAuthProvider();

signIn=(provider)=>{

firebase.auth().signInWithPopup(provider).then(function(result){
    console.log(result); 
}).catch(function(err){
    console.log(err) ; 
})};

signOut=()=>{
    firebase.auth().signOut().then(function() {})
}
emailSignIn = (email , password) =>{
    firebase.auth().createUserWithEmailAndPassword(email , password)
    .then(user => console.log(user))
    .catch(e => console.log(e.message));  
}
/*
signInButton.addEventListener('click' , e=(emailText , passwordText)=>{
   firebase.auth.createUserWithEmailAndPassword(emailText , passwordText).then(user => console.log(user))
        .catch(e => console.log(e.message)); 
}) ;*/
