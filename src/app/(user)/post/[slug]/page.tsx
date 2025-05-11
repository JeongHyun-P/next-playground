/**
 * 식별자 역할, SEO 최적화, URL 구조화, 동적 페이지 생성 등 다양한 용도로 사용
 * use: /post/1, /post/2, /post/3
 * api 요청시 캐싱(SSR/ISR) 최적화 가능
 * slug로 정적 페이지 생성시 메모제이션, CDN 캐싱가능 -> 페이지 로딩속도 향상
 * 클라이언트 캐싱도 가능 (react-query, swr 등)
 */
import { getPostBySlug } from '@/lib/actions';
import { notFound } from 'next/navigation';

export default async function Page({params}: {params: {slug: string}}) {
  const { slug } = params
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h3>DETAIL({post.id})</h3>
      <p>{post.title}</p>
    </div>
  );
}
