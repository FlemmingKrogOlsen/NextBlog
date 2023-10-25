import { CloseButton, Container, Header, Overlay } from "@/styles/ModalStyle";

interface IProps extends ShowType {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
  }

const Modal = ({ children, title, show, onClose }: IProps) => {
  return (
    <>
      <Container show={show} aria-modal role="dialog" aria-hidden={show}>
        <Header>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        {children}
      </Container>
      <Overlay show={show} onClick={onClose} />
    </>
  );
};

export default Modal;