import Banner from '@/components/Banner'
import PromoteCard from '@/components/PromoteCard';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Banner/>
        <PromoteCard></PromoteCard>
    </main>
  );
}
