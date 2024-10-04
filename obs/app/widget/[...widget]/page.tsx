import dynamic from 'next/dynamic'

const Times = dynamic(() => import('@/components/Times/Times'), { ssr: false })

import Border from '@/components/Border/Border'
import Placeholder from '@/components/Placeholder/Placeholder'
import Status from '@/components/Status/Status'
import CameraOverlayComponent from '@/components/CameraOverlay/CameraOverlayComponent'
import BlurOverlay from '@/components/BlurOverlay/BlurOverlayComponent'
import IntroCard from '@/components/Intro/IntroCard'

export const runtime = 'edge'

export default function Widget({ params }: { params: { widget: string[], slug: string[] }}) {
    const [secondSegment, thirdSegment, fourthSegment] = params.widget

    const renderComponent = () => {
      switch (secondSegment) {
        case 'border':
          return <Border size={thirdSegment} />;
        case 'placeholder':
          return <Placeholder size={thirdSegment} />;
        case 'status':
          return <Status size={thirdSegment} status={fourthSegment} />;
        case 'times':
          return <Times size={thirdSegment} timezone={fourthSegment} />;
        case 'camera-overlay':
          return <CameraOverlayComponent />;
        case 'blur-overlay':
          return <BlurOverlay />;
        case 'intro':
          return <IntroCard />;
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