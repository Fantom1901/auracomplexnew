import PageWrapper from '@/components/layout/PageWrapper';
import PasswordFormSection from './components/PasswordFormSection';

export default function LoginPage() {
  return (
    <PageWrapper title="Авторизация">
      <PasswordFormSection />
    </PageWrapper>
  );
}