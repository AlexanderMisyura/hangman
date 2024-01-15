export default function createModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  document.body.append(modal);

  const modalContent = document.createElement('div');
  modalContent.className = 'modal__content';
  modal.append(modalContent);

  const modalBtn = document.createElement('button');
  modalBtn.className = 'modal__button';
  modalBtn.innerText = 'Play again!';
  modalContent.append(modalBtn);

  return {
    modal,
    modalContent,
    modalBtn,
  };
}
