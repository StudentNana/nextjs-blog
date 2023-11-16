import { readItem } from '@directus/sdk';
import directus from './directus';

export default function getPostContent(slug: string) {
    try {
        return directus.request(readItem('posts', slug));
    } catch (error){
        console.log(error.message)
    }
}