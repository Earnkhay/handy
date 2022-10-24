<template>
    <nav>
        <div class="py-3 border-bottom border-dark shadow-sm">
            <div class="container text-center">
             <router-link class="navbar-brand img-responsive" :to="{name: 'landingPage'}"><img src="../assets/handylogo.png" class="img-responsive" alt=""></router-link>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class=" form mt-5">
                <div class="text-center mb-3 mt-3">
                    <h2 id="header" class="  text-primary fw-bold">Getting Started</h2>
                    <h6>Create an account</h6>
                </div>    
                <div class="col-md-8 container">
                    <alert v-if="alertShow" :alertText="alertTitle" :alertType="alertType"></alert>
                </div>

                <div class="row justify-content-center mt-3">
                        <form action="" id="login-form" class="col-md-5 text-xs-center"> 
                            <div class="border-bottom border-dark">  
                            <div class="mb-3 text-xs-center">
                                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" @blur="validateEmail"  required>
                              </div>
                
                            <div class="mb-3 text-xs-center">
                                <div class="password-icon">
                                  <input :type="passwordType" class="form-control password" id="inputPassword" placeholder="Password" v-model="password" @blur="validatePassword"  required>
                                  <i class="fa-solid icon" :class="{'fa-eye': showEye, 'fa-eye-slash': !showEye}" id="togglePassword" @click="toggleVisibility"></i>
                                  </div>
                                </div>
                        
                            <div class="text-center mb-4 mainBtn">
                            <btn-comp :btnType="btnType1" :text="text2" :btnColor="btnColor2" @click.prevent="signUpAction"></btn-comp>
                            </div>
                            </div>

                            <div class="mb-3">
                            <btn-comp :btnType="btnType" :text="text" :btnColor="btnColor" class="googleBtn my-3" @click.prevent="signUpWithGoogle"></btn-comp>
                            <btn-comp :btnType="btnType" :text="text1" :btnColor="btnColor" class="fbBtn"></btn-comp>
                            </div>

                            <div class="text-center mb-3 fs-6 fg">
                            <a href="#">Forgot your Password?</a>
                            </div>

                        <h5 id="account" class="text-center fw-bold">Already a member?<router-link :to="{name: 'login'}" id="link" class="text-decoration-none"> Log in</router-link></h5>
                    </form>
                </div>
            </div>
        </div>
    </div> 

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component"
import alert from '@/components/UI/alert.vue'
import topNav from '@/components/topNav.vue'
import btnComp from '@/components/UI/btnComp.vue'
import axios from 'axios'
// import * as firebase from "firebase/app"
// import "firebase/auth"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const auth = getAuth();
const user = auth.currentUser;


    @Options({
        components: {
            alert,
            topNav,
            btnComp,
        }
    })
    export default class signup extends Vue{
        passwordType = 'password'
        email = ""
        password = ""
        alertTitle = ""
        alertType = ""
        alertShow = false
        btnType = "button"
        btnType1 = "submit"
        text = "Sign up with Google"
        text1 = "Sign up with Facebook"
        text2 = "Sign Up"
        btnColor = "btn-transparent"
        btnColor2 = "btn-primary"
        mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        //To check a password between 6 to 20 characters which contain at least one numeric digit, 
        // one uppercase and one lowercase letter
        regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

            toggleVisibility() {
                if (this.showEye) this.passwordType = "text";
                else this.passwordType = "password";
            }
            get showEye() {
                return this.passwordType == "password";
            }
            validateEmail() {
                    if (this.mailformat.test(this.email)) {
                        // console.log('valid email address');
                        
                    } else if(this.email == ""){
                         
                        this.alertTitle = "Please input Email address"
                        this.alertType = "Danger"
                        this.alertShow = true
                        setTimeout(
                            () => {
                                this.alertShow = false
                        },3000)
                    }else{
                        this.alertTitle = "Please input valid Email address"
                        this.alertType = "Danger"
                        this.alertShow = true
                        setTimeout(
                            () => {
                                this.alertShow = false
                                this.email = ""
                        },3000)
                    }
                }
            validatePassword() {
                    if (this.regPassword.test(this.password)) {
                        this.alertShow = false
                    }else if(this.password == ""){
                        this.alertTitle = "Please input Password"
                        this.alertType = "Danger"
                        this.alertShow = true
                        setTimeout(
                            () => {
                                this.alertShow = false
                        },3000)
                    }else{
                        this.alertTitle = "Password should be at least 6 characters long, contain at least one uppercase & one digit"
                        this.alertType = "Danger"
                        this.alertShow = true
                        setTimeout(
                            () => {
                                this.password = ""
                        },3000)
                    }
                }
            
            async signUpAction(){
                if(this.email != "" && this.password != '' && this.mailformat.test(this.email) && this.regPassword.test(this.password)){
                    createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                    await axios.post('https://handy-2eb2b-default-rtdb.firebaseio.com/handy.json', {
                        email: this.email,
                        password: this.password
                    })
                    
                    .then((res) => {
                        console.log(res, "Successfully registered");
                        this.alertTitle = "Success !, You're Welcome"
                        this.alertType = "Success"
                        this.alertShow = true
                        setTimeout(() => {  
                                this.alertShow = false  
                                this.$router.push('/login')    
                        },3000) 
                    })
                    .catch((err) => {
                        console.error(err)
                        console.log(err.code);
                        // this.alertTitle = err.code
                        this.alertType = "danger"
                        this.alertShow = true
                        switch (err.code) {
                            case "auth/email-already-in-use":
                                this.alertTitle = "Email already in use";
                                break;
                            default:
                                this.alertTitle = "Account already exists";
                                break;
                        }
                        setTimeout(() => {         
                                this.alertShow = false
                                this.email = ''
                                this.password = ''
                        },3000) 
                    });
                }else{
                    this.alertTitle = "Error !, Please input Required details"
                    this.alertType = "Danger"
                    this.alertShow = true
                    setTimeout(
                        () => {
                            this.alertShow = false
                            this.email = ''
                            this.password = ''
                    },3000)
                }
            }

            async signUpWithGoogle(){
                let auth = getAuth();
                const provider = new GoogleAuthProvider();
                axios.post('https://handy-2eb2b-default-rtdb.firebaseio.com/handy.json', {
                    auth,
                    provider
                })
                signInWithPopup(getAuth(), provider)
                    .then((res) => {
                        console.log(res.user);
                        this.alertTitle = "Success !, You're Welcome"
                        this.alertType = "Success"
                        this.alertShow = true
                        setTimeout(() => {  
                                this.alertShow = false  
                                this.$router.push('/login')    
                        },3000) 
                    })
                    .catch((err) => {
                        console.log(err.code, "what's the err", err);
                    })
            }
    }
</script>

<style scoped>
.form{
    padding: 30px;
}

.googleBtn, .fbBtn{
    border: solid 1px black;
    border-radius: 10px;
    max-width: 100%;
}

.googleBtn:hover, .fbBtn:hover{
    background-color: rgb(2, 117, 216);
    color: white;
}

.mainBtn:hover{
    color: red;
}

.fg a{
    color: black;
}

.fg a:hover{
    color: red;
}


/* #link{
    color: rgb(2, 117, 216);
} */

h5 a:hover{
    color: red;
}

.password-icon{
    display: flex;
}

.icon{
    margin-left: -30px; 
    margin-top: 10px;
}
    
</style>