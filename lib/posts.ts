import rehypeSlug from "rehype-slug";
import { compileMDX } from "next-mdx-remote/rsc";
import Video from "@/components/Video";
import CustomImage from "@/components/CustomImage";
import Gallery from "@/components/Gallery";

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/FlemmingKrogOlsen/blogposts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    subtitle: string;
    date: string;
    tags: string[];
    image: string;
    price: string;
    areal: string;
  }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
      Gallery,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      subtitle: frontmatter.subtitle,
      date: frontmatter.date,
      tags: frontmatter.tags,
      price: frontmatter.price,
      areal: frontmatter.areal,
      image: frontmatter.image,
    },
    content,
  };

  return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/FlemmingKrogOlsen/blogposts/git/trees/main?recursive=true",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
