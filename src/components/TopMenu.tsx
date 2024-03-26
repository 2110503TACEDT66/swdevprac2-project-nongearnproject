import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className='h-16 bg-white fixed top-0 left-0 right-0 z-30
        flex flex-row border'>
            <div className='flex flex-row space-x-4'>
                <Image src={'/img/logo.png'} className='h-full w-auto' 
                alt='logo' width={0} height={0} sizes='100vh' />
                <div className='text-xl'>
                    CoWorkingSpace<br></br>Booking Center
                </div>
            </div>
            <TopMenuItem title='Home' pageRef='/'/>
            {
                session && session.user.role == "admin" ?
                <TopMenuItem title='Top1 User' pageRef='/Top1'/> 
                : null
            }
            <TopMenuItem title='My Booking' pageRef='/mybooking'/>
            <TopMenuItem title='Book Now' pageRef='/booking'/> 
            
            <div className='flex flex-row absolute right-5 h-full items-center'> 
            {
                session ? 
                <Link href="/api/auth/signout" style={{textDecoration:'none', fontSize:'20px'}} className='flex items-center h-10 border-2 rounded-lg border-indigo-600 w-28 shadow-lg
                text-center justify-center'>
                    <div className='text-indigo-600'>Sign-Out</div>
                </Link>
                :
                <div className='flex flex-row space-x-6'>
                    <Link href="/signup" style={{textDecoration:'none', fontSize:'20px'}} className='flex items-center h-10 border-2 rounded-lg border-indigo-600 w-28 text-center shadow-lg justify-center'>
                        <div className='text-indigo-600'>Sign-Up</div>                    
                    </Link>
                    <Link href="/api/auth/signin" style={{textDecoration:'none', fontSize:'20px' }} className='flex items-center h-10 px-2 border-2 rounded-lg border-indigo-600 shadow-lg bg-indigo-600 w-28 
                    text-center justify-center'>
                        <div className='text-white'>Sign-In</div>  
                    </Link>                    
                </div>

            }
            </div>
        </div>
    );
}