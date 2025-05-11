'use server';

export async function createPost(title: string) {
  console.log('타이틀:', title);
  // ...
}

export async function getPostBySlug(id: string) {
  console.log('조회대상:', id);
  // ...

  return {
    id: 1,
    title: '제목',
  }
}
