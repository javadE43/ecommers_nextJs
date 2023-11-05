import { Banner, ContainerBanner } from '@/components/ui/banner';

const BannerFore = () => {
    return (
        <ContainerBanner numberof={'fore'}>
            <Banner url="/images/bannerProducts/banner9.webp" to="/" />
            <Banner url="/images/bannerProducts/banner10.webp" to="/" />
            <Banner url="/images/bannerProducts/banner11.webp" to="/" />
            <Banner url="/images/bannerProducts/banner12.webp" to="/" />
        </ContainerBanner>
    );
};
export default BannerFore;
