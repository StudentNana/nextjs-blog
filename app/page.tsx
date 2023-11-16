"use client"

import { useEffect, useState } from 'react';
import getPostsList from '../lib/getPostsList';
import getPostContent from '../lib/getPostContent';

type PostWithContent = PostDescription & {
    content: string,
}

type PostDescription = {
    title: string,
    slug: string,
    author: string
}

const HomePage = () => {
    const [posts, setPosts] = useState<PostDescription[]>(null);
    const [slug, setSlug] = useState<string>(null);
    const [post, setPost] = useState<PostWithContent>(null);

    useEffect(() => {
        getPostsList()
            .then(record => {
                const posts = record.map(postDescriptionMapper)
                setPosts(posts);
            })
            .catch((error) => {
                console.log('Error', error.message)
            })
    }, [])

    useEffect(() => {
        if(!!slug) {
            getPostContent(slug)
                .then(record => {
                    const post = postWithContentMapper(record)
                    setPost(post);
                })
                .catch((error) => {
                    console.log('Error', error.message)
                })
        }
    },[slug])

    if (!posts) return <div> Loading... </div>
    else if (!slug) return (
        <div> Insights
            {posts.map((post) => (
                <div key={post.slug} onClick={() => setSlug(post.slug)} className='border border-gray-100 p-4 my-2 rounded-md shadow-md hover:underline'>
                    <h1 className='font-bold'>{post.title}</h1>
                    <span className='text-sm'>
                        {post.author}
                    </span>
                </div>
            ))}
        </div>
    )
    else if (!post) return <div> Loading...</div>
    else return (
        <div>
            
            <h1 className='font-bold'>{post.title}</h1>
            <span className='text-sm'>
                {post.content}
            </span>
            <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1"
                onClick={() => setSlug(null)} >
                Back
            </button>
            </div>
        </div>
    )
}

const postWithContentMapper = (record: Record<string, any>): PostWithContent => ({ 
        title: record.title,
        author: record.author,
        content: record.content,
        slug: record.slug
    })

const postDescriptionMapper = (record: Record<string, any>): PostDescription => ({
    title: record.title,
    author: record.author,
    slug: record.slug
})

export default HomePage;