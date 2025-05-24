import FullPageImageView from "@/components/full-page-image";

export default function PhotoPage({ params }: { params: { id: string } }) {
  return <FullPageImageView id={Number(params.id)} />;
}
