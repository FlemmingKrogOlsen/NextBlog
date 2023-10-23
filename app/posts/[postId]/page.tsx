import { getPostsMeta, getPostByName } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

import 'highlight.js/styles/github-dark.css'
import { Article, Header, HomeLink, Section, SectionHeader, SubTitle, Tags } from "@/styles/PostPageStyle"

export const revalidate = 10

type Props = {
    params: {
        postId: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() //DeDuped!

    if (!posts) return []

    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params: { postId } }: Props) {

    const post = await getPostByName(`${postId}.mdx`)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.meta.title,
    }
}

export default async function Post({ params: { postId } }: Props) {

    const post = await getPostByName(`${postId}.mdx`)

    if (!post) notFound()

    const { meta, content } = post


    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <>
            <HomeLink>
                <Link href="/">← Back</Link>
            </HomeLink>
            <Header>{meta.title}</Header>
            <SubTitle>{meta.subtitle}</SubTitle>
            <Article>{content}</Article>
            <Section>
                <SectionHeader>Related:</SectionHeader>
                <Tags>{tags}</Tags>
            </Section>
        </>
    )
}