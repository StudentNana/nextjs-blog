import { readItems } from '@directus/sdk';
import directus from './directus';

export default function getPostsList() {
    try {
        return directus.request(readItems('posts'));
    } catch (error){
        console.log(error.message)
    }
}