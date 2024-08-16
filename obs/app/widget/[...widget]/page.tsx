import { NextRequest } from 'next/server'
import Border from '@/components/Border/Border'
import Placeholder from '@/components/Placeholder/Placeholder'

export const runtime = 'edge'

export default function Widget({ params }: { params: { widget: string[] } }) {
    const [secondSegment, thirdSegment] = params.widget

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