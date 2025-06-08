import React from 'react';
import Image from 'next/image';
import {DetailImages, PortfolioImages} from '../PortfolioImages.tsx';
import Gallery from '../Gallery/page.tsx';

export default async function DetailPage({
  params,
}: {
  params: Promise<{ painting: string }>
}) {

  
  const { painting } = await params
  // console.log('painting', painting)

  return (
    <Gallery galleryImages={PortfolioImages[painting]}/>
  )
  // return (
  //   <div>
  //     <h1>{painting}</h1>
  //     {DetailImages[painting].map((img, index) => {
  //       return (
  //         <div key={index}>
  //           <h2>{img.title}</h2>
  //           <Image
  //             src={img.src}
  //             alt={img.title}
  //             width={
  //               img.width /
  //               (img.height / 300)
  //             }
  //             height={300}
  //           />
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
}