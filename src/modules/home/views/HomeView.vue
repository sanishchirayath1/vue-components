<script setup lang="ts">
import TheWelcome from '../../../components/TheWelcome.vue';
import example from '@/tools/example';

example.logger();
example.setCurrentCount(7);
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
