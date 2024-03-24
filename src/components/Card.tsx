import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function Card({coworkingspaceName, imgSrc} : 
{coworkingspaceName:string, imgSrc:string}) {
    return (
        <InteractiveCard contentName={coworkingspaceName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px]'>{coworkingspaceName}</div>
        </InteractiveCard>
    );
}