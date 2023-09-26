import { handleKeyboardEvent, handleClickOutside } from "../../src/utilities/modalUtilities";

describe('modalUtilities', () => {
    describe('handleKeyboardEvent', () => {

        const mockAction = jest.fn();
        const mockCloseModal = jest.fn();

        beforeEach(() => {
            jest.clearAllMocks();
        });

      it('calls action when "Enter" key is pressed', () => {
        const event = new KeyboardEvent("keydown", { key: "Enter" });
        handleKeyboardEvent(event, mockAction, mockCloseModal);
        expect(mockAction).toHaveBeenCalledTimes(1);
        expect(mockCloseModal).toHaveBeenCalledTimes(0);
      });
  
      it('calls action when "Space" key is pressed', () => {
        const event = new KeyboardEvent("keydown", { key: " " });
        handleKeyboardEvent(event, mockAction, mockCloseModal);
        expect(mockAction).toHaveBeenCalledTimes(1);
        expect(mockCloseModal).toHaveBeenCalledTimes(0);
      });
  
      it('calls closeModal when "Escape" key is pressed', () => {
        const event = new KeyboardEvent("keydown", { key: "Escape" });
        handleKeyboardEvent(event, mockAction, mockCloseModal);
        expect(mockAction).toHaveBeenCalledTimes(0);
        expect(mockCloseModal).toHaveBeenCalledTimes(1);
      });
    });
  
    describe('handleClickOutside', () => {

        let mockOnClose: jest.Mock;
        let mockModalRef: HTMLElement;
        let mockModalBox: HTMLElement;
        let mockTargetElement: HTMLElement;

        beforeEach(() => {
            mockOnClose = jest.fn();

            // Creates mock HTML elements
            mockModalRef = document.createElement("div");
            mockModalBox = document.createElement("div");
            mockTargetElement = document.createElement("div");

            // Append modalBox to modalRef to simulate modal box being inside ref
            mockModalRef.appendChild(mockModalBox);
        });

      it('calls onClose when clicking outside the modal but inside modalRef', () => {
        mockModalRef.appendChild(mockTargetElement);

        const event = new MouseEvent("click", {});
        Object.defineProperty(event, "target", { writable: false, value: mockTargetElement});
        handleClickOutside(event, mockModalRef, mockModalBox, mockOnClose);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      });
  
      it('does not call onClose when clicking inside the modal', () => {
        mockModalBox.appendChild(mockTargetElement);
        const event = new MouseEvent("click", {});
        Object.defineProperty(event, "target", { writable: false, value: mockTargetElement});
        handleClickOutside(event, mockModalRef, mockModalBox, mockOnClose);
        expect(mockOnClose).toHaveBeenCalledTimes(0);
      });
  
      it('does not call onClose when clicking outside modalRef', () => {
        const event = new MouseEvent("click", {});
        Object.defineProperty(event, "target", { writable: false, value: mockTargetElement});
        handleClickOutside(event, mockModalRef, mockModalBox, mockOnClose);
        expect(mockOnClose).toHaveBeenCalledTimes(0);
      });
    });
  });