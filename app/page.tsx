import Posts from "./components/Posts"

export const revalidate = 10 // 86400 full day

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  )
}