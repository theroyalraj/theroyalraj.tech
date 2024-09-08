import {
  Manage,
  TipCalculator,
  EvoGym,
  darFi,
  salesken,
  salesken2,
  bitaansh,
  netflix,
  lk,
  careerin,
} from '@static/images';

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
    id: 'lk',
    name: 'SDE@Lenskart ',
    date: '(03/2023 - Present)',
    info: `<React.Fragment>
  <ul type="disc">Lenskart is a leading tech focused eyewear company oﬀering a wide range of glasses with innovative technology like virtual try-on.
<br><strong><u><center>Achievements/Tasks</center></u></strong>
<li>•Productionized Visual Search (frame suggestions based on visually similar frames) used yoloV5 for frame detection, MilvusDB for vector search and integrated it with product listing API.</li>
<li>•Designed, developed and integrated a versatile library compatible with spring projects, facilitating seamless integration for encrypting or decrypting <strong>Personally Identiﬁable Information (PII) </strong>  data stored in Database or Network transit making the system more secure.</li>
<li>•Integrated Juspay payment gateway, enabling dynamic routing for both PayU and Juspay concurrently. Achieved a <strong>10% increase</strong> in uptime and more payment options, leading to a <strong>5% increase</strong> in revenue worldwide..</li></ul>
</ul>
<React.Fragment>`,

    stack: ['Java', 'JavaScript', 'NodeJs', 'Spring Boot', 'PostgreSQL', 'ELK Stack', 'Azure', 'AWS', 'Redis', 'Kafka'],
    code: '',
    live: 'https://salesken.ai/',
    image: lk,
  },
  {
    id: 'sde',
    name: 'SDE@Salesken ',
    date: '(09/2020 - 03/2023)',
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
    id: 'careerin',
    name: 'CareerIn Platform',
    date: '(06/2019 - 07/2019)',
    info: 'Led the development of CareerIn, a professional career counseling platform. Employs AI-driven questionnaires to predict optimal career paths, while also providing insights into industry trends and alternative career probabilities.',
    stack: ['Spring Boot', 'H2o.ai', 'JSP', 'PostgreSQL'],
    code: 'https://github.com/SkilledIn-Labs/careerIn',
    live: 'https://github.com/SkilledIn-Labs/careerIn',
    image: careerin,
  },
  {
    id: 'ml',
    name: 'Movie Recommendation System Using Netflix Dataset | Machine Learning',
    date: '(06/2019 - 07/2019)',
    info: 'Made a Movie Recommendation based on user rating using Netflix Dataset.',
    stack: ['Machine Learning', 'SCIKIT-Learn', 'NumPy', 'Pandas', 'MatplotLib'],
    code: 'https://github.com/theroyalraj/Machine-Learning',
    live: 'https://github.com/theroyalraj/Machine-Learning',
    image: netflix,
  },
  {
    id: 'tip',
    name: 'BITaansh Website | Web Development',
    date: '(08/2018 - 08/2018)',
    info: 'Made a Dynamic Website for College Cultural fest.',
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Nodejs'],
    code: 'https://github.com/theroyalraj/BITaansh19',
    live: 'https://bitaansh.netlify.app/',
    image: bitaansh,
  },
];
