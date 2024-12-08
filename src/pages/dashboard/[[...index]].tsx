import AppNavbar from '@/components/AppNavbar';
import Header from '@/components/Header';
import MainGrid from '@/components/MainGrid';
import SideMenu from '@/components/SideMenu';
import {  useSession } from '@clerk/nextjs';
import {  Box, Stack } from '@mui/material';
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
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={() => ({
            flexGrow: 1,
           
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default DashboardPage;