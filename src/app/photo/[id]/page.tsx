import { FullPageImageView } from "@/components/full-page-image";

export default async function PhotoPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  return <FullPageImageView id={Number(params.id)} />;
}
