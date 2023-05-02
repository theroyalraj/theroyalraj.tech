import { Manage, TipCalculator, EvoGym, darFi, salesken, salesken2, bitaansh, netflix } from '@static/images';

export const featured: {
  id: string;
  name: string;
  date: string;
  info: string;
  stack: string[];
  code?: string;
  live?: string;
  image?: string;
}[] = [
    {
      id: 'sde',
      name: 'SDE@Salesken ',
      date: "(09/2020 - Present)",
      info: `<React.Fragment>
    <ul type="disc">
  My role was to Design, develop, deploy, and maintain core services.
  <br><strong><u><center>Achievements/Tasks</center></u></strong>
  <li>•Designed, structured, scaled, and developed core analysis engine V2 entirely from the ground up utilizing the spring framework, resulting in a <strong>6x increase in our load capacity</strong>.</li>
  <li>•Conducted Proof of Concept (PoC) and migrated reporting data from Postgres to Elasticsearch, resulting in a <strong>500% improvement in page load speed.</strong></li>
  <li>•Integrated <strong>ChatGPT</strong> with a live queuing server to provide personalized prompts, reducing onboarding time from one month to just a few hours.</li>
  <li>•Implemented cutting-edge semantic search using ElasticSearch, BERT, and USE embeddings, enabling precise and meaningful <strong>search results based on query meaning</strong>, enhancing user experience and search functionality.</li>
  <li>•Built and scaled Webinar Bot which facilitates attendance and recording for providers such as Google Meet, MS Teams and Zoom. Leveraging puppeteer, Node.js and Kubernetes in the process which can handle <strong>2k concurrent live webinars</strong>.</li>
  <li>•Contributed to Proof of Concept (PoC) and aided in the development of a predictive model for forecasting won-loss opportunities using Google AutoML, which helped raise our series B funding.</li>
  <li>•Assisted with the development and productization of h20.ai AutoML model.</li>
  <li>•Utilized the Twilio SDK to establish Automated Voice Response systems that authenticate user phone numbers.</li>
  <li>•Implemented and enhanced the performance of numerous API(s).</li></ul>
  </ul>
<React.Fragment>`,

      stack: ['Java', 'JavaScript', 'NodeJs', 'Spring Boot', 'PostgreSQL', 'ELK Stack', 'Azure', 'AWS', 'Redis', 'Kafka'],
      code: '',
      live: 'https://salesken.ai/',
      image: salesken,
    },
    {
      id: 'ml',
      name: 'Movie Recommendation System Using Netflix Dataset | Machine Learning',
      date: "(06/2019 - 07/2019)",
      info: "Made a Movie Recommendation based on user rating using Netflix Dataset.",
      stack: ['Machine Learning', 'SCIKIT-Learn', 'NumPy', 'Pandas', 'MatplotLib'],
      code: 'https://github.com/theroyalraj/Machine-Learning',
      live: 'https://github.com/theroyalraj/Machine-Learning',
      image: netflix,
    },
    {
      id: 'tip',
      name: 'BITaansh Website | Web Development',
      date: "(08/2018 - 08/2018)",
      info: 'Made a Dynamic Website for College Cultural fest.',
      stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Nodejs'],
      code: 'https://github.com/theroyalraj/BITaansh19',
      live: 'https://bitaansh.netlify.app/',
      image: bitaansh,
    }
  ];
