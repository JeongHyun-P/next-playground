import styles from './styles.module.css';
import Link from 'next/link';
import { Post } from '@/types/post';

export default async function Page() {
  const res = await fetch('https://api.vercel.app/blog');
  const posts: Post[] = await res.json();

  return (
    <div>
      <h3 className={styles.postTitle}>post</h3>
      <p>
        <Link href={`/post/create`}>post create</Link>
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
