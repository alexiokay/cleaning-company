export const getLocalizations = async () => {
  const config = useRuntimeConfig();
  const options = {
    method: "GET",
    headers: {
      Host: `${config.public.FETCH_HOST}`,
    },
  } as any;
  let provinces = await useFetch(
    `${config.public.API_URL}api/v1/localizations-province/get-all?format=json`,
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

  return provinces;
};
