const googleSignInButton = document.getElementsByClassName('google') ,
    facebookSignInButton = document.getElementsByClassName('facebook') ,
    emailTextSignIn = document.getElementById('emailInpuSignInt').value,
    passwordTextSignIn = document.getElementById('passwordInputSignIn').value,
    emailTextLogIn = document.getElementById('emailInputLogIn').value,
    passwordTextLogIn = document.getElementById('passwordInputLogIn').value,
    signInButton = document.getElementById('signInButton') , 
    provider_google = new firebase.auth.GoogleAuthProvider(),
    spinner = document.getElementsByClassName('fa-spinner') ,  
    provider_facebook = new firebase.auth.FacebookAuthProvider();

signIn=(provider)=>{
    //spinner.removeClass('hide') ;
    firebase.auth().signInWithPopup(provider)
        .then(function(result){
            //spinner.addClass('hide') ;
            console.log(result); 
        }).catch(function(err){
            //spinner.addClass('hide') ;
            console.log(err) ; 
})};

signOut=()=>{
    firebase.auth().signOut()
        .then(function() {
            console.log('you just logged out !');
    })
}
emailSignIn = (email , password) =>{
    //spinner.removeClass('hide') ;
    firebase.auth().createUserWithEmailAndPassword(email , password)
        .then(user => {
            console.log(user);
            //spinner.addClass('hide') ;
        }
        )
        .catch(e => {
            //console.log(e.message); 
            spinner.addClass('hide') ;
        });  
}

emailLogIn=(email , password)=>{
    //spinner.removeClass('hide') ;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            //spinner.addClass('hide') ;
            console.log(user) ;
        })
        .catch(err =>{
            //spinner.addClass('hide') ;
            console.log(err);
        })
}

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log('user logged in'); 
        console.log(firebaseUser); 
    }
    else{
        console.log('not logged in!')
    }
})