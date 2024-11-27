import { Suspense } from "react";
import { list } from "@vercel/blob";
import Image from "next/image";

async function Video({ prefix }: { prefix: string }) {
  const { blobs } = await list({ prefix, limit: 1 });
  const { url } = blobs[0];

  return (
    <video
      className="fixed inset-0 w-full h-full object-cover"
      preload="none"
      autoPlay
      muted
      loop
      playsInline
      controls={false}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <Image
          className="fixed inset-0 w-full h-full object-cover"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAIAAAArjXluAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgY+WWV1Bh2Dp/s4SUHMO3L/9VdQ0Y1HWMfKJSAWKpB8xGxRZgAAAAAElFTkSuQmCC"
          alt="Poster"
          width={1214}
          height={2160}
        />
      }
    >
      <Video prefix="IMG_7170-nOqHfkiTopRM3JVs55jWyvku7qVuno.mp4" />
    </Suspense>
  );
}
