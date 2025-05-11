/**
 * 로컬(public 폴더) 이미지
 * public/images 경로의 정적 리소스 사용
 * next/image의 최적화 기능(WebP 변환, Lazy Loading 등) 자동 적용
 * width/height 지정으로 CLS 방지, LCP 성능 향상
 */

import Image from 'next/image';

export default function InternalImage() {
  return (
    <Image src='/images/new.png' alt='로컬 이미지' width={30} height={30} />
  );
}
