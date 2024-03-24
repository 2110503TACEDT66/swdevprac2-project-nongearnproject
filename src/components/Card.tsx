import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';

export default function Card({coworkingspaceName, imgSrc, onRating, value} : 
{coworkingspaceName:string, imgSrc:string, onRating?:Function, value?:number | null}) {
    return (
        <InteractiveCard contentName={coworkingspaceName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px]'>{coworkingspaceName}</div>
            {
                onRating ? <Rating name={`${coworkingspaceName} Rating`} value={value} 
                onChange={(e, newValue) => {onRating(coworkingspaceName, newValue)}}
                onClick={(e)=>{e.stopPropagation();}}
                id={`${coworkingspaceName} Rating`}
                data-testid={`${coworkingspaceName} Rating`}/>
                : ''
            }
        </InteractiveCard>
    );
}