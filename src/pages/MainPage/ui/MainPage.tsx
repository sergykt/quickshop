import { memo } from 'react';
import { Header } from '@/widgets/Header';
import { ProductList } from '@/widgets/ProductList';
import { Footer } from '@/widgets/Footer';
import { Container } from '@/shared/ui/Container';

const MainPage = memo(() => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <ProductList />
        </Container>
      </main>
      <Footer />
    </>
  );
});

export default MainPage;
