import { getImages } from "@/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/photo/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width="480"
              height="480"
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign in Above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
