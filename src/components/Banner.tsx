'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0);

    const router = useRouter(); 

    return (
        <div className='block p-1 m-0 w-screen relative h-[80vh]' onClick={()=>{setIndex(index + 1)}}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            style={{objectFit:"cover"}}
            className='opacity-50'/>

            <button className='bg-white text-cyan border-2 border-cyan-600
            font-semibold py-2 px-2 m-2 rounded-lg z-20 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transpasrent'
            onClick={(e)=>{e.stopPropagation(); router.push('/coworkingspace')}}>
                Select CoWorkingSpace
            </button>
        </div>
    );
}