import MainPage from 'src/pages/Main';
import QuestionsPage from 'src/pages/Questions';
import ResultsPage from 'src/pages/Results';

const config = {
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/question',
      component: QuestionsPage,
    },
    {
      path: '/results',
      component: ResultsPage,
    },
  ],
};

export default config;
