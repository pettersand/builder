// utilities/modal/functions.ts

// Function to handle keyboard events for accessibility and closing the modal
export const handleKeyboardEvent = (
  event: KeyboardEvent,
  action: Function,
  closeModal: Function
) => {
  if (event.key === "Enter" || event.key === " ") {
    action();
  } else if (event.key === "Escape") {
    closeModal();
  }
};

// Function to handle click outside the modal to close it
export const handleClickOutside = (
  event: MouseEvent,
  modalRef: HTMLElement,
  modalBox: HTMLElement,
  onClose: () => void
) => {
  const targetElement = event.target as HTMLElement;

  if (
    modalRef &&
    modalRef.contains(targetElement) &&
    !modalBox.contains(targetElement)
  ) {
    onClose();
  }
};
