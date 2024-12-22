import { z } from 'zod'

export const carSchema = z.object({
  id: z.number(),
  title: z.string(),
  power: z.number(),
  features: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
  fuel_type: z.object({
    id: z.number(),
    name: z.string(),
  }),
  transmission: z.object({
    id: z.number(),
    name: z.string(),
  }),
  drive: z.object({
    id: z.number(),
    name: z.string(),
  }),
  registration_date: z.string(),
  mileage: z.number(),
  location_country: z.object({
    id: z.number(),
    name: z.string(),
  }),
  seller: z.object({
    id: z.number(),
    type: z.object({
      id: z.number(),
      name: z.string(),
    }),
    country: z.object({
      id: z.number(),
      name: z.string(),
    }),
    rating_average: z.string().nullable().optional(),
    rating_count: z.union([z.number(), z.string()]).nullable().optional(),
    offers_count: z.string().optional(),
  }),
  uniform_price: z.number(),
  images: z.array(
    z.object({
      id: z.number(),
      path: z.string(),
    }),
  ),
  power_hp: z.number().nullable(),
  fuel_consumption_combined: z.number().nullable(),
})

export const carsSchema = z.object({
  id: z.string(),
  title: z.string(),
  power: z.number(),
  features: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    }),
  ),
  fuel_type: z.object({
    id: z.string(),
    name: z.string(),
  }),
  transmission: z.object({
    id: z.string(),
    name: z.string(),
  }),
  drive: z.object({
    id: z.string(),
    name: z.string(),
  }),
  registration_date: z.string(),
  mileage: z.number(),
  location_country: z.object({
    id: z.string(),
    name: z.string(),
  }),
  seller: z.object({
    id: z.string(),
    type: z.object({
      id: z.string(),
      name: z.string(),
    }),
    country: z.object({
      id: z.string(),
      name: z.string(),
    }),
    rating_average: z.number().nullable(),
    rating_count: z.number().nullable(),
    offers_count: z.number(),
  }),
  uniform_price: z.number(),
  images: z.array(
    z.object({
      id: z.number(),
      path: z.string(),
    }),
  ),
  power_hp: z.number().nullable(),
})

export const filterSchema = z.object({
  'make': z.array(z.number()),
  'model-family': z.array(z.number()),
  'price-from': z.number(),
  'price-to': z.number(),
  'sort': z.string(),
  'registration-date-from': z.number(),
  'registration-date-to': z.number(),
  'mileage-from': z.number(),
  'mileage-to': z.number(),
  'transmission': z.array(z.number()),
  'fuel-type': z.array(z.number()),
  'direction': z.string(),
  'color': z.array(z.number()),
})

export type FilterSchema = z.infer<typeof filterSchema>

export type CarsSchema = z.infer<typeof carsSchema>

export type CarSchema = z.infer<typeof carSchema>
