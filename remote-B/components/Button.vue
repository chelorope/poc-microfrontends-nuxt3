<template>
  <div style="border: 1px solid #4caf50">
    Remote-B
    <br />
    <div>count: {{ counter.count }}</div>
    <div>
      <button id="remoteB" @click="counter.increase()">increase</button>
    </div>
  </div>
</template>

<script>
// import {counterState} from '../store'

export default {
  setup() {
    const counterState = () => {
      const state = reactive({
        count: 0,
        increase() {
          state.count++;
        },
      });
      return state;
    };
    let counter = counterState();
    return { counter };
  },
};
</script>