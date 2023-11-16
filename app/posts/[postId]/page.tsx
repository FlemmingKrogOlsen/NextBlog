import { getPostsMeta, getPostByName } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

import styles from '@/styles/PostPage.module.css'

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
            <p className={styles.homeLink}>
                <Link href="/">← Back to Home</Link>
            </p>
            <h2 className={styles.header}>{meta.title}</h2>
            <p className={styles.subTitle}>{meta.subtitle}</p>
            <article className={styles.article}>{content}</article>
            <section className={styles.section}>
                <h3 className={styles.sectionHeader}>Related:</h3>
                <div className={styles.tags}>{tags}</div>
            </section>
        </>
    )
}