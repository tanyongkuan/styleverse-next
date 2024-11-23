import Button from '../components/buttons/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Features from './components/Features';
import ProductList from './components/ProductList';
import { Suspense } from 'react';

const featureList = [
  {
    title: 'Original Products',
    description:
      'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.'
  },
  {
    title: 'Satisfaction Guarantee',
    description:
      'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.'
  },
  {
    title: 'New Arrival Everyday',
    description:
      'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.'
  },
  {
    title: 'Fast & Free Shopping',
    description:
      'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-4 md:max-w-4xl md:py-8 lg:max-w-5xl lg:gap-y-14 lg:py-14 xl:max-w-6xl xl:gap-y-16 xl:px-0 xl:py-16">
      <div
        className="h-96 w-full rounded-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/Container.png')` }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-7 px-4">
          <span className="max-w-3xl text-center text-3xl font-bold text-white md:text-4xl md:font-semibold lg:max-w-4xl lg:text-5xl">
            Level up your style with our summer collections
          </span>
          <Link href="/category/all">
            <Button text="Shop Now" className="bg-white">
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-items-start gap-4 lg:gap-12">
        <span className="w-156 text-2xl font-bold text-neutral-900">
          We provide the best customer experiences
        </span>
        <div className="grid grid-cols-1 items-start justify-items-stretch gap-5 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-4 lg:gap-12">
          {featureList.map((feature, index) => (
            <Features key={index} feature={feature} />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col justify-items-start gap-12">
        <span className="text-3xl font-bold">Featured Products</span>
        <div className="grid grid-cols-1 justify-stretch gap-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4">
          {/* <ProductListItem
          v-for="featuredProduct in featuredProducts"
          :key="featuredProduct.id"
          :product="featuredProduct"
        /> */}
          <Suspense fallback={<span>Loading</span>}>
            <ProductList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
