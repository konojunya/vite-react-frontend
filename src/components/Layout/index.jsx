import { Footer } from "../Footer/index.jsx";
import { Header } from "../Header/index.jsx";

export const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
