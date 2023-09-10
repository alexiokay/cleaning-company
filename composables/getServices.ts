import Services from "@/utils/services.json";

export const getServices = async () => {
  const services = Object.values(Services);
  console.log(services);
  return services;
};
