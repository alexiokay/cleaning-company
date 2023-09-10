export const getServices = async () => {
  const config = useRuntimeConfig();
  const options = {
    method: "GET",
    headers: {
      Host: `${config.public.FETCH_HOST}`,
    },
  } as any;
  let serviceTypes = await useFetch(
    `${config.public.API_URL}api/v1/service_types`,
    options
  ).then((res) => {
    const data: any = res.data.value;

    const error = res.error.value;
    if (error) {
      // dealing error
      console.log(error);
    } else {
      return data;
    }
  });

  return serviceTypes;
};
