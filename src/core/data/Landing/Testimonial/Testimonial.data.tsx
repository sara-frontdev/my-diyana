import img1 from "$/images/landing/DianaCourses/1.webp";
import img2 from "$/images/landing/DianaCourses/2.webp";
import img3 from "$/images/landing/DianaCourses/3.webp";

export interface ITestimonialListPropType {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const testimonial: ITestimonialListPropType[] = [
  {
    id: 1,
    name: "علی رمضانی",
    description: "درس ریاضی خوب وشیرین بود",
    image: img1.src,
  },
  {
    id: 2,
    name: "هورا",
    description: "ورزش و کار گروهی را دوس دارم و عالی است",
    image: img2.src,
  },
  {
    id: 3,
    name: " دنیا",
    description: "زبان عالی بود",
    image: img3.src,
  },
];
