import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  HomeContainer,
  useDrawerContext,
  scrollTo,
  navigateToWaths,
} from '@pure-pages/feature';
import { Box } from '@mui/material';

export const AppRouters = () => {
  const { setDrawerOptions } = useDrawerContext();
  const hasLoadedUserData = useRef(false);

  useEffect(() => {
    if (!hasLoadedUserData.current) {
      setDrawerOptions({
        Inicio: [{ label: 'Inicio', icon: 'home', path: 'home' }],
        About: [{ label: 'Sobre nós', icon: 'badge', path: 'about-section' }],
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
              heroSectionImage: '/assets/images/MenHeroSection.svg',
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
            about={{
              aboutTitle:
                'Por que sua empresa precisa de uma landing page eficaz?',
              aboutDescription:
                'Ter uma landing page não é apenas uma escolha inteligente, é fundamental para quem busca aumentar os custos e captar leads de forma rápida e eficiente. Uma landing page bem estruturada é o caminho ideal para impactar seu público-alvo, funcionando como um ponto de conversão estratégica para suas campanhas de marketing, 24 horas por dia.',
              aboutImage: '/assets/images/AboutPhone.svg',
              aboutList: [
                {
                  icon: (
                    <Box component="img" src="/assets/images/Internet.svg" />
                  ),
                  title:
                    'Sua landing page converte visitantes em leads ou clientes 24 horas por dia, 7 dias por semana, maximizando o retorno de suas campanhas de marketing.',
                },
                {
                  icon: <Box component="img" src="/assets/images/Window.svg" />,
                  title:
                    'Landing pages otimizadas para campanhas promocionais, gerando leads de forma recorrente e garantindo flexibilidade em cada campanha',
                },
                {
                  icon: <Box component="img" src="/assets/images/User.svg" />,
                  title:
                    'Uma landing page bem projetada transmite alternativas e aumenta a confiança do seu público, essencial para opções específicas.',
                },
              ],
            }}
            // clients={{
            //   clientsTitle:
            //     '+ de 85 clientes confiaram em nós ao longo de toda nossa história.',
            //   clientsPhotos: ['/assets/images/companies/OralSim.svg'],
            // }}
            ctaSection={{
              ctaSectionButtonTitle: 'Chamar no WhatsApp',
              ctaSectionTitle: 'Pronto para começar?',
              ctaSectionSubTitle:
                'Entregamos a solução completa para o seu negócio! Entre em contato agora mesmo!',
              ctaSectionBackground: '#23d366',
              ctaSectionIcon: (
                <Box component="img" src="/assets/images/WathsApp.svg" />
              ),
            }}
            footer={{
              footerIcons: [
                {
                  icon: (
                    <Box component="img" src="/assets/images/Facebook.svg" />
                  ),
                  to: '1',
                },
                {
                  icon: (
                    <Box component="img" src="/assets/images/Instagram.svg" />
                  ),
                  to: '2',
                },
                {
                  icon: (
                    <Box component="img" src="/assets/images/LinkedIn.svg" />
                  ),
                  to: '3',
                },
              ],
              footerLinks: [
                {
                  text: 'Política e Privacidade',
                  to: '',
                },
                {
                  text: 'Termos e Condições',
                  to: '',
                },
                {
                  text: 'Política de Cookies',
                  to: '',
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
                to: () => scrollTo('about-section'),
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
