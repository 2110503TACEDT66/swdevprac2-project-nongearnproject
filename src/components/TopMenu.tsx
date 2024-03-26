import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className='h-14 bg-transparent fixed top-8 left-8 right-8 z-30 
        flex flex-row'>
            <div className='flex flex-row space-x-4'>
                <Image src={'/img/logo.png'} className='h-full w-auto' 
                alt='logo' width={0} height={0} sizes='100vh' />
                <div className='text-lg'>
                CoWorkingSpace<br></br>Booking Center
                </div>
            </div>
            <TopMenuItem title='My Booking' pageRef='/mybooking'/>
            <TopMenuItem title='Book Now' pageRef='/booking'/> 
            <div className='flex flex-row absolute right-5 h-full'> 
            {
                session ? <Link href="/api/auth/signout">
                    <div className='flex items-center h-full px-2 text-black text-md'>
                        Sign-Out
                    </div>
                </Link>
                :
                <div className='flex flex-row space-x-6'>
                    <Link href="/signup" style={{textDecoration:'none', fontSize:'20px'}} className='flex items-center h-full border-2 rounded-lg border-cyan-600 w-28 text-center justify-center'>
                        <div className='text-cyan-600'>Sign-Up</div>                    
                    </Link>
                    <Link href="/api/auth/signin" style={{textDecoration:'none', fontSize:'20px' }} className='flex items-center h-full px-2 border-2 rounded-lg border-cyan-600 bg-cyan-600 w-28 
                    text-center justify-center'>
                        <div className='text-white'>Sign-In</div>  
                    </Link>                    
                </div>

            }
            </div>
        </div>
    );
}