'use client';
import dynamic from "next/dynamic";

export default function RoomPage() {  
    const GalleryRenderer = dynamic(
        () => import("@/components/gallery-renderer").then((mod) => mod.default),
        {
          ssr: false,
          loading: () => <GalleryRenderer />,
        }
      );

    return (
        <div>
            <GalleryRenderer />
        </div>
    );
}