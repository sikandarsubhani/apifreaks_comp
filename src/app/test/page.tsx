import Footer from '@/library/components/Footer';
import ModernFooter from '@/library/components/ModernFooter';

export default function TestPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-8">Component Tests</h1>

      <section>
        <h2 className="text-2xl font-bold text-center py-4">Modern Footer (Recommended)</h2>
        <ModernFooter
          logoSrc="/img/logo-black-bg-small.jpg"
          logoAlt="Test Company"
        />
      </section>

      <div className="h-8 bg-gray-200"></div>

      <section>
        <h2 className="text-2xl font-bold text-center py-4">Original Footer (Container Queries)</h2>
        <div className="@container">
          <Footer />
        </div>
      </section>
    </div>
  );
}
