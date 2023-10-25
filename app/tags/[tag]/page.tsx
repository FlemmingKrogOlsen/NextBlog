import { getPostsMeta } from "@/lib/posts"
import ListItem from "@/components/ListItem"
import Link from "next/link"
import { ErrorText, Header, KeywordError, List, Section } from "@/styles/TagsPageStyle"
import { HomeLink } from "@/styles/PostPageStyle"

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

    if (!posts) return <ErrorText>Sorry, no posts available.</ErrorText>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <KeywordError>
                <p>Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </KeywordError>
        )
    }

    return (
        <>
            <HomeLink>
                <Link href="/">← Back to Home</Link>
            </HomeLink>
            <Header>Results for: #{tag}</Header>
            <Section>
                <List>
                    {tagPosts.map(post => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </List>
            </Section>
        </>
    )
}