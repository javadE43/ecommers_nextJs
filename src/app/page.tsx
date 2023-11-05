import CarouselProducts from '@/components/shared/carouselProducts/CaroudelProducts';
import CarouselHome from '../components/extras/carouselHome/CarouselHome';
import { ContainerBanner, Banner } from '@/components/ui/banner';
import CategoryProducts from '@/components/shared/categorysProducts/CategoryProducts';
import CarouselCategory from '@/components/shared/carouselCategory/CarouselCategory';
import CarouselBlog from '@/components/shared/carouselBlog/CarouselBlog';
import SectionBetween from '@/components/shared/sectionBetween/SectionBetween';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import BannerFore from '@/components/shared/bannerFore/BannerFore';
import BannerTow from '@/components/shared/bannerTow/BannerTow';
import { Suspense } from 'react';

async function Home() {
    return (
        <>
            {/* HEADER */}
            <Header />
            <main
                id="headerـlayoutـfixedJpadding"
                className="@container flex flex-col w-full pb-[65px] lg:pb-[0] items-center overflow-hidden"
            >
                {/* CAROUSEL HOME SATRT */}
                <CarouselHome />

                {/* CAROUSEL HOME END */}
                <div className="lg:container w-full flex flex-col !pr-[1rem] !pl-[1rem] gap-y-2 @8xl:w-11/12 @8xl:mx-auto">
                    {/* CIRCEL CATEGORY START */}
                    <CategoryProducts />
                    {/* CIRCEL CATEGORY END */}

                    {/* CAROUSEL PRODUCTS START */}
                    <CarouselProducts />
                    {/* CAROUSEL PRODUCTS END */}

                    {/* SECTION BETWEEN START */}
                    <SectionBetween />
                    {/* SECTION BETWEEN END */}

                    {/* BANNER START */}
                    {/* <BannerFore /> */}
                    {/* BANNER END */}

                    {/* CAROUSEL CATEGORY START */}
                    <CarouselCategory />
                    {/* CAROUSEL CATEGORY END */}

                    {/* BANNER START */}
                    <BannerTow />
                    {/* BANNER END */}

                    {/* CAROUSELBLOG START */}
                    <CarouselBlog />
                    {/* CAROUSELBLOG END */}
                </div>
            </main>
            {/* FOOTER */}
            <Suspense fallback={<h1 className="text-red-400 text-sm">footer suspense</h1>}>
                <Footer />
            </Suspense>
        </>
    );
}

export default Home;
