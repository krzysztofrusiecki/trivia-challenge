import MainPage from 'src/pages/Main';
import QuestionsPage from 'src/pages/Questions';
import ResultsPage from 'src/pages/Results';

const config = {
  apiBaseUrl: 'https://opentdb.com/api.php',
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/questions',
      component: QuestionsPage,
    },
    {
      path: '/results',
      component: ResultsPage,
    },
  ],
};

export default config;
