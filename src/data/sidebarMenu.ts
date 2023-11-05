import { v4 as uuidv4 } from "uuid";
export interface SubMenufive {
  id: string;
  title: string;
  to: string;
  header: boolean;
  sidebar: boolean;
  img?: string;
  icon: any;
  subMenu?:any
}
export interface SubMenuFore {
  id: string;
  title: string;
  to: string;
  header: boolean;
  sidebar: boolean;
  img?: string;
  icon: any;
  subMenu?:SubMenufive[]
}
export interface SubMenuThree {
  id: string;
  title: string;
  to: string;
  header: boolean;
  sidebar: boolean;
  img?: string;
  icon: any;
  subMenu?:SubMenuFore[]
}
export interface SubMenuTow {
  id: string;
  title: string;
  to: string;
  header: boolean;
  sidebar: boolean;
  icon: any;
  img?: string;
  subMenu?: SubMenuThree[];
}
export interface SdebarItemssubMenu {
  id: string;
  title: string;
  to: string;
  icon: any;
  img?: string;
  header: boolean;
  sidebar: boolean;
  subMenu?: SubMenuTow[];
}

export interface SidebarItems {
  id: string;
  title: string;
  margin?: number;
  to?: string;
  header: boolean;
  icon?: string;
  sidebar: boolean;
  linkAllVeiw?: string;
  subMenu?: SdebarItemssubMenu[];
}

