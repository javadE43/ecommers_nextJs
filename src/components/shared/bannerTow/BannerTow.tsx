import { Banner, ContainerBanner } from '@/components/ui/banner';

const BannerTow = () => {
    return (
        <ContainerBanner numberof={'tow'}>
            <Banner url="/images/bannerProducts/banner13.webp" to="/" />
            <Banner url="/images/bannerProducts/banner14.webp" to="/" />
        </ContainerBanner>
    );
};
export default BannerTow;
