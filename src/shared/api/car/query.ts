import type { FilterSchema } from './types'
import { z } from 'zod'
import { BASE_URL } from '../lib'
import { normalizeCar, normalizeCars } from './normalizers'
import { carSchema, carsSchema } from './types'

export const carKeys = {
  GetCar: ['car'],
  GetCars: (page: number, filters: Partial<FilterSchema>, limit: number) => [
    'cars',
    page,
    filters,
    limit,
  ],
} as const

export const carEndpoints = {
  getCar: (carId: string) => `/api/listedcars/${carId}`,
  getCars: (queryParams: string) => `/api/listedcars?${queryParams}`,
}

export async function CarFetcher(carId: string) {
  return normalizeCar(
    carSchema
      .parse(await fetch(`${BASE_URL}${carEndpoints.getCar(carId)}`)
        .then(res => res.json())),
  )
}

export async function CarsFetcher(queryParams: string) {
  return z.array(carsSchema)
    .parse(
      await fetch(
        `${BASE_URL}${carEndpoints.getCars(queryParams)}`,
      ).then(r => r.json()),
    )
    .map(car => normalizeCars(car))
}
