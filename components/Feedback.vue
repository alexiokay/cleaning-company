<template lang="pug">
div(class="w-[15rem] h-[10rem] flex flex-col bg-white rounded-[2rem] shadow-xl p-4 gap-y-4")
    p How would you rate your
        span experience?
    div(class="flex gap-x-2")
        TerrifiedIcon(class="w-[6rem] h-[6rem]")
        BadIcon(class="w-[6rem] h-[6rem]")
        NeutralIcon(class="w-[6rem] h-[6rem]")
        HappyIcon(class="w-[6rem] h-[6rem]")
        ExcitedIcon(class="w-[6rem] h-[6rem]")

</template>

<script setup lang="ts">
import TerrifiedIcon from "~icons/openmoji/astonished-face";
import BadIcon from "~icons/openmoji/frowning-face";
import NeutralIcon from "~icons/openmoji/expressionless-face";
import HappyIcon from "~icons/openmoji/grinning-face";
import ExcitedIcon from "~icons/openmoji/smiling-face-with-hearts";
</script>

<style lang="scss"></style>
