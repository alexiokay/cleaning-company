<template lang="pug">
div(class="w-auto h-auto flex flex-col items-center justify-center lg:pt-[2rem]")
    div(v-editable="blok" class="w-full items-center justify-center flex flex-col gap-y-6 text-start")
        div(class="flex flex-col items-start justify-center w-full h-auto  lg:h-[19rem] lg:bg-[#764abc] relative py-4 lg:py-[4rem]  px-4 lg:px-[3.5rem] lg:text-white gap-y-6  rounded-lg")
         
          p(class="container mx-auto  text-[1.4rem] lg:text-5xl z-30  font-semibold lg:font-bold leading-7 lg:leading-none") {{ blok.title }}
          div(class="flex  gap-x-2 w-full items-center")
            nuxt-img(:src="'https:' + blok.author[0].avatar" class="rounded-full object-cover h-[3.5rem] w-[3.5rem]" width="150" height="150" format="webp" alt="author avatar" )
            div(class="flex-col h-full flex justify-start items-start gap-y-1") 
              p(class="font-semibold") {{blok.author[0].name}}
              p(class="text-slate-500 lg:text-white text-sm") {{ blokinfo.published_at.split('T')[0] }} &#8226; {{ readTime() }} min read
         
          //- div(class="w-full h-full z-20 absolute top-0 header-background ")
          
        //- div(class="container mx-auto mb-12 text-3xl text-start leading-[2.9rem] w-4/5") {{ blok.description }}
    
    div(class="flex flex-col-reverse lg:flex-row w-full justify-between gap-x-[2rem] px-4 lg:px-0  gap-y-8  lg:mt-[5rem] ")
      div(class="w-full min-w-[16rem] xl:w-[17rem]  flex flex-col gap-y-6")
        div(class="flex flex-col gap-y-2")
          p See our services:
          div(class="w-[100%] aspect-[13/16]  rounded-[24px] border-[9px] relative overflow-hidden text-white " :style="{'border-color': serviceWindow?.color}")
                //- nuxt-img( class="w-full h-full object-cover" alt="step.title" title="step.title" format="webp")
                nuxt-img(:src="serviceWindow?.image" width="500" height="500" format="webp" alt="logo" class=" w-full h-full object-cover")
                div(class="w-full h-full  shrink-0 absolute top-0 left-0 flex flex-col px-8 py-6 gap-y-4 justify-end" :style="{'background': serviceWindow?.griadent}")
                    
                    h4.text-xl.font-bold {{ serviceWindow?.title }}
                    p {{ serviceWindow?.description}}
                    button(class="bg-white rounded-[8px] py-[10px] px-[24px]  ml-auto w-auto text-[#4E37E3] font-bold") GET

        div(class="flex flex-col w-full gap-y-3")
          p(class="text-xl font-bold") Subscribe Our Newsletter
          p Enter your details to get business inspiration, trending solutions, and consulting tips delivered to your inbox
          input(class="mt-4 w-auto  h-[3rem] border-[1px] rounded-[7px] text-center  bg-transparent border-black py-2 px-6 focus:outline-none text-white text-lg" placeholder="Enter your email address")
          buton(class="bg-[#4E37E3] text-white rounded-[8px] py-[16px] px-[24px]  w-auto font-bold text-center") Subscribe
          
        div(class="flex flex-col w-full gap-y-3")
          p(class="text-xl font-bold") Topics 
     
          p(v-for="topic in 7") {{ topic }}

        div(class="flex flex-col w-full gap-y-3")
          p(class="text-xl font-bold") Popular Articles
          p(v-for="article in 7") {{ article }}
      div(class="w-full flex flex-col gap-y-4 lg:gap-y-6")
        
          
        LazyBlogArticleLikeShare(:reactions="reactions" @react="react" @resetOrLike="resetOrLike" @share="shareArticle")
          
       
        p(class="text-lg lg:text-5xl   font-semibold lg:font-bold lg:leading-none") {{ blok.description }}
        div(class="w-[100vw] -mx-4 lg:-mx-0 lg:w-full")
          nuxt-img(:src="'https:' + blok.image"  provider="storyblok" class=" mt-[1rem] top-0 left-0 object-cover h-[18rem] lg:h-[25rem] w-full" :alt="blok.image.alt" :title="blok.title" :width="blok.width" :height="blok.height" format="webp")
        div(v-html="resolvedRichText" class="lg:mt-[3rem]  mb-12 lg:text-2xl text-start leading-[1.9rem] w-full")
        

    
        ContentBreakerNearestServices

    
    hr(class="w-4/5 h-[2px] bg-slate-200 my-12")
    //- div.blog__article_similar(class="flex flex-col  w-4/5")
    //-     p(class="text-4xl text-center  ") Similar articles

</template>

<script setup lang="ts">
import IcBaselineFacebook from "~icons/ic/baseline-facebook";
import IconoirInstagram from "~icons/iconoir/instagram";
import RiTwitterXFill from "~icons/ri/twitter-x-fill";
import { nextTick } from "vue";
import servicesWindows from "@/utils/servicesWindows.json";

const selectRandomServiceWindow = () => {
  const randomNumber = Math.floor(Math.random() * servicesWindows.length);
  return servicesWindows[Math.floor(Math.random() * servicesWindows.length)];
};

const isEmojisOptions = ref(false);
const toggleEmojiOptions = () => {
  isEmojisOptions.value = !isEmojisOptions.value;
};

const resetOrLike = () => {
  // if any reaction is clicked, reset all reactions
  if (
    Object.values(reactions.value).some((reaction) => reaction.isUserClicked)
  ) {
    Object.values(reactions.value).forEach((reaction) => {
      reaction.isUserClicked = false;
    });
  } else {
    reactions.value.like.isUserClicked = true;
  }
};

const react = (reaction) => {
  const reactionTypes = ["like", "super", "laugh", "wow", "sad", "angry"];

  if (reactionTypes.includes(reaction)) {
    // Reset all reactions except the current one
    reactionTypes.forEach((type) => {
      if (type !== reaction) {
        reactions.value[type].isUserClicked = false;
        reactions.value[type].count =
          reactions.value[type].count > 0 ? reactions.value[type].count - 1 : 0;
      }
    });

    // Toggle the current reaction
    const currentReaction = reactions.value[reaction];
    if (currentReaction.isUserClicked) {
      currentReaction.count -= 1;
    } else {
      currentReaction.count += 1;
    }
    currentReaction.isUserClicked = !currentReaction.isUserClicked;
  }
};

const reactions = ref({
  like: {
    count: 0,
    isUserClicked: false,
  },
  super: {
    count: 0,
    isUserClicked: false,
  },
  laugh: {
    count: 0,
    isUserClicked: false,
  },
  wow: {
    count: 0,
    isUserClicked: false,
  },
  sad: {
    count: 0,
    isUserClicked: false,
  },
  angry: {
    count: 0,
    isUserClicked: false,
  },
});

const serviceWindow = ref();

onMounted(() => {
  serviceWindow.value = selectRandomServiceWindow();
});

const shareArticle = () => {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: props.blok.title,
        text: props.blok.description,
        url: window.location.href,
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing:", error));
  }
};

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
  blokinfo: {
    type: Object,
    required: true,
  },
});

const readTime = () => {
  const wordsPerMinute = 200;
  const textLength = props.blok.content.split(" ").length;
  return Math.ceil(textLength / wordsPerMinute);
};

// set text to UPPER CASE

const resolvedRichText = computed(() => {
  return props.blok.content;
});
</script>

<style lang="scss" scoped>
input::placeholder {
  color: black;
}

.hover-text-animation {
  transition: all 0.1s;
}
</style>
