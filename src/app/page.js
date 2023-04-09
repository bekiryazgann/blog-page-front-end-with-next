import Image from 'next/image'
import { Inter } from 'next/font/google'
import Post from '../components/post';
import Header from '../components/header';
import LatestPost from '../components/latestPost';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

let posts = [
    {
        title: "Post - 1",
        content: "İçerik - 1"
    },
    {
        title: "Post - 2",
        content: "İçerik - 2",
    }
]

    return (
        <main className="mb-[500px]">
            <Header />
            <div className="container mx-auto">
                <h3 className="text-9xl font-bold"> The Blog </h3>
                <LatestPost />
            </div>
            <section class="container mx-auto flex flex-col items-center grid grid-cols-3 gap-3">
                {posts.map(post => (
                    <Post title={post.title} content={post.content}/>
                ))}
            </section>
        </main>
    )
}
