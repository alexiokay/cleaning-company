<template lang="pug">
div(class="flex flex-col lg:flex-row gap-y-4 items-start justify-center w-full px-4 lg:px-0 lg:w-[70%] lg:py-[8.88rem] gap-x-[3.06rem] relative")
    div(class="flex flex-col justify-start items-start h-full w-full lg:w-2/5 gap-y-2 ")
        h3(class="text-[1.8rem] lg:text-[2.5rem] font-bold flex flex-col") Meet our 
           span(class="text-[#7863FA]") Inteligent Assistants
        p.flex.flex-col We use AI to help you find perfect suited
            span Cleaning Service providers.
       
        div(class="z-50 my-4")
            div(class="relative ")
                hr(class="w-[50vw] h-[2px]  border-black shadow-lg")
                .point(class="absolute top-[-0.22rem] left-[100%] w-[0.45rem] h-[0.45rem] bg-black  border-black rounded-full")
        div(class="flex flex-col w-full h-full gap-y-10 mt-4")
            div(class="flex gap-x-[3rem] font-bold")
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19.525L6.75 16.775L6.72 16.755C6.14 16.165 6.14 15.215 6.72 14.635L11.46 9.895L15.7 14.135L10.96 18.875C10.39 19.455 9.46 19.455 8.87 18.895L8.24 19.525H4ZM15.91 5.435C16.5 4.855 17.45 4.855 18.03 5.435L20.16 7.555C20.74 8.145 20.74 9.095 20.16 9.685L16.86 12.975L12.62 8.735L15.91 5.435Z" fill="#161323"/>
                </svg>
                p Complete the form
            div(class="flex gap-x-[3rem] text-[#95939B] hover:cursor-pointer")
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3C6.5 3 2 6.58 2 11C2.05 13.15 3.06 15.17 4.75 16.5C4.75 17.1 4.33 18.67 2 21C4.37 20.89 6.64 20 8.47 18.5C9.61 18.83 10.81 19 12 19C17.5 19 22 15.42 22 11C22 6.58 17.5 3 12 3ZM12 17C7.58 17 4 14.31 4 11C4 7.69 7.58 5 12 5C16.42 5 20 7.69 20 11C20 14.31 16.42 17 12 17ZM17 12V10H15V12H17ZM13 12V10H11V12H13ZM9 12V10H7V12H9Z" fill="#161323"/>
                </svg>
                

                p Use Chatbot
            div(class="flex gap-x-[3rem] text-[#95939B] hover:cursor-pointer")
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9H16.1C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM5 5H6.5C6.6 5.9 6.8 6.8 7 7.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5ZM19 19C17.7 18.9 16.4 18.6 15.2 18.2L16.4 17C17.2 17.2 18.1 17.4 19 17.4V19ZM15 12H17C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7V9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12ZM19 12H21C21 7 16.97 3 12 3V5C15.86 5 19 8.13 19 12Z" fill="#161323"/>
                </svg>

                p Call Assistant
            div(class="flex gap-x-[3rem] text-[#95939B] hover:cursor-pointer")
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 17H18V10H22M23 8H17C16.7348 8 16.4804 8.10536 16.2929 8.29289C16.1054 8.48043 16 8.73478 16 9V19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20H23C23.2652 20 23.5196 19.8946 23.7071 19.7071C23.8946 19.5196 24 19.2652 24 19V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8ZM4 6H22V4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V17H0V20H14V17H4V6Z" fill="#161323"/>
                </svg>

                p Web Tool Assistant
    div(class="w-full lg:w-3/5 relative overflow-clip rounded-2 lg:rounded-[3rem] " )
        nuxt-img(src="images/header5-img.png" format="webp" alt="logo" class=" w-full border-[6px] border-white relative ")
        div(class="w-full h-full griadent absolute top-0 left-0 flex")
            p(class="w-[15.5rem] h-auto ml-[60%] mt-[24%] font-bold") How does AI work? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet. Vivamus arcu felis bibendum.

</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.griadent {
  background: linear-gradient(
    102deg,
    rgba(255, 253, 251, 0) -23.34%,
    #fffdfb 35.22%
  );
}
</style>
