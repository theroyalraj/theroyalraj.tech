const Mail = 'raj.utkarsh001@gmail.com';
const Gh = 'https://github.com/theroyalraj';
const In = 'https://www.linkedin.com/in/theroyalraj/';
const Insta = ' https://www.instagram.com/_u.t.k.a.r.s.h_r.a.j_';

const connectLinks: {
  id: string;
  link: string;
}[] = [
  {
    id: 'gmail',
    link: `mailto:${Mail}`,
  },
  {
    id: 'linkedin',
    link: In,
  },
  {
    id: 'github',
    link: Gh,
  },
  {
    id: 'whatsapp',
    link: 'https://api.whatsapp.com/send/?phone=%2B917870455443&text=hi&type=phone_number&app_absent=0',
  },
  {
    id: 'instagram',
    link: 'https://www.instagram.com/_u.t.k.a.r.s.h_r.a.j_',
  },
];

export { Mail, Gh, In, connectLinks, Insta };
