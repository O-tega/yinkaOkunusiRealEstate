import { getRates } from "@/service/rates";
import { useQuery } from "@tanstack/react-query";

const useCurrency = () => {
  const rates = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });
  const conversion = rates?.data?.data[0].currencyRates;

  const getUserRateByCode = (codeName) => {
    const currency = conversion?.find((rate) => rate.code === codeName);
    return currency ? currency.userRate : null;
  };

  const conversionRate = getUserRateByCode("USD-NGN");

  return {
    conversionRate,
  };
};

export default useCurrency;
