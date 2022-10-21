<template>
    <top-nav/>
    <div class="container-fluid p-0">
        <div class="row gx-0">
            <div class="col-md-6 form mt-5">
                <div class="text-center">
                    <h2 id="header" class="mb-3 mt-3 text-primary fw-bold">Login</h2>
                    <alert v-if="alertShow" :alertText="alertTitle" :alertType="alertType"></alert><br>
                </div>
                <div class="row justify-content-center ">
                        <form action="" id="login-form" class=" col-md-10 text-xs-center"> 
                            <div class="emailLogin">  
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
                            <btn-comp :btnType="btnType1" :text="text2" :btnColor="btnColor2"></btn-comp>
                            </div>
                            </div>

                            <div class="mb-3">
                            <btn-comp :btnType="btnType" :text="text" :btnColor="btnColor" class="googleBtn my-3"></btn-comp>
                            <btn-comp :btnType="btnType" :text="text1" :btnColor="btnColor" class="fbBtn"></btn-comp>
                            </div>

                            <div class="text-center mb-3 fs-6 fg">
                            <a href="#">Forgot your Password?</a>
                            </div>

                        <h5 id="account" class="text-center fw-bold">Don't have an account?<a href="" id="link" @click.prevent="" class="text-decoration-none"> Sign up</a></h5>
                    </form>
                </div>
            </div>

            <div class="col-md-6 d-none d-sm-block login-image">
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
import axios from 'axios'
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
            // validatePassword() {
            //         if (this.regPassword.test(this.password)) {
            //             console.log('valid password');   
                        
            //         }else if(this.password == ""){
            //             this.alertTitle = "Please input Password"
            //             this.alertType = "Danger"
            //             this.alertShow = true
            //             setTimeout(
            //                 () => {
            //                     this.alertShow = false
            //             },3000)
            //             console.log('blur event for no password entered');
                        
            //         }else{
            //             this.alertTitle = "Password should be at least 6 characters long, contain at least one uppercase & one digit"
            //             this.alertType = "Danger"
            //             this.alertShow = true
            //             setTimeout(
            //                 () => {
            //                     this.alertShow = false
            //                     this.password = ""
            //             },3000)
            //             console.log('blur event for wrong password format');
            //         }
            //     }
            // checkPageTypePassword() {
            //     if (this.pageType == 'signUp') {
            //         this.validatePassword()
            //     }else {
            //         return null
            //     }
            // }
            submitAction(){
                console.log('hi');
                
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

/* form button{
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    color: white;
} */

.emailLogin{
    border-bottom: solid 1px black;
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

@media (min-width: 400px) and (max-width: 767px) {
    .login-image img{
        display: none;
    }

    .form{
        padding: 0 70px;
    }
}

@media screen and (max-width: 399px){
    .form{
        padding: 0 30px;
    }

    h5{
        font-size: 1rem;
    }
} 
</style>