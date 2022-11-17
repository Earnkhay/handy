<template>
    <top-nav/>
    <div class="container-fluid p-0">
        <div class="row gx-0">
            <div class="col-md-6 form mt-5">
                <div class="text-center mb-4 mt-3 ">
                    <h2 id="header" class="text-primary fw-bold">Login</h2>
                </div>
                    <alert v-if="alertShow" :alertText="alertTitle" :alertType="alertType"></alert>
                
                <div class="row justify-content-center ">
                        <form action="" id="login-form" class=" col-md-9 text-xs-center"> 
                            <div class="border-bottom border-dark">  
                            <div class="mb-3 text-xs-center">
                                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" @blur="validateEmail"  required>
                              </div>
                
                            <div class="mb-3 text-xs-center">
                                <div class="password-icon">
                                  <input :type="passwordType" class="form-control password" id="inputPassword" placeholder="Password" v-model="password"  required>
                                  <i class="fa-solid icon" :class="{'fa-eye': showEye, 'fa-eye-slash': !showEye}" id="togglePassword" @click="toggleVisibility"></i>
                                  </div>
                                </div>
                        
                            <div class="text-center mb-4 mainBtn">
                            <!-- <button type="submit" class="btn btn-primary" id="login" @click.prevent="submitAction()" >Log In</button> -->
                            <btn-comp :btnType="btnType1" :text="text2" :btnColor="btnColor2" @click.prevent="loginAction"></btn-comp>
                            </div>
                            </div>

                            <div class="mb-3">
                            <btn-comp :btnType="btnType" :text="text" :btnColor="btnColor" class="googleBtn my-3" @click.prevent="signInWithGoogle"></btn-comp>
                            <btn-comp :btnType="btnType" :text="text1" :btnColor="btnColor" class="fbBtn"></btn-comp>
                            </div>

                            <div class="text-center mb-3 fs-6 fg">
                            <a href="#">Forgot your Password?</a>
                            </div>

                        <h5 id="account" class="text-center fw-bold">Don't have an account?<router-link id="link" :to="{name: 'signup'}" class="text-decoration-none"> Sign up</router-link></h5>
                    </form>
                </div>
            </div>

            <div class="col-md-6 login-image">
                <img src="../assets/loginimage.png" alt="">
            </div>
        </div>
    </div>  
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component"
import alert from '@/components/UI/alert.vue'
import topNav from '@/components/topNav.vue'
import btnComp from '@/components/UI/btnComp.vue'
// import axios from 'axios'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    @Options({
        components: {
            alert,
            topNav,
            btnComp,
        }
    })
    export default class login extends Vue{
        passwordType = 'password'
        email = ""
        password = ""
        alertTitle = ""
        alertType = ""
        alertShow = false
        btnType = "button"
        btnType1 = "submit"
        text = "Log in with Google"
        text1 = "Log in with Facebook"
        text2 = "Log in"
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
            loginAction(){
                const auth = getAuth()
                signInWithEmailAndPassword(auth, this.email, this.password)
                    .then((res) => {
                        console.log(res, "Successfully logged in");
                        console.log(auth.currentUser);
                        this.alertTitle = "Success !, You're Welcome"
                        this.alertType = "Success"
                        this.alertShow = true
                        setTimeout(() => {  
                                this.alertShow = false  
                                this.$router.push('/about')    
                        },3000) 
                    })
                    .catch((err) => {
                        console.error(err)
                        console.log(err.code);
                        // this.alertTitle = err.code
                        this.alertType = "danger"
                        this.alertShow = true
                        switch (err.code) {
                            case "auth/invalid-email":
                                this.alertTitle = "Invalid email";
                                break;
                            case "auth/user-not-found":
                                this.alertTitle = "No Account with that email was found";
                                break;
                            case "auth/wrong-password":
                                this.alertTitle = "Incorrect password";
                                break;
                            default:
                                this.alertTitle = "Email or password was incorrect";
                                break;
                        }
                        setTimeout(() => {         
                                this.alertShow = false
                                this.email = ''
                                this.password = ''
                        },3000) 
                    });
            }
            signInWithGoogle(){
                const provider = new GoogleAuthProvider();
                signInWithPopup(getAuth(), provider)
                    .then((res) => {
                        console.log(res.user);
                        this.alertTitle = "Success !, You're Welcome"
                        this.alertType = "Success"
                        this.alertShow = true
                        setTimeout(() => {  
                                this.alertShow = false  
                                this.$router.push('/about')    
                        },3000) 
                    })
                    .catch((err) => {
                        console.log(err.code, "what's the err", err);
                    })
            }
    }
</script>

<style scoped>

img{
    max-width: 100%;
    height: 100%;
}

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
    color: red !important;
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

@media (min-width: 400px) and (max-width: 767px) {
    .login-image img{
        display: none;
    }

    .form{
        padding: 0 80px;
    }
}

@media screen and (max-width: 399px){
    .form{
        padding: 0 30px;
    }

    h5{
        font-size: 1rem;
    }
    .login-image img{
        display: none;
    }
} 
</style>