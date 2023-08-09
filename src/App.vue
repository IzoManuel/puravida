<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(() => {
  // Store the scroll position in local storage
  localStorage.setItem('scrollPosition', window.scrollY);
});

onMounted(() => {
  // Retrieve the scroll position from local storage
  const scrollPosition = localStorage.getItem('scrollPosition');
   // console.log(`SCROLL POS: ${JSON.stringify(scrollPosition)}`)
  // Scroll to the saved position
  if (scrollPosition !== null) {
    window.scrollTo(0, parseInt(scrollPosition));
  }
});

</script>

<template>
<router-view/>
</template>

<style scoped>
</style>
