import { deleteImage, getImage } from "@/server/queries";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "./ui/button";

export async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const clerk = await clerkClient();
  const uploaderInfo = await clerk.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex w-full flex-shrink items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(image.id);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
