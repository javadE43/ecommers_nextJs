import Link from 'next/link';
import Image from 'next/image';

import { ArticalCard, ContentCard, FooterSlider } from '../../ui/carousel-home-products';
import { cate } from '../../../data/categoryHome';
import { variantParagraph } from '@/components/ui/pargraph';

export default function CategoryProducts() {
    return (
        <div className="h-[187px] lg:h-[90px] w-full mt-4">
            <section className="w-full h-full">
                <div className="grid grid-cols-4 grid-row-1 lg:grid-cols-8 lg:grid-row-1 justify-between items-center h-full w-full">
                    {cate?.map((item) => (
                        <Link href="/cat" key={item.id}>
                            <ArticalCard shape={'category'}>
                                <ContentCard rounded={'lg'} className="h-auto">
                                    <Image
                                        src={item.img}
                                        height={50}
                                        width={50}
                                        alt="product"
                                        className="h-[52px] w-[52px] object-cover"
                                        loading="lazy"
                                        blurDataURL="blur"
                                    />
                                </ContentCard>
                                <FooterSlider className="text-gray-500 h-auto items-center m-0" custom={true}>
                                    <span className={variantParagraph({ textBody: 'default' })}>{item.title}</span>
                                </FooterSlider>
                            </ArticalCard>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
