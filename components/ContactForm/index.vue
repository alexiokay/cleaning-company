<template lang="pug">
div(class="w-full h-auto px-4 md:px-[3rem] pt-[1.5rem] pb-[6rem] bg-[black] flex text-white flex-col gap-y-4 items-start justify-center")
    p(class="text-lg font-bold") Contact 
    div(class="flex w-full gap-x-8 justify-start")
        ContactFormInput(placeholder="Name"  @input="name = $event")
        ContactFormInput(placeholder="Email" @input="email = $event")
    div(class="flex w-full gap-x-8 justify-start")
        ContactFormInput(placeholder="Phone" @input="phone = $event")
        ContactFormInput(placeholder="Subject" @input="subject = $event")
    div(class="w-full")
        textarea(placeholder="Message" v-model="message" class="w-full h-[5rem] bg-transparent text-white  py-2 rounded-[0.5rem] focus:outline-none")
        div(class="w-full h-[1px] bg-[#a6a6a6] ")
    button(@click="sendToUs" class="w-full px-[1.5rem] py-[1rem] mt-[3rem]  bg-[#eeff00] text-black font-bold  focus:outline-none") Send to us

</template>

<script setup lang="ts">
const name = ref<string>("");
const email = ref<string>("");
const phone = ref<string>("");
const subject = ref<string>("");
const message = ref<string>("");

const sendToUs = async () => {
  // Send to api and use processing to stop spam and add captcha to stop bots. ask chat gpt fr best soliuton
};
</script>

<style lang="scss"></style>
