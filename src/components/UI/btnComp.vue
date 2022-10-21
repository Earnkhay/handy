<template>
    <div class="d-grid gap-2">
    <button class="btn" :class="btnColor" :type="btnType">{{ text }}</button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {    
    text: String,
    btnType: String,
    btnColor: String,
  },
})
export default class btnComp extends Vue {}
</script>