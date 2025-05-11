/**
 * 외부 URL 이미지
 * 외부 이미지 사용 시 next.config.js에 도메인 추가 필수
 */

import Image from 'next/image';

export default function ExternalImage() {
  return (
    <Image
      src='https://picsum.photos/30/30'
      alt='외부 이미지'
      width={30}
      height={30}
    />
  );
}
