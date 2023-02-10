<script lang="ts" setup>
import { computed } from 'vue'

const navLinkStyle = computed(() => {
  return 'text-gray-500 hover:text-gray-900 flex items-center gap-1'
})

const activeNavLinkStyle = computed(() => {
  return 'text-violet-500 fill-violet-500'
})
</script>
<template>
  <nav class="fixed bottom-0 pt-6 pb-8 border-[.5px] border-gray-200 shadow-violet-300 shadow-2xl w-full flex justify-around rounded-t-3xl items-center">
    <router-link :class="navLinkStyle" :active-class="activeNavLinkStyle" to="/"><IconHome class="w-8 h-8" /></router-link>
    <router-link :class="navLinkStyle" :active-class="activeNavLinkStyle" to="/my-bank"><IconWallet class="w-8 h-8" /></router-link>
    <router-link :class="navLinkStyle" :active-class="activeNavLinkStyle" to="/transfer"><IconTranser class="w-8 h-8" /></router-link>
    <router-link :class="navLinkStyle" :active-class="activeNavLinkStyle" to="/menu"><IconMenu class="w-8 h-8" /></router-link>
  </nav>
</template>
