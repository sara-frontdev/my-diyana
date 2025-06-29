import img1 from "$/images/landing/DianaCourses/1.webp";
import img2 from "$/images/landing/DianaCourses/2.webp";
import img3 from "$/images/landing/DianaCourses/3.webp";

export interface ICoursesListPropType {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const courses: ICoursesListPropType[] = [
  {
    id: 1,
    title: "دوره نقاشی",
    description: "آشنایی با سازهای ابتدایی و پرورش گوش موسیقایی.",
    image: img1.src,
  },
  {
    id: 2,
    title: "دوره موسیقی",
    description: "آشنایی با سازهای ابتدایی و پرورش گوش موسیقایی.",
    image: img2.src,
  },
  {
    id: 3,
    title: "1دوره موسیقی",
    description: "آشنایی با سازهای ابتدایی و پرورش گوش موسیقایی.",
    image: img3.src,
  },
];
