import { useContext } from "react";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import ModalsProvider, { ModalsDispatchContext, ModalsStateContext } from "../../contexts/modalContext";

const Diary = () => {
  const { Modal, isModalOpen, closeModal, openModal } = useModal();
  //const { openModal, closeModal } = useContext(ModalsDispatchContext);


  return (
    <div>
      This is Diary page.
      <button onClick={openModal}>click</button>
      <Modal
        isModalOpen={isModalOpen}
        close={closeModal}
        label="잘못된 이메일입니다!"
      />
    </div>
  );
};

export default Diary;
