import { v4 as uuidv4 } from "uuid";

interface Blog {
  id: string;
  title: string;
  img: string;
}

export const blog: Blog[] = [
  {
    id: uuidv4(),
    title: "توضیحات مختصر در مورد مقاله نوشته شده برای مطالعه بیشتر کلیک کنید",
    img: "/images/carouselBlog/banner1.jpg",
  },
  {
    id: uuidv4(),
    title: "توضیحات مختصر در مورد مقاله نوشته شده برای مطالعه بیشتر کلیک کنید",
    img: "/images/carouselBlog/banner2.jpg",
  },
  {
    id: uuidv4(),
    title: "توضیحات مختصر در مورد مقاله نوشته شده برای مطالعه بیشتر کلیک کنید",
    img: "/images/carouselBlog/banner3.jpg",
  },
  {
    id: uuidv4(),
    title: "توضیحات مختصر در مورد مقاله نوشته شده برای مطالعه بیشتر کلیک کنید",
    img: "/images/carouselBlog/banner4.jpg",
  },
];
