// 从 `astro:content` 中导入实用工具
import { z, defineCollection } from "astro:content";
// 为要验证的每个集合定义模式。
const postsCollection = defineCollection({
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
});
// 导出一个 `collections` 对象来注册集合
export const collections = {
  posts: postsCollection,
};