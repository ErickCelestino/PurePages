import { HomeContainer, useDrawerContext, scrollTo } from '@pure-pages/feature';
import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
  const { setDrawerOptions } = useDrawerContext();
  const hasLoadedUserData = useRef(false);
  const navigateToWaths = () => {
    window.open(
      'https://wa.me/44998494865?text="Olá estou interessado em saber mais sobre os planos da Pure Digital, Poderia me ajudar?"',
      '_blank'
    );
  };

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
            ctaButton={navigateToWaths}
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
