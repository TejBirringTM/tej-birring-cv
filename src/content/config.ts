import { defineCollection, z } from "astro:content";

const ContractType =    z.literal("Permanent")          // permanent full-time or part-time staff member
                        .or(z.literal("Contractor"))    // contractor or freelancer
                        .or(z.literal("Founder"))       // founder or co-founder
                        ;

// const Location = z.union([
//     z.object({
//         type: z.literal("Remote")
//     }),
//     z.object({
//         type: z.literal("On-Site"),
//         location: z.string(),
//     })
// ]);

const professionalExperienceCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        company: z.string().nullish(),
        "contract type": ContractType,
        location: z.string(),
        from: z.object({
            month: z.number().int().min(1).max(12),
            year: z.number()
        }),
        to: z.object({
            month: z.number().int().min(1).max(12),
            year: z.number()
        }).or(z.literal("Present")),
        skills: z.array(z.string()).nullish()
    })
});

export const collections = {
    "professional-experience": professionalExperienceCollection,
}