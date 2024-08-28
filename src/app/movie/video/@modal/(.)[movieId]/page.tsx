import { notFound } from "next/navigation";
import ModalBackdrop from "../../../_components/modal-backdrop";

export default async function InterceptedVideoPage() {
  return (
    <div className="h-[calc(100vh-80px)]">
      <ModalBackdrop />
      <dialog className="w-2/3 rounded-lg" open>
        <div>
          <p>Modal</p>
        </div>
      </dialog>
    </div>
  );
}
