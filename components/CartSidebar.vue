<template lang="pug">
transition(name="slide-fade")
    div#cart_sidebar(v-if="isCartOpen" class="w-[30rem] h-[calc(100dvh-6rem)] fixed right-0 top-[6rem] bg-[#fafafa] cart-shadow")
        div(class="w-full h-full relative flex flex-col items-start justify-start py-[3rem] px-6 gap-y-4")
            div(class="w-full absolute -top-[1px] left-0 h-[1px] bg-[#fafafa] top-shadow ")

        
            h3(class="text-3xl text-[#4e37e3] font-bold mb-4") Your shopping cart

            div(class="w-full h-[10rem] rounded-md border-[#18152667]  border-[1px] flex gap-x-4 items-center px-4")
                nuxt-img(src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJxogPLhiIfRg5tn76M-PwykXxCHMDLs8hwaUOeO_0mqoDpHJF99Y1mEFabRHeH2vyi9FzSJVtpPVCjjKVtxo72mIfo5QdIw9Spr0NU4mnZvRoBNk8BRW-Plil7EAAcG-flczVZwbf&usqp=CAc" alt="product" class="w-auto h-full object-cover rounded-md")
                div(class="flex flex-col  w-full h-full py-6")
                    div(class="w-full flex")
                        div(class="flex flex-col gap-y-1 w-full")
                            h4(class="text-lg font-bold") Product name
                            p(class="text-[#181526] text-sm") Product description
                    
                        
                        p(class="text-[#181526] text-lg fojnt-bold whitespace-nowrap mt-auto") &#8364 200
                    //- add and remove buttons
                    div(class="w-full flex mt-auto items-center gap-x-6")
                        div(class="flex gap-x-5 items-center ")
                            button(class="bg-[#e9e9e9] rounded-full text-black  h-9 w-9 text-xl") -
                            p(class="text-[#181 526] ") 1
                            button(class="bg-[#e9e9e9]  rounded-full text-black  h-9 w-9 text-xl") +
                        p(class="text-sm text-red-500 font-medium hover:cursor-pointer") Remove product
                    

            //- continue to shop
            p(class="text-[#181526] text-lg font-medium ml-auto") Total payable: &#8364 200
            div(class="flex flex-col w-full gap-y-4  mt-auto")
                p(class="text-[#4e37e3] text-lg mx-auto font-medium") Continue to shop
                button(class="w-full h-[4rem] bg-[#4E37E3] text-white font-bold rounded-[0.5rem] focus:outline-none ") Proceed to pay
           

</template>

<script setup lang="ts">
const props = defineProps({
  isCartOpen: Boolean,
});

const emit = defineEmits(["closeCart"]);
// create event click to close on body

const handleClickOutside = (e) => {
  const cartSidebar = document.querySelector("#cart_sidebar");
  const navbarCart = document.querySelector("#navbar_cart");

  if (cartSidebar && navbarCart) {
    if (!cartSidebar.contains(e.target) && !navbarCart.contains(e.target)) {
      emit("closeCart");
    }
  }
};

onMounted(() => {
  document.body.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.body.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="scss" scoped>
.top-shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
}
.cart-shadow {
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4);
}

.slide-fade-enter-active {
  animation: slide-fade-enter 0.3s ease-out;
}

.slide-fade-leave-active {
  animation: slide-fade-leave 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

@keyframes slide-fade-enter {
  0% {
    transform: translateX(30rem);
    opacity: 0;
  }
  15% {
    transform: translateX(20rem);
    opacity: 0.6;
  }
  30% {
    transform: translateX(10rem);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-fade-leave {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  15% {
    transform: translateX(10rem);
    opacity: 0.8;
  }
  30% {
    transform: translateX(20rem);
    opacity: 0.6;
  }
  100% {
    transform: translateX(30rem);
    opacity: 0;
  }
}
</style>
