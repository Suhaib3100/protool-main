import PageHero from '@/components/heros/PageHero';
import NewsLetter from '@/components/NewsLetter';
import Services from '@/components/Services';
import MembersCounter from '@/components/MembersCounter';
import Pricing from '@/components/Pricing';
export const metadata = {
  title: 'Protool Services',
  description:
    'Protool - Your All-in-One Agency for Web Development and Digital Marketing',
};
export default function ServicePage() {
  return (
    <>
      <PageHero
        subtitle="OUR SERVICES"
        title="The world’s best companies <br> trust Protool "
        paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
      />
      <Services sectionDetails={false} />
      <MembersCounter />
      <Pricing spacing={'pt-150 max-md:pt-20'} />
      <NewsLetter />
    </>
  );
}
