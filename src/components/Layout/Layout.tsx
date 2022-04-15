import { Header } from 'components/Header';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      {children}
    </div>
  );
};