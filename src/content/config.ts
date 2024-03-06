import { z, defineCollection } from "astro:content"

const demoCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string())
    })
})
const recipeCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        image: z.string(),
        ingredients: z.array(z.string())
    })
})

export const collections = {
    demo: demoCollection,
    recipes: recipeCollection
}
