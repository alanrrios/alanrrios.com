interface PlaceholderProps {
  size?: string;
} 

import {
  UserIcon,
} from '@heroicons/react/24/outline'
  
export default function Border({ size }: PlaceholderProps) {
  
  const getStyles = () => {
    switch (size) {
      case 'medium-camera':
        return {
          container: 'w-[528px] h-[396px]',
        };
      case 'large-camera':
        return {
          container: 'w-[1056px] h-[792px]',
        };
      case 'large-desktop':
        return {
          container: 'w-[1136px] h-[639px]',
        };
      case 'medium-desktop':
        return {
          container: 'w-[640px] h-[360px]',
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
    <>
      <main className={`absolute left-[8px] top-[8px] grid ${styles.container} rounded-sm bg-accent place-items-center`}>
        <div className="text-center space-y-2">
          <UserIcon aria-hidden="true" className="h-28 w-28 mx-auto" />
          <h1 className="text-5xl font-bold text-foreground">placeholder</h1>
          <p className="text-lg font-normal text-foreground">{styles.container}</p>
        </div>
      </main>
    </>
  );
}