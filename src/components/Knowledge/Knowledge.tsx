import { TagCloud } from '@frank-mayer/react-tag-cloud';
import './knowledge.css';
const Knowledge = () => {
  interface TagCloudOptions {}
  return (
    <div className="knowledge-sphere-box">
      <TagCloud
        className="knowledge-sphere"
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(570, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'fast',
          containerClass: 'sphere',
          itemClass: 'sphere--item',
        })}
      >
        {[
          'Java',
          'Spring Boot',
          'PostgreSQL',
          'Elastic Stack',
          'AWS',
          'Azure',
          'Redis',
          'Linux',
          'NodeJS',
          'JSP',
          'Auth0',
          'ES6',
          'Python',
          'Git',
          'GitHub',
          'Bash',
          'Tomcat',
          'GCP',
          'REST',
          'DNS',
          'API',
          'Microservices',
          'Kafka',
        ]}
      </TagCloud>
    </div>
  );
};

export default Knowledge;
