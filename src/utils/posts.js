import fs from 'fs';
import matter from 'gray-matter';

const load = () => {
  const files = fs.readdirSync('src/content/blog');

  const posts = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const readFile = fs.readFileSync(`src/content/blog/${filename}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
      };
    });

  return posts;
};

let _posts;

/** */
export const fetchPosts = async () => {
  _posts = _posts || load();

  return await _posts;
};

/** */
export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const posts = await fetchPosts();

  return posts ? posts.slice(_count * -1) : [];
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
