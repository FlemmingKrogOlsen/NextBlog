import { getPostsMeta } from "@/lib/posts"
import ListItem from "@/components/ListItem"
import Link from "next/link"
import styles from '@/styles/TagsPage.module.css'

export const revalidate = 10

type Props = {
    params: {
        tag: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }: Props) {

    return {
        title: `Posts about ${tag}`
    }
}

export default async function TagPostList({ params: { tag } }: Props) {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return <p className={styles.error}>Sorry, no posts available.</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <div className={styles.keywordError}>
                <p>Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <>
            <p className={styles.homeLink}>
                <Link href="/">← Back to Home</Link>
            </p>
            <h2 className={styles.header}>Results for: #{tag}</h2>
            <section className={styles.section}>
                <div className={styles.list}>
                    {tagPosts.map(post => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </div>
            </section>
        </>
    )
}