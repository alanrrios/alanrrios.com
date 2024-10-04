import CameraOverlay from '@/components/CameraOverlay/CameraOverlay';

import Status from '@/components/Status/Status'
import Times from '@/components/Times/Times'

export default function CameraOverlayComponent() {
  return (
    <div className='margin-0'>
			<CameraOverlay>
				<div className='w-[1056px] h-[792px]'>
					<div className='flex flex-row justify-between p-3'>
						<Status size='large' status='rec' />
						<Times size='large' timezone='cdt' />
					</div>					
				</div>
			</CameraOverlay>
    </div>
    
  );
}