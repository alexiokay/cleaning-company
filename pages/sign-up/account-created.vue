<template lang="pug">
LoginBase 
    template(v-slot:all)
        div(class="-mx-[3rem] gap-y-8")
            h1(class=" font-bold text-[3rem]") Account created!
            p(class="text-[1.4375rem] text-center gap-x-2 flex flex-wrap justify-center") To activate them, check your email
                span and click on the verification link.
            p(class="text-base text-center mt-[3rem] gap-x-2 flex justify-center") Haven't received your email?
                button(class="font-bold underline" @click="writeToUs") Write to us!
</template>

<script setup lang="ts">
const mail = useMail();

const writeToUs = () => {
  console.log("write to us");
  mail.send({
    from: "John Doe",
    subject: "Incredible",
    text: "This is an incredible test message",
  });
};
</script>

<style lang="scss"></style>
