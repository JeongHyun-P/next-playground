'use client';

import { createPost } from '@/lib/actions';
import { useState } from 'react';
import { Post } from '@/types/post';

export default function Page() {
  const [post, setPost] = useState<Post>({
    title: ''
  });

  const onClickCreatePost = async () => {
    await createPost(post.title); // 서버액션
    setPost({ title: '' });
  };

  return (
    <div>
      <h3>post create</h3>

      <input type='text' value={post.title} onChange={(e) => setPost({ title: e.target.value })} />
      <button onClick={onClickCreatePost}>생성</button>
    </div>
  );
}
