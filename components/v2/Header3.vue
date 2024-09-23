<template lang="pug">
div(class="main-component w-full h-auto lg:h-[61rem] flex px-[4rem] xl:px-[10rem] 2xl:px-[16rem] 3xl:px-[20.8rem] py-[6rem] lg:py-[20rem] tracking-wide gap-x-[17rem]")
      div(class="flex flex-col lg:w-auto h-full text-[#FAFAFA] items-start justify-center gap-y-[2rem]")
          h2(class="text-[1.8rem] lg:text-[2.5rem] font-bold") Commercial Cleaning
          p.flex.flex-col Our commercial cleaning services
              span create happier empleyees and customers.
          p.flex.flex-col  We specialize in maintaining pristine office spaces,
              span retail establishments, medical facilities, and more.
          ButtonLearnMore2
      div(class="hidden lg:flex w-1/2 h-full items-center justify-end  ")
          div.relative
              <svg width="467" height="399" viewBox="0 0 367 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M287.25 148.402C287.474 145.465 285.274 142.903 282.337 142.68C279.4 142.456 276.838 144.656 276.614 147.593C276.391 150.53 278.59 153.092 281.527 153.316C284.464 153.539 287.027 151.339 287.25 148.402ZM11.318 127.405C11.5415 124.468 9.34172 121.906 6.40469 121.682C3.46765 121.459 0.905568 123.658 0.68207 126.595C0.458571 129.532 2.65829 132.094 5.59533 132.318C8.53236 132.541 11.0945 130.342 11.318 127.405ZM282.008 147L6.07588 126.003L5.92413 127.997L281.856 148.995L282.008 147Z" fill="#CBC3FD"/>
                  <path d="M279.338 152.657C281.911 154.09 285.159 153.166 286.592 150.592C288.025 148.019 287.1 144.771 284.527 143.338C281.953 141.905 278.705 142.829 277.272 145.403C275.84 147.976 276.764 151.224 279.338 152.657ZM358.405 10.6597C360.979 12.0926 364.227 11.1681 365.66 8.59462C367.093 6.02115 366.168 2.7733 363.595 1.34033C361.021 -0.0926337 357.773 0.831919 356.34 3.40538C354.907 5.97883 355.832 9.22669 358.405 10.6597ZM282.806 148.484L361.874 6.48649L360.126 5.51351L281.058 147.511L282.806 148.484Z" fill="#CBC3FD"/>
                  <path d="M282.801 142.735C279.894 142.256 277.15 144.223 276.67 147.129C276.19 150.035 278.157 152.78 281.064 153.26C283.97 153.739 286.715 151.772 287.194 148.866C287.674 145.96 285.707 143.215 282.801 142.735ZM258.868 287.738C255.962 287.258 253.218 289.225 252.738 292.132C252.258 295.038 254.225 297.782 257.132 298.262C260.038 298.742 262.782 296.775 263.262 293.868C263.742 290.962 261.775 288.218 258.868 287.738ZM280.945 147.835L257.013 292.837L258.987 293.163L282.919 148.16L280.945 147.835Z" fill="#CBC3FD"/>
              </svg>
              div(class="rounded-[1.5rem] px-[1.5rem] py-[1rem] bg-[#EEECFE] text-[#7863FA] font-bold absolute -top-[4rem] -right-[2rem]")
                  p Find offers today
              div(class="rounded-[1.5rem] px-[1.5rem] py-[1.5rem] flex flex-col bg-[#EEECFE] text-[#7863FA] absolute top-[7.3rem] -left-[10rem]")
                  p.font-bold  Over 1500
                  p Online offers
              div(class="rounded-[1.5rem] px-[1.5rem] pt-[1.5rem] pb-[3rem] flex flex-col bg-[#E1FF01]  text-[#3D2BB1] absolute -bottom-[8.3rem] right-[2.8rem] w-[18rem]")
                  p  interested in
                  p.font-bold.text-xl Commercial Cleaning?
                  div(class="rounded-full w-[98%] h-[] px-[1rem] py-[0.5rem] bg-white absolute -bottom-[0.3rem] mx-auto left-0 right-0  flex gap-x-2 text-[#7863FA] items-center")
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z" fill="#7863FA"/>
                      </svg>
                      input(type="text" placeholder="Let's find the right contractor" class="commercial-searchbar focus:outline-none border-0 bg-transparent w-full ")
                  


</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main-component {
  height: 100dvh;
  position: relative;
  background:
    linear-gradient(
      0deg,
      rgba(36, 25, 105, 0.4) 0%,
      rgba(36, 25, 105, 0.4) 100%
    ),
    url("/images/index-header-3.jpg"),
    lightgray 50% / cover no-repeat;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: initial; //initial
  background-position: center 0px;
}

::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #7863fa;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #7863fa;
  opacity: 1;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #7863fa;
  opacity: 1;
}
</style>
