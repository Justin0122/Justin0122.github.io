import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

export function sortItemsByDateDesc(itemA: CollectionEntry<'blog' | 'projects'>, itemB: CollectionEntry<'blog' | 'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function sortNLItemsByDateDesc(itemA: CollectionEntry<'NLblog' | 'NLprojects'>, itemB: CollectionEntry<'NLblog' | 'NLprojects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            return {
                name: tag,
                slug: slugify(tag)
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
        });
}

export function NLgetAllTags(posts: CollectionEntry<'NLblog'>[]) {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            return {
                name: tag,
                slug: slugify(tag)
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
        });
}

export function getPostsByTag(posts: CollectionEntry<'blog'>[], tagSlug: string) {
    return posts.filter((post) => (post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug));
}

export function NLgetPostsByTag(posts: CollectionEntry<'NLblog'>[], tagSlug: string) {
    return posts.filter((post) => (post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug));
}