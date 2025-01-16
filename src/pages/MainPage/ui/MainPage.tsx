import { memo } from 'react';
import { Header } from '@/widgets/Header';
import { Container } from '@/shared/ui/Container';
import { ProductList } from '@/widgets/ProductList';

const MainPage = memo(() => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <ProductList />
        </Container>
      </main>
    </>
  );
});

export default MainPage;
