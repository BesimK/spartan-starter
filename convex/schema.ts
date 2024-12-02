import { v } from 'convex/values';
import { defineSchema, defineTable } from 'convex/server';
import { authTables } from '@convex-dev/auth/server';

const schema = defineSchema({
  ...authTables,

  restaurants: defineTable({
    name: v.string(),
    ownerId: v.id('users'),
  }),

  categories: defineTable({
    name: v.string(),
    parentId: v.optional(v.id('categories')),
    restaurantId: v.id('restaurants'),
    image: v.optional(v.id('_storage')),
  }),

  products: defineTable({
    name: v.string(),
    price: v.number(),
    description: v.string(),
    categoryId: v.optional(v.id('categories')),
    image: v.optional(v.id('_storage')),
    restaurantId: v.id('restaurants'),
    isActive: v.boolean(),
  }),

  variants: defineTable({
    name: v.string(),
    price: v.number(),
    description: v.string(),
    productId: v.id('products'),
    image: v.optional(v.id('_storage')),
    isActive: v.boolean(),
  }),

  addons: defineTable({
    name: v.string(),
    price: v.number(),
    description: v.string(),
    productId: v.array(v.id('products')),
    restaurantId: v.id('restaurants'),
  }),

  allergens: defineTable({
    name: v.string(),
    description: v.string(),
    productId: v.array(v.id('products')),
    restaurantId: v.id('restaurants'),
  }),

  blogs: defineTable({
    title: v.string(),
    body: v.string(),
  })
});

export default schema;