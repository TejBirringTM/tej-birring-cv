import { z } from "astro:content";

const baseSkillSchema = z.object({
    label: z.string(),
});
  
export type Skill = z.infer<typeof baseSkillSchema> & {
    children?: Skill[] | null;
};

export const Skill: z.ZodType<Skill> = baseSkillSchema.extend({
    children: z.lazy(() => Skill.array().nullish()),
});
