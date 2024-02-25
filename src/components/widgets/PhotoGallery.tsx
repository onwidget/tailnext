import Image from "next/image";
// @ts-ignore
import { useEmblaCarousel } from "embla-carousel/react"; 
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type Photo = {
 src: string,
 width: number,
 height: number,
 title: string
}

const hikeImage = hike as unknown as string;
const cameraImage = cameraBackImg as unknown as string;

const photos: Photo[] = [
  { src: hikeImage, width: 800, height: 600, title: "hike" },
  { src:  cameraImage, width: 1600, height: 900, title: "camera" },
  { src:  hikeImage, width: 800, height: 600, title: "hike" },
  { src:  cameraImage, width: 1600, height: 900, title: "camera" },
  { src:  hikeImage, width: 800, height: 600, title: "hike" },
  { src:  cameraImage, width: 1600, height: 900, title: "camera" },
];

export default function PhotoGallery(photos: Photo[]) {
    const [emblaRef, embla] = useEmblaCarousel({
        align: "start",
        loop: true,
        skipSnaps: false,
        inViewThreshold: 0.7
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSelected, setScrollSelected] = useState([]);

    const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index),[embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap())
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSelected(embla.scrollSnapList());
        embla.on("select", onSelect); 
    }, [embla, setScrollSelected, onSelect])

  return (

 <div className="overflow-hidden" ref={emblaRef}>

   <div className="flex">
 
     {photos.map((photo) => (
       <div
         className="relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10"
         key={photo.title}
       >
         <div className="overflow-hidden cursor-pointer lg:w-1/2">
           {/* <Link href={`/blog/${post.slug}`}>
             <a> */}
               <Image
                 src={photo.src}
                 height={514}
                 width={800}
                 className="rounded-lg"
                 alt="cover image"
                 placeholder="blur"
                 blurDataURL={photo.src}
               />
             {/* </a>
           </Link> */}
         </div>
         {/* content */}
         <div className="flex flex-col space-y-4 lg:w-4/5 lg:space-x-20 lg:justify-center">
           {/* tags and date */}
           {/* <div className="flex text-sm mt-4 space-x-5 lg:mx-20">
             <p className="font-bold dark:text-white">{post.tags}</p>
             <p className="font-normal text-gray-500 dark:text-gray-400">
               {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
             </p>
           </div> */}
           {/* title */}
           {/* <Link href={`/blog/${post.slug}`}>
             <a className="cursor-pointer">
               <h2 className="text-3xl lg:text-4xl font-bold dark:text-gray-100">
                 {post.title}
               </h2>
             </a>
           </Link> */}
           {/* <Link href={`/blog/${post.slug}`}>
             <a className="cursor-pointer">
               <p className="text-gray-500 text-justify">{post.summary}</p>
             </a>
           </Link> */}
         </div>
       </div>
     ))}
   </div>
 </div>
  )
  
}