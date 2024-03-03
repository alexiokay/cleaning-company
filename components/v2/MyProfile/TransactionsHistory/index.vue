<template lang="pug">
div(class="flex flex-col w-full px-[7rem] py-[5rem] items-center justify-center bg-white rounded-[24px] gap-y-16 ")
    h2.text-4xl.font-bold  Transaction's History
    
    div(class="flex w-full flex-col max-h-[30.5vh] overflow-y-auto gap-y-2 px-6")
        div(v-for="(item, index) in dateSortedTransactions")
            V2MyProfileTransactionsHistoryItem( :key="item" :transaction="item" )
            hr( class="w-full h-[2px] bg-[#B7B6BC]" v-if="index !== dateSortedTransactions.length - 1")
</template>

<script setup lang="ts">
const transactions = ref([
  {
    serviceName: "Example service name ",
    serviceProvider: "and service provider",
    transferDate: "25-06-23",
    status: "Pending",
    amount: "240$",
  },
  {
    serviceName: "Example service name ",
    serviceProvider: "and service provider",
    transferDate: "25-06-23",
    status: "Pending",
    amount: "240$",
  },
  {
    serviceName: "Example service name ",
    serviceProvider: "and service provider",
    transferDate: "25-06-23",
    status: "Pending",
    amount: "240$",
  },
  {
    serviceName: "Example service name ",
    serviceProvider: "and service provider",
    transferDate: "25-06-23",
    status: "Pending",
    amount: "240$",
  },
  {
    serviceName: "Example service name ",
    serviceProvider: "and service provider",
    transferDate: "25-06-23",
    status: "Pending",
    amount: "240$",
  },
]);

const dateSortedTransactions = computed(() => {
  return transactions.value.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
});
</script>

<style lang="scss"></style>
