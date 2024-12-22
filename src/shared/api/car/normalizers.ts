import type { Car } from '@/shared/types/models'

import type { CarSchema, CarsSchema } from './types'

import { pick } from '../lib'

export function normalizeCar(
  vehicle: CarSchema,
): Car {
  const {
    drive,
    fuel_type,
    location_country,
    mileage,
    power_hp,
    registration_date,
    uniform_price,
    fuel_consumption_combined,
  } = vehicle

  return {
    ...pick(
      vehicle,
      'id',
      'power',
      'title',
      'transmission',
      'features',
      'seller',
      'images',
      'features',
    ),
    powerHp: power_hp,
    registrationDate: registration_date,
    locationCountry: location_country,
    price: uniform_price,
    kmsDriven: mileage,
    driveType: drive,
    fuelType: fuel_type,
    fuelConsumptionCombined: fuel_consumption_combined,
  }
}

export function normalizeCars(
  cars: CarsSchema,
): Car {
  const {
    drive,
    fuel_type,
    location_country,
    mileage,
    power_hp,
    registration_date,
    uniform_price,
  } = cars
  return {
    ...pick(
      cars,
      'id',
      'power',
      'title',
      'transmission',
      'features',
      'seller',
      'images',
      'features',
    ),
    powerHp: power_hp,
    registrationDate: registration_date,
    locationCountry: location_country,
    price: uniform_price,
    kmsDriven: mileage,
    driveType: drive,
    fuelType: fuel_type,
  }
}
