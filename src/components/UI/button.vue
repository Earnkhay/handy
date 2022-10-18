<template>
    <div class="text-center">
      <v-btn
        rounded
        color="primary"
        dark
      >
        Rounded Button
      </v-btn>
    </div>
  </template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {    
  },
})
export default class button extends Vue {}
</script>