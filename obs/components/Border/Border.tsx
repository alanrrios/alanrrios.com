interface BorderProps {
  size?: string;
}
import rotateStyles from './styles.module.css'

export default function Border({ size }: BorderProps) {

  const getStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: 'w-[544px] h-[313px]',
          item: 'w-[528px] h-[297px]',
          position: '-left-[132px] -top-[247.5px]',
          borderBox: 'w-[808px] h-[808px]'
        };
      case 'large-desktop':
        return {
          container: 'w-[1152px] h-[655px]',
          item: 'w-[1136px] h-[639px]',
          position: '-left-[328px] -top-[576.5px]',
          borderBox: 'w-[1808px] h-[1808px]'
        };
      case 'medium-desktop':
          return {
            container: 'w-[656px] h-[376px]',
            item: 'w-[640px] h-[360px]',
            position: '-left-[76px] -top-[216px]',
            borderBox: 'w-[808px] h-[808px]'
          };
      default:
        return {
          container: '',
          margin: '',
          text: 'text-base',
          dot: '16px',
          shadow: '0 0 0 4px rgba(255, 0, 0, 0.3)'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`relative block ${styles.container} rounded-lg overflow-hidden shadow`}>
      <div className={`
        absolute ${styles.position} block ${styles.borderBox} bg-gradient-to-b from-gray-600 via-gray-200 to-gray-600
        ${rotateStyles.rotate}
      `} />
      <div className={`
        absolute left-[8px] top-[8px] block grow ${styles.item} border-2 border-primary
      `} />
    </div>
  );
}