import React from 'react';
import styles from './CameraOverlay.module.css';

interface CameraOverlayProps {
  children: React.ReactNode;
}

const CameraOverlay: React.FC<CameraOverlayProps> = ({ children }) => {
  return (
    <div className={styles.cameraOverlay}>
      <div className={styles.corner} style={{ top: 0, left: 0 }}>
        <div className={styles.innerCorner}></div>
      </div>
      <div className={styles.corner} style={{ top: 0, right: 0 }}>
        <div className={styles.innerCorner}></div>
      </div>
      <div className={styles.corner} style={{ bottom: 0, left: 0 }}>
        <div className={styles.innerCorner}></div>
      </div>
      <div className={styles.corner} style={{ bottom: 0, right: 0 }}>
        <div className={styles.innerCorner}></div>
      </div>
      {children}
    </div>
  );
};

export default CameraOverlay;
