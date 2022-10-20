<template>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>
          </h6>

          <p>Join our newsletter to stay up to date on features and releases</p>
          <form class="form-inline">
            <div class="form-group mb-2">
              <label for="staticEmail2" class="sr-only">Email</label>
            </div>
            <div class="form-group mx-sm-3 mb-1">
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
          <h6 class="text-uppercase fw-bold mb-4">Handy</h6>
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
          <h6 class="text-uppercase fw-bold mb-4">features</h6>
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

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="fw-bold mb-4">FOLLOW US</h6>
          <div>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-facebook-f"> Facebook</i>
            </a>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-twitter"> Twiiter</i>
            </a>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-instagram"> Instagram</i>
            </a>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-linkedin"> LinkedIn</i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-left p-4">2022 Handy. All rights reserved.</div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  
})
export default class footer extends Vue {}
</script>

<style></style>
