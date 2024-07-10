<script setup lang="ts">

import

import {useSocialize} from "~/composables/useSocialize";

const api = useSocialize()

const request:CreateAttendeeRequest = {}
api.createAttendee()
</script>

<template>
Ich bin neu
</template>

<style scoped>

</style>