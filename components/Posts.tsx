import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem"
import { Header, List, Section } from "@/styles/PostsStyle"

export default async function Posts() {
    const posts = await getPostsMeta()

    if (!posts) {
        return <p>Sorry, no posts available.</p>
    }

    return (
        <Section>
            <Header>Available Apartments</Header>
            <List>
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </List>
        </Section>
    )
}