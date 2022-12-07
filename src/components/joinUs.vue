<template>
  <div class="features-container">
    <div class="container">
      <h3 class="feature-head">
        Join Handy today and take full control over your project
      </h3>
      <div class="feat-desc">15-day free trial. No credit card required</div>

      <div class="input-group mb-3">
        <input
          type="email"
          size="50"
          class="form-control-lg"
          placeholder="Enter your work email"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-primary btn-lg"
          type="button"
          id="button-addon2"
        >
          Start Now
        </button>
      </div>
      <p class="close-text">Become part of our ever growing community. Join us on Handy</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class joinUS extends Vue {}
</script>

<style>
.features-container {
  margin: 4em 0;
}
.feature-head {
  font-size: 5em;
  color: #2764ae;
  text-align: center;
}

.feat-desc {
    text-align: center;
  margin: 2em;
  margin-left: 15em;
  font-size: 130%;
  width: 50%;
}

.input-group {
    margin-left: 20em;
    margin-right: 18em;

}

.close-text {
    text-align: center;
  margin: 2em;
  margin-left: 15em;
  font-size: 130%;
  width: 50%;
}

</style>
