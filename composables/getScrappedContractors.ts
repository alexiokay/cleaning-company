export const getScrappedContractors = async (page = 1, pageSize = 10) => {
  const config = useRuntimeConfig();

  console.log;
  const options = {
    method: "GET",
    headers: {
      Host: `${config.public.FETCH_HOST}`,
    },
  } as any;

  const contractors = await useFetch(
    `${config.public.API_URL}api/v1/contractors-scrapped/?page=${page}&page_size=${pageSize}`,
    options
  ).then((res) => {
    const data: any = res.data.value;
    const error = res.error.value;

    if (error) {
      // Handle error
      console.log(error);
      return [];
    } else {
      return data;
    }
  });

  return contractors;
};
