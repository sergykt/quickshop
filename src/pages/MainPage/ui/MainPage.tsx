import { memo } from 'react';
import { Header } from '@/widgets/Header';
import { Container } from '@/shared/ui/Container';

const MainPage = memo(() => {
  return (
    <>
      <Header />
      <main>
        <Container>Main Page</Container>
      </main>
    </>
  );
});

export default MainPage;
