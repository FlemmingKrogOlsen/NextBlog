import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem"
import styles from './Posts.module.css'

export default async function Posts() {
    const posts = await getPostsMeta()

    if (!posts) {
        return <p>Sorry, no posts available.</p>
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.header}>Available Apartments</h2>
            <div className={styles.list}>
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
}