//SIDEBAR ITEMS subMenu
export const links: SidebarItems[] = [
  {
    id: uuidv4(),
    title: "موتور",
    linkAllVeiw: "مشاهده همه موبایل",
    icon: "",
    header: true,
    sidebar: false,
  },
  {
    id: uuidv4(),
    title: "ماشین",
    linkAllVeiw: "مشاهده همه موبایل",
    icon: "",
    header: true,
    sidebar: false,
  },
  {
    id: uuidv4(),
    title: "سوپر مارکت",
    linkAllVeiw: "مشاهده همه موبایل",
    icon: "",
    header: true,
    sidebar: false,
  },
  {
    id: uuidv4(),
    title: "موتور",
    linkAllVeiw: "مشاهده همه موبایل",
    icon: "",
    header: true,
    sidebar: false,
  },
  {
    id: uuidv4(),
    title: "ماشین",
    linkAllVeiw: "مشاهده همه موبایل",
    icon: "",
    header: true,
    sidebar: false,
  },
  {
    id: uuidv4(),
    title: "سوپر مارکت",
    linkAllVeiw: "مشاهده همه موبایل",
    icon: "",
    header: true,
    sidebar: false,
  },
  {
    id: uuidv4(),
    title: "ویژه",
    linkAllVeiw: "مشاهده همه موبایل",
    icon: "",
    header: true,
    sidebar: false,
  },
  {
    id: uuidv4(),
    title: "موبایل",
    linkAllVeiw: "مشاهده همه موبایل",
    icon: "",
    header: true,
    sidebar: false,
    subMenu: [
      {
        id: uuidv4(),
        title: "سامسونگ",
        to: "/",
        icon: "",
        header: true,
        sidebar: false,
        subMenu: [
          {
            id: uuidv4(),
            title: "S سامسونگ سری ",
            to: "/",
            icon: "",
            img: "/images/carouselCategoryHome/banner1.webp",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "J سامسونگ سری ",
            to: "/",
            icon: "",
            img: "/images/carouselCategoryHome/banner2.webp",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "A سامسونگ سری ",
            to: "/",
            icon: "",
            img: "/images/carouselCategoryHome/banner3.webp",
            header: true,
            sidebar: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "هواوی",
        to: "/",
        icon: "",
        header: true,
        sidebar: false,
        subMenu: [
          {
            id: uuidv4(),
            title: "P هواوی سری ",
            to: "/",
            icon: "",
            img: "/images/carouselCategoryHome/banner4.webp",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "G هواوی سری ",
            to: "/",
            icon: "",
            img: "/images/carouselCategoryHome/banner5.webp",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "Y هواوی سری ",
            to: "/",
            icon: "",
            img: "/images/carouselCategoryHome/banner6.webp",
            header: true,
            sidebar: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "اپل",
        to: "/",
        icon: "",
        header: true,
        sidebar: false,
        subMenu: [
          {
            id: uuidv4(),
            title: "14 ایفون ",
            to: "/",
            icon: "",
            img: "/images/carouselCategoryHome/banner7.webp",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "13 ایفون ",
            to: "/",
            icon: "",
            img: "/images/carouselCategoryHome/banner8.webp",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "12 ایفون ",
            to: "/",
            icon: "",
            img: "/images/carouselCategoryHome/banner10.webp",
            header: true,
            sidebar: false,
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    linkAllVeiw: "مشاهده همه محصولات دیجیتال",
    title: "دیجیتال",
    header: true,
    sidebar: false,
    subMenu: [
      {
        id: uuidv4(),
        title: "محصولات دیجیتال",
        to: "/service11",
        icon: "",
        header: true,
        sidebar: false,
      },
    ],
  },

  {
    id: uuidv4(),
    linkAllVeiw: "مشاهده همه کنسول ها",
    title: "کنسول",
    header: true,
    sidebar: false,
    subMenu: [
      {
        id: uuidv4(),
        title: "کنسول سونی",
        to: "/service",
        icon: "",
        header: true,
        sidebar: false,
      },
      {
        id: uuidv4(),
        title: "ایکس باکس",
        to: "/service1",
        icon: "",
        header: true,
        sidebar: false,
      },
      {
        id: uuidv4(),
        title: "ایکس باکس",
        to: "/service1",
        icon: "",
        header: true,
        sidebar: false,
      },
    ],
  },
  {
    id: uuidv4(),
    linkAllVeiw: "مشاهده همه لوازم خانگی",
    title: "لوازم خانگی",
    to: "/service7",
    header: true,
    sidebar: false,
    subMenu: [
      {
        id: uuidv4(),
        title: "یخچال",
        to: "/service7",
        icon: "",
        header: true,
        sidebar: false,
        subMenu: [
          {
            id: uuidv4(),
            title: "ماشین لباس شویی",
            to: "/service7",
            icon: "",
            header: true,
            sidebar: false,
            subMenu: [
              {
                id: uuidv4(),
                title: "789جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
                subMenu: [
                  {
                    id: uuidv4(),
                    title: "444جاروبرقی",
                    to: "/service4",
                    icon: "",
                    header: true,
                    sidebar: false,
                    subMenu: [
                      {
                        id: uuidv4(),
                        title: "4444جاروبرقی",
                        to: "/service4",
                        icon: "",
                        header: true,
                        sidebar: false,
                        
                      },
                      {
                        id: uuidv4(),
                        title: "44444جاروبرقی",
                        to: "/service4",
                        icon: "",
                        header: true,
                        sidebar: false,
                      },
                    ],
                  },
                  {
                    id: uuidv4(),
                    title: "333جاروبرقی",
                    to: "/service4",
                    icon: "",
                    header: true,
                    sidebar: false,
                  },
                ],
              },
              {
                id: uuidv4(),
                title: "جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
            ],
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "4محصولات خانگی",
        to: "/service4",
        icon: "",
        header: true,
        sidebar: false,
        subMenu: [
          {
            id: uuidv4(),
            title: "ماشین لباس شویی",
            to: "/service7",
            icon: "",
            header: true,
            sidebar: false,
            subMenu: [
              {
                id: uuidv4(),
                title: "جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
              {
                id: uuidv4(),
                title: "جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
            ],
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "3محصولات خانگی",
        to: "/service4",
        icon: "",
        header: true,
        sidebar: false,
        subMenu: [
          {
            id: uuidv4(),
            title: "ماشین لباس شویی",
            to: "/service7",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "ماشین لباس شویی",
            to: "/service7",
            icon: "",
            header: true,
            sidebar: false,
            subMenu: [
              {
                id: uuidv4(),
                title: "جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
              {
                id: uuidv4(),
                title: "جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
            ],
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "2محصولات خانگی",
        to: "/service4",
        icon: "",
        header: true,
        sidebar: false,
        subMenu: [
          {
            id: uuidv4(),
            title: "ماشین لباس شویی",
            to: "/service7",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
            subMenu: [
              {
                id: uuidv4(),
                title: "جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
              {
                id: uuidv4(),
                title: "جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        title: "1محصولات خانگی",
        to: "/service4",
        icon: "",
        header: true,
        sidebar: false,
        subMenu: [
          {
            id: uuidv4(),
            title: "ماشین لباس شویی",
            to: "/service7",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "ماشین لباس شویی",
            to: "/service7",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "1000جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
            subMenu: [
              {
                id: uuidv4(),
                title: "12جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
              {
                id: uuidv4(),
                title: "11جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
            ],
          },
          {
            id: uuidv4(),
            title: "12000جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
            subMenu: [
              {
                id: uuidv4(),
                title: "132جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
              {
                id: uuidv4(),
                title: "113جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        title: "155محصولات خانگی",
        to: "/service4",
        icon: "",
        header: true,
        sidebar: false,
        subMenu: [
          {
            id: uuidv4(),
            title: "ماشین لباس شویی",
            to: "/service7",
            icon: "",
            header: true,
            sidebar: false,
          },
          {
            id: uuidv4(),
            title: "1000جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
            subMenu: [
              {
                id: uuidv4(),
                title: "12جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
              {
                id: uuidv4(),
                title: "11جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
            ],
          },
          {
            id: uuidv4(),
            title: "12000جاروبرقی",
            to: "/service4",
            icon: "",
            header: true,
            sidebar: false,
            subMenu: [
              {
                id: uuidv4(),
                title: "132جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
              {
                id: uuidv4(),
                title: "113جاروبرقی",
                to: "/service4",
                icon: "",
                header: true,
                sidebar: false,
              },
            ],
          },
        ],
      },
    ],
  },
];
