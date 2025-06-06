import React from 'react';
import Image from 'next/image';
import {DetailImages} from '../PortfolioImages.tsx';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ painting: string }>
}) {

  
  const { painting } = await params

  return (
    <div>
      <h1>{painting}</h1>
      {DetailImages[painting].map((img) => {
        return (
          <div key={img.title}>
            <h2>{img.title}</h2>
            <Image
              src={img.src}
              alt={img.title}
              width={
                img.width /
                (img.height / 300)
              }
              height={300}
            />
          </div>
        )
      })}
    </div>
  )
}