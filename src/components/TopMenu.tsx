import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className='h-14 bg-white fixed top-0 left-0 right-0 z-30 
        flex flex-row border-t-2 border-t-grey-400 border-t-solid border-b-2 border-b-grey-400 border-b-solid'>
            <Image src={'/img/logo.jpg'} className='h-full w-auto' 
            alt='logo' width={0} height={0} sizes='100vh' />
            <TopMenuItem title='Menu Item Booking' pageRef='/booking'/>
            <TopMenuItem title='My Booking' pageRef='/mybooking'/>
            <div className='flex flex-row absolute right-5 h-full'> 
            <div className='flex items-center h-full px-2 text-cyan-600 text-md'>
                <Link href="/signup">Sign-Up</Link>
            </div>
            {
                session ? <Link href="/api/auth/signout">
                    <div className='flex items-center h-full px-2 text-cyan-600 text-md'>
                        Sign-Out
                    </div>
                </Link>
                : <Link href="/api/auth/signin">
                    <div className='flex items-center h-full px-2 text-cyan-600 text-md'>
                        Sign-In
                    </div>
                </Link>
            }
            </div>
        </div>
    );
}