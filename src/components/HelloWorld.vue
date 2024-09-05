<docs>
---
title: Hello
slug: home
---
<h1>Hello world!</h1>
</docs>

<template>
1111
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
