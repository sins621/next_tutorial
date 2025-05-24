import FullPageImageView from "@/components/full-page-image";
import { Modal } from "./modal";

export default function PhotoModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <FullPageImageView id={Number(params.id)} />
    </Modal>
  );
}
