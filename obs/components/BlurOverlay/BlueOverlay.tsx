import styles from './BlurOverlay.module.css';

export default function BlurOverlayComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.blurContainer}>
        {children}
    </div>
  );
}