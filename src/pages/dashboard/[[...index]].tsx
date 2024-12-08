import { UserProfile, useSession } from '@clerk/nextjs';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const DashboardPage: NextPage = () => {
  const { isSignedIn, isLoaded } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  } 

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Your dashboard content here */}
      {/* <UserProfile  routing="path" path="/dashboard" /> */}
    </div>
  );
};

export default DashboardPage;