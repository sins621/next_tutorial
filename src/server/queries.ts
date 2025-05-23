import "server-only";
import { db } from "@/server/db";
import { auth } from "@clerk/nextjs/server";

export async function getImages() {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}
