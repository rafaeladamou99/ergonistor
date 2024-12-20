export interface Content {
  home: {
    title: string;
    msg: string;
  };
  services: {
    title: string;
    msg: string;
    subtitle: string;
  };
  projects: {
    title: string;
    msg: string;
    subtitle: string;
  };
  about: {
    title: string;
    msg: string;
    sections: {
      title: string;
      paragraphs: string[];
    }[];
    key_people: {
      name: string;
      position: string;
      img: string;
    }[];
  };
  faq: {
    title: string;
    msg: string;
    questions: {
      title: string;
      paragraphs: string[];
    }[];
  };
  contact: {
    title: string;
    msg: string;
    telephone: ContactMedium;
    email: ContactMedium;
  };
}

export interface ContactMedium {
  value: string;
  msg: string;
}

export interface ContentProp {
  content?: Content;
}

export interface ContentResponse extends ContentProp {
  content_title: string;
  is_primary: boolean;
}

export interface Service {
  title: string;
  paragraphs: string[];
  img1: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  _id: string;
}

export interface ServiceCategories {
  title: string;
  description: string;
  img: string;
  _id: string;
}

export interface Project {
  title: string;
  paragraphs: string[];
  img1: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  architect?: string;
  status?: string;
  _id: string;
}

export interface Slider {
  msg: string;
  imgs: string[];
  logo?: string;
}
