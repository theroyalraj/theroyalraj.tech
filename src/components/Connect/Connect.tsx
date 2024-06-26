import { animated, useInView } from '@react-spring/web';
import { connectLinks, Mail } from '@/shared';
import { Button } from '@/components';
import {
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiGithub,
  SiFrontendmentor,
  SiDiscord,
  SiTelegram,
  SiWhatsapp,
} from 'react-icons/si';
import './connect.css';
const Connect = () => {
  const icons = [<SiGmail />, <SiLinkedin />, <SiGithub />, <SiWhatsapp />, <SiInstagram />];
  const isMobile = window.innerWidth < 475;
  let ref;
  let springs;
  !isMobile &&
    ([ref, springs] = useInView(
      () => ({
        from: {
          y: 50,
          opacity: 0,
        },
        to: {
          y: 0,
          opacity: 1,
        },
        config: {
          duration: 500,
        },
      }),
      {
        once: true,
        rootMargin: '0px 0px -40% 0px',
      },
    ));
  return (
    <section ref={ref} id="connect" className="connect">
      <animated.div style={springs} className="cta-box">
        <h3 className="title">How do you do?</h3>
        <h4 className="sub-title">Let's get in touch</h4>
        <p className="text">
          I'm <span className="bold">actively</span> looking for <span className="bold">new opportunities</span>. But
          even if you don't have a job offer for me, I'd <span className="bold">appreciate</span> if you pass by just to{' '}
          <span className="bold">say hi!</span> Also, don't hesitate in letting me know any{' '}
          <span className="bold">feedback</span> or <span className="bold">recommendations</span> you have.
          I am also a music enthusiast. Checkout my Instagram for violin covers.

        </p>
        <Button title="Get In Touch!" link={`mailto:${Mail}`} />
      </animated.div>
      <animated.div style={springs} className="connect-links-box">
        <ul ref={ref} className="connect-links">
          {connectLinks.map((item, index) => (
            <li key={item.id}>
              <a target="_blank" href={item.link} className="link">
                {icons[index]}
              </a>
            </li>
          ))}
        </ul>
      </animated.div>
    </section>
  );
};

export default Connect;
