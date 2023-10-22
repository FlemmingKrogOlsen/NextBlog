import getFormattedDate from "@/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

import 'highlight.js/styles/github-dark.css'
import styles from './page.module.css'

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

    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <>
            <h2 className={styles.title}>{meta.title}</h2>
            <p className={styles.subtitle}>{meta.subtitle}</p>
            <article className={styles.article}>
                {content}
            </article>
            <section className={styles.section}>
                <h3 className={styles.header3}>Related:</h3>
                <div className={styles.tags}>
                    {tags}
                </div>
            </section>
            <br />
            <br />
            <p className={styles.date}>
                Posted: {pubDate}
            </p>
            <p className={styles.home}>
                <Link href="/">← Back to home</Link>
            </p>
        </>
    )
}