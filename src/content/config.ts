import { defineCollection, z } from "astro:content";

const professionalExperienceCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        from: z.object({
            month: z.number().int().min(1).max(12),
            year: z.number()
        }),
        to: z.object({
            month: z.number().int().min(1).max(12),
            year: z.number()
        }).or(z.literal("present")),
        skills: z.array(z.string()).nullish()
    })
});

export const collections = {
    "professional-experience": professionalExperienceCollection,

}