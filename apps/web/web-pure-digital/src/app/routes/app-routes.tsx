import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  HomeContainer,
  useDrawerContext,
  scrollTo,
  navigateToWaths,
} from '@pure-pages/feature';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ReactComponent as IntagramIcon } from '../../assets/images/social-media/Instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/social-media/Facebook.svg';

export const AppRouters = () => {
  const { setDrawerOptions } = useDrawerContext();
  const hasLoadedUserData = useRef(false);

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

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
        path="/"
        element={
          <HomeContainer
            header={{
              headerTitle: 'Pure Digital',
              headerListButtons: [
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
              ],
            }}
            company={{
              companyLogo: '/assets/images/logos/logo.svg',
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
            clients={{
              clientsTitle:
                '+ de 85 clientes confiaram em nós ao longo de toda nossa história.',
              clientsPhotos: [
                '/assets/images/companies/EmanuelFaria.svg',
                '/assets/images/companies/Tattoo.svg',
                '/assets/images/companies/Bless.svg',
                '/assets/images/companies/Alfa.svg',
                '/assets/images/companies/Gimenes.svg',
              ],
            }}
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
            cases={{
              casesTitle: 'Transformamos visões em soluções poderosas.',
              casesImages: [
                '/assets/images/cases/Burger-joint.svg',
                '/assets/images/cases/Traffic-management.svg',
                '/assets/images/cases/Gym.svg',
                '/assets/images/cases/Gym-alternative.svg',
                '/assets/images/cases/Traffic-management-alternative.svg',
                '/assets/images/cases/Petshop.svg',
                '/assets/images/cases/Info.svg',
                '/assets/images/cases/Marketing.svg',
              ],
            }}
            faq={{
              faqTitle: 'Perguntas Frequentes (FAQs)',
              faqSubTitle:
                'FAQ’s (Frequently Asked Questions) bem escritas podem entregar valor. Se você conhece seu público, sabe as perguntas frequentes - utilize aquelas que mais geram mais contato com o suporte. Não invente perguntas.',
              faqList: [
                {
                  id: '1',
                  title:
                    'O que é uma landing page e por que eu preciso de uma?',
                  description: '',
                },
                {
                  id: '2',
                  title: 'Qual é o prazo de entrega de uma landing page?',
                  description: '',
                },
                {
                  id: '3',
                  title: 'Como funciona o processo de criação da landing page?',
                  description: '',
                },
                {
                  id: '4',
                  title:
                    'Uma landing page será otimizada para dispositivos móveis?',
                  description: '',
                },
                {
                  id: '5',
                  title: 'Você oferece suporte após a entrega da landing page?',
                  description: '',
                },
              ],
            }}
            footer={{
              footerMobileColor: '#111116',
              footerTabletColor: '#D9D9D9',
              footerIcons: [
                {
                  icon: (
                    <FacebookIcon
                      style={{ color: smDown ? 'white' : 'black' }}
                    />
                  ),
                  to: 'https://www.facebook.com/profile.php?id=61568266243629',
                },
                {
                  icon: (
                    <IntagramIcon
                      style={{ color: smDown ? 'white' : 'black' }}
                    />
                  ),
                  to: 'https://www.instagram.com/_puredigital/',
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
          />
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
