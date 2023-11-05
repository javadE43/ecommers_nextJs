import Navbar, { NavbarMobile } from '../../extras/navbar/Navbar';
import BannerNavbarTop from '../../extras/bnnerNavbarTop/BannerNavbarTop';
export default function Header() {
    return (
        <header className="group border-b-[1px] border-gray-400 fixed left-0 right-0 bg-white z-9999999 top-0 flex flex-col max-h-auto h-auto items-center gap-y-2  dark:bg-bg_base_dark">
            <BannerNavbarTop />
            {/* BANNER TOP NAVBAR END */}
            {/* MENU DESKTOP HEADRER START */}
            <Navbar />
            {/* MENU DESKTOP HEADRER END */}
            {/* NAVBAR MOBILE START */}
            <NavbarMobile />
            {/* NAVBAR MOBILE END */}
        </header>
    );
}
