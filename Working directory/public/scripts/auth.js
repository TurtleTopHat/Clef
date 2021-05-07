

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    user.getIdTokenResult().then(idTokenResult => {
      setupUI(user);
    });
  } else {}
    setupUI();

});

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      userName: signupForm['signup-username'].value
    });
  }).then(() => {
    // close the signup modal & reset form
    $('#modal-signup .close').click();
    signupForm.reset();
    signupForm.querySelector('.error').innerHTML = ''
  }).catch(err => {
    $('#modal-signup .close').click();
    signupForm.querySelector('.error').innerHTML = err.message;
  });
});


// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    var mymodal = document.getElementById("modal-login");
    $('#modal-login .close').click();
    getComments();
    loginForm.reset();
    loginForm.querySelector('.error').innerHTML = '';
  }).catch(err => {
    loginForm.querySelector('.error').innerHTML = err.message;
  });

});