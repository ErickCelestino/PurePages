import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  HomeContainer,
  useDrawerContext,
  scrollTo,
  navigateToWaths,
} from '@pure-pages/feature';

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
            company={{
              companyLogo: '/assets/images/PurePagesLogo.svg',
            }}
            heroSection={{
              heroSectionImage: '/assets/images/MenHeadLine.svg',
              heroSectionTitle:
                'Impulsione suas vendas com landing pages que convertem! Criamos páginas otimizadas para capturar leads e aumentar suas ofertas.',
              herosectionSubTitle:
                'Landing pages personalizadas e focadas em resultados para fazer seu negócio crescer.',
            }}
            cta={{
              ctaButton: () =>
                navigateToWaths(
                  '44998494865',
                  'Olá estou interessado em saber mais sobre os planos da Pure Digital, Poderia me ajudar?'
                ),
            }}
            detailsFeature={{
              detailsFeatureImage: '/assets/images/Product.svg',
              detailsFeatureTitle:
                'Landing Pages que geram resultados concretos e impulsionam suas vendas!',
              listFeatures: [
                {
                  icon: <TaskAltIcon sx={{ color: '#9c1b1f' }} />,
                  title:
                    'Landing Pages otimizadas para transformar visitantes em clientes e aumentar sua taxa de conversão.',
                },
                {
                  icon: <TaskAltIcon sx={{ color: '#9c1b1f' }} />,
                  title: 'Páginas personalizadas e pensadas para o seu nicho.',
                },
                {
                  icon: <TaskAltIcon sx={{ color: '#9c1b1f' }} />,
                  title:
                    'Design focado na experiência do usuário, garantindo mais engajamento e resultados.',
                },
              ],
            }}
            listButtons={[
              {
                title: 'Inicio',
                to: () => scrollTo('home'),
              },
              {
                title: 'Sobre nós',
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
