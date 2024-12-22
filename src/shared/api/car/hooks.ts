import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { CarFetcher, carKeys } from './query'

export function useCar(carId: string) {
  return useQuery({
    queryKey: carKeys.GetCar,
    queryFn: () => CarFetcher(carId),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  })
}
