'use client'

import { usePathname } from 'next/navigation'

import Border from '@/components/Border/Border'
import Placeholder from '@/components/Placeholder/Placeholder'

export default function Wdiget() {
    const pathname = usePathname();
    
    const pathSegments = pathname.split('/').filter(Boolean);
    const secondSegment = pathSegments.length > 1 ? pathSegments[1] : '';
    const thirdSegment = pathSegments.length > 1 ? pathSegments[2] : '';

    const renderComponent = () => {
      switch (secondSegment) {
        case 'border':
          return <Border size={thirdSegment} />;
        case 'placeholder':
          return <Placeholder size={thirdSegment} />;
        default:
          return <div>Default component or 404 page</div>;
      }
    }

  return (
    <>
      {renderComponent()}
    </>
    
  )
}