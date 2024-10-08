import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { generatePath, useParams } from 'react-router-dom';
import LinkButton from '../components/Button/LinkButton';
import LineComponent from '../components/Layout/LineComponent';
import { useGetCompany } from '../hooks/useGetCompany';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const { id } = useParams();
  const { company, isLoading } = useGetCompany();

  const menuItems = [
    {
      title: 'Suggérez une chanson',
      href: generatePath('/:id/songs/search', { id }),
    },
    {
      title: "Chansons d'aujourd'hui",
      href: generatePath('/:id/songs', { id }),
    },
    { title: 'Voir la carte', href: '#' },
  ];

  return (
    <>
      <Stack direction="column" spacing={5}>
        <Typography variant="h1" component="h1">
          Profitons de ce moment !
        </Typography>
        <LineComponent />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <Stack spacing={3}>
              <Stack spacing={2}>
                <Typography variant="h4" component="h2">
                  Bienvenue chez
                </Typography>
                <Typography
                  variant="h4"
                  component="h2"
                  fontWeight={800}
                  textAlign={'right'}
                >
                  {company.name}
                </Typography>
              </Stack>
              <Typography variant="body1" component="p">
                {
                  "Un authentique pub irlandais où déguster une bière avec ses amis autour d'un burger au bacon irlandais, devant un match de rugby ou un live musical."
                }
              </Typography>
              <Box
                component="img"
                sx={{
                  height: '20vh',
                  objectFit: 'contain',
                }}
                alt="Company Logo"
                src={'/storage/' + company?.logo}
              />
            </Stack>
          </>
        )}

        <Stack spacing={2}>
          {menuItems.map((menuItem) => {
            return (
              <LinkButton
                key={menuItem.title}
                disableElevation
                size="small"
                to={menuItem.href}
                width="100%"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  fontSize: '0.9rem',
                }}
              >
                {menuItem.title}
              </LinkButton>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};
export default Home;
