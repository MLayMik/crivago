import { BASE_URL } from '../lib'
import { normalizeCar } from './normalizers'
import { carSchema } from './types'

export const carKeys = {
  GetCar: ['car'],
} as const

export const carEndpoints = {
  getCar: (carId: string) => `/api/listedcars/${carId}`,
}

export async function CarFetcher(carId: string) {
  return normalizeCar(
    carSchema
      .parse(await fetch(`${BASE_URL}${carEndpoints.getCar(carId)}`)
        .then(res => res.json())),
  )
}
