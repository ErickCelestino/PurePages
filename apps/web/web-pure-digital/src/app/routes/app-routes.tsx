import {
  HomeContainer,
  useDrawerContext,
  scrollTo,
  navigateToWaths,
} from '@pure-pages/feature';
import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
  const { setDrawerOptions } = useDrawerContext();
  const hasLoadedUserData = useRef(false);

  useEffect(() => {
    if (!hasLoadedUserData.current) {
      setDrawerOptions({
        Inicio: [{ label: 'Inicio', icon: 'home', path: '/' }],
      });
      hasLoadedUserData.current = true;
    }
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <HomeContainer
            title="Pure Digital"
            companyLogo="/assets/images/PurePagesLogo.svg"
            ctaButton={() =>
              navigateToWaths(
                '44998494865',
                'Olá estou interessado em saber mais sobre os planos da Pure Digital, Poderia me ajudar?'
              )
            }
            listButtons={[
              {
                title: 'Inicio',
                to: () => scrollTo('home'),
              },
              {
                title: 'O que fazemos',
                to: () => {
                  console.log(
                    'Voce clicou no O que fazemos, para de me encher'
                  );
                },
              },
              {
                title: 'Nossos trabalhos',
                to: () => {
                  console.log(
                    'Voce clicou no Nossos trabalho, estou cansado chefe'
                  );
                },
              },
            ]}
          />
        }
      />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
