import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const BLOG_DIR = join(process.cwd(), 'src/content/blog');

const load = () => {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = Promise.all(
    files
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace('.md', '');
        return await findPostBySlug(slug);
      }),
  );

  return posts;
};

let _posts;

/** */
export const fetchPosts = async () => {
  _posts = _posts || load();

  return await _posts;
};

/** */
export const getPosts = async (params) => {
  const posts = await fetchPosts();

  const { searchQuery, page = 1, pageSize = 2 } = params;

  // Calculate the number of posts to skip based on the page number and page size
  const skipAmount = (page - 1) * pageSize;

  let query = [];

  query = [
    {
      title: { $regex: new RegExp(searchQuery, 'i') },
      content: { $regex: new RegExp(searchQuery, 'i') },
    },
  ];

  const data = posts
    .filter((post) => {
      return query.every((q) => {
        return Object.keys(q).every((field) => {
          return new RegExp(q[field].$regex).test(post[field]);
        });
      });
    })
    .slice(skipAmount, skipAmount + pageSize);

  const totalPosts = posts.length;

  const isNext = totalPosts > skipAmount + data.length;

  return { posts: data, isNext };
};

/** */
export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const posts = await fetchPosts();

  return posts ? posts.slice(_count * -1) : [];
};

/** */
export const findPostBySlug = async (slug) => {
  if (!slug) return null;

  try {
    const readFile = fs.readFileSync(join(BLOG_DIR, `${slug}.md`), 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch (e) {}

  return null;
};

/** */
export const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r, id) {
    posts.some(function (post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
