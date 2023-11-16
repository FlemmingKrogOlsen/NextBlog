import styles from '@/styles/Modal.module.css'

interface IProps extends ShowType {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const Modal = ({ children, title, show, onClose }: IProps) => {
  return (
    <>
      <div
        className={`${styles.container} ${show ? styles.containerShow : styles.containerHide}`}
        aria-modal="true"
        role="dialog"
        aria-hidden={show ? true : false}
      >
        <header className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>&times;</button>
        </header>
        {children}
      </div>
      <div className={`${styles.overlay} ${show ? styles.overlayShow : styles.overlayHide}`} onClick={onClose} />
    </>
  );
};

export default Modal;