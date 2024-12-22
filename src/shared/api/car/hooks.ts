import type { FilterSchema } from './types'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import queryString from 'query-string'
import { CarFetcher, carKeys, CarsFetcher } from './query'

export function useCar(carId: string) {
  return useQuery({
    queryKey: carKeys.GetCar,
    queryFn: () => CarFetcher(carId),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  })
}

export function useCars(
  page = 1,
  filters: Partial<FilterSchema>,
  limit: number,
) {
  const queryParams = queryString.stringify({
    page,
    limit,
    ...filters,
  }, { arrayFormat: 'bracket' })
  return useQuery({
    queryKey: carKeys.GetCars(page, filters, limit),
    queryFn: () => CarsFetcher(queryParams),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  })
}
