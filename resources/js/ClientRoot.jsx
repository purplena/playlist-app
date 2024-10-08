import React from 'react';
import { Box, Stack } from '@mui/material';
import NavbarClient from '../components/Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import { useGetCompany } from '../hooks/useGetCompany';

export default function Root() {
  const { company } = useGetCompany();

  return (
    <>
      <Stack minHeight={'100vh'}>
        <Stack flex={1}>
          <NavbarClient />
          <Box
            paddingLeft={2}
            paddingRight={2}
            mt={6}
            id="main-container"
            maxWidth={500}
            ml={'auto'}
            mr={'auto'}
          >
            <Outlet />
          </Box>
        </Stack>
        <Footer
          sx={{
            marginTop: 'auto',
          }}
          company={company}
        />
      </Stack>
    </>
  );
}
