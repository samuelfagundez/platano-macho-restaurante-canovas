import { Outlet } from 'react-router-dom';
import { ClientOnly } from 'vite-react-ssg';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Outlet />
      <ClientOnly>{() => <FloatingWhatsApp />}</ClientOnly>
    </>
  );
}
