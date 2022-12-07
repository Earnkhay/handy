<template>
  <section class="">
    <div class="container text-center text-md-start mt-2">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <img
            src="../assets/handylogo.png"
            class="img-responsive"
            alt="logo"
          />
          <p>Join our newsletter to stay up to date on features and releases</p>
          <form class="form-inline">
            <div class="form-group mb-2">
              <label for="staticEmail2" class="sr-only">Email</label>
            </div>
            <div class="col-sm-8">
              <label for="inputemail" class="sr-only">Enter your email</label>
              <input
                type="email"
                class="form-control"
                id="inputemail"
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" class="btn btn-primary mb-2">
              Subscribe
            </button>
          </form>
          <p>
            By subscribing you agree to our Privacy Policy and provide consent
            to receive updates from our company
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="fw-bold mb-4 fs-4 text-primary">Handy</h6>
          <p>
            <a href="#!" class="text-reset">Download</a>
          </p>
          <p>
            <a href="#!" class="text-reset">About Us</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Product Roadmap</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Reviews</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Status</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="fw-bold mb-4 fs-4 text-primary">Features</h6>
          <p>
            <a href="#!" class="text-reset">Dashboard</a>
          </p>
          <p>
            <a href="#!" class="text-reset">To-do-list</a>
          </p>
          <p>
            <a href="#!" class="text-reset">link</a>
          </p>
          <p>
            <a href="#!" class="text-reset">link</a>
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="fw-bold mb-4 fs-4 text-primary">Follow Us</h6>
          <div class="text-lowercase">
            <a href="#" class="text-reset">
              <i class="fab fa-facebook-f mb-4"> Facebook</i>
            </a>
            <a href="#" class="text-reset">
              <i class="fab fa-twitter mb-4"> Twiter</i>
            </a>
            <a href="#" class="text-reset">
              <i class="fab fa-instagram mb-4"> Instagram</i>
            </a>
            <a href="#" class="text-reset">
              <i class="fab fa-linkedin mb-4"> LinkedIn</i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">2022 Handy. All rights reserved.</div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class footerComp extends Vue {}
</script>

<style></style>
