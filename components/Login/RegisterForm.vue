<template lang="pug">
form(class="bg-white w-full h-full shadow-[0px_0px_2px_1px_rgb(0,0,0,0.15)] rounded-xl px-8 pt-6 pb-3 mb-4")
            h1(class="mb-7 text-3xl  font-itim -ml-2") Register
            input#register-first-name(class="focus:outline-none focus:shadow-outline shadow appearance-none border rounded-full  w-full py-2 px-3 text-gray-700 leading-tight" type="text", placeholder="E-mail or login")
            p(class="text-xs text-red-700 mt-2 mb-2") Pole jest wymagane. Uzupełnij dane.
            input#register-last-name.shadow.appearance-none.border.border-red-500.rounded-full.w-full.py-2.px-3.text-gray-700.leading-tight(class="mt-3 focus:outline-none focus:shadow-outline" type="password", placeholder="Password")
            p(class="text-xs text-red-700 mt-2") Pole jest wymagane. Uzupełnij dane.
            input#register-email.shadow.appearance-none.border.border-red-500.rounded-full.w-full.py-2.px-3.text-gray-700.leading-tight(class="mt-3 focus:outline-none focus:shadow-outline" type="password", placeholder="Password")
            p(class="text-xs text-red-700 mt-2") Wpisz adres e-mail.
            input#register-password.shadow.appearance-none.border.border-red-500.rounded-full.w-full.py-2.px-3.text-gray-700.leading-tight(class="mt-3 focus:outline-none focus:shadow-outline" type="password", placeholder="Password")
            p(class="text-xs text-red-700 mt-2") Wpisz hasło. Powinno składać się minimum z 8 znaków.
            p(class="text-xs text-red-700 mt-1") Hasło powinno mieć minimum 8 znaków

            div#agreements(class="flex flex-col w-full h-auto space-y-4 mt-4")
                p(class="text-base text-black font-semibold") Zgody formalne
                div(class="flex items-center justify-start w-full h-auto")           
                    input#agreement(@click="setAllChecked" :checked="areAllChecked" type="checkbox", class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600")
                    p( class="text-sm w-5/6 text-black-700 ml-2 font-semibold") Zaznacz wszystkie
                div(class="flex items-center justify-start w-full h-auto")           
                    input#agreement(@click="checkAllChecked($event)" type="checkbox", :checked="areAllChecked "  class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600")
                    p(class="text-xs w-5/6 text-gray-700 ml-2") Akceptuje regulamin sklepu *
                div(class="flex items-center justify-start w-full h-auto")           
                    input#agreement(@click="checkAllChecked($event)" type="checkbox", :checked="areAllChecked" class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600")
                    p(class="text-xs w-5/6 text-gray-700 ml-2") Chcę otrzymywać informacje o aktualnych ofertach oraz promocjach w wiadomości e‑mail Więcej

                div(class="flex items-center justify-start w-full h-auto")           
                    input#agreement(@click="checkAllChecked($event)" type="checkbox",:checked="areAllChecked"  class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600")
                    p(class="text-xs w-5/6 text-gray-700 ml-2") Chcę otrzymywać ofertę dopasowaną do moich potrzeb Więcej
                        
            button.bg-blue-500(class="hover:bg-blue-700 mt-4 text-white font-base text-sm py-[0.6rem] w-full px-4 rounded-full focus:outline-none focus:shadow-outline" type="button")
                p Register
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
const areAllChecked = ref(false);

const checkAllChecked = (event: any) => {
  const agreements = document.querySelectorAll(
    "#agreements input"
  ) as NodeListOf<HTMLInputElement>;

  let agreementsChecked = 0;
  agreements.forEach((agreement) => {
    if (agreement.checked === true && agreement !== agreements[0])
      agreementsChecked++;
  });

  console.log("agreementsChecked", agreementsChecked);
  if (agreementsChecked === agreements.length - 1) {
    console.log("all checked");

    agreements[0].checked = true;
  } else if (agreementsChecked !== agreements.length) {
    agreements[0].checked = false;
    console.log("not all checked");
  } else {
    console.log("all checked");

    agreements[0].checked = true;
  }
};
const setAllChecked = () => {
  let agreementsChecked = 0;
  const agreements = document.querySelectorAll(
    "#agreements input"
  ) as NodeListOf<HTMLInputElement>;
  agreements.forEach((agreement) => {
    if (agreement.checked === true && agreement !== agreements[0])
      agreementsChecked++;
  });

  if (agreementsChecked < agreements.length - 1) {
    areAllChecked.value = true;
    agreements.forEach((agreement) => {
      if (agreement !== agreements[0]) agreement.checked = true;
    });
  } else {
    agreements.forEach((agreement) => {
      if (agreement !== agreements[0]) agreement.checked = false;
    });
  }
};
</script>

<style lang="scss"></style>
