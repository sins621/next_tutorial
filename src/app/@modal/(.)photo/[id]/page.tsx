import FullPageImageView from "@/components/full-page-image";
import { Modal } from "./modal";

export default async function PhotoModal(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return (
    <Modal>
      <FullPageImageView id={Number(params.id)} />
    </Modal>
  );
}
