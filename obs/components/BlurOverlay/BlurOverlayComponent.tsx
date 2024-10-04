import BlurOverlay from '@/components/BlurOverlay/BlueOverlay';

export default function BlurOverlayComponent() {
  return (
    <div className='margin-0'>
      <BlurOverlay>
        <div className='w-[640px] h-[360px]'>
          <div className='flex flex-row justify-between p-3'>
            test
          </div>					
        </div>
      </BlurOverlay>
    </div>
  );
}