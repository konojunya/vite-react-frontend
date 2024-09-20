import { Layout } from "./components/Layout/index.jsx";
import { Index } from "./pages/Index/index.jsx";

export const App = () => {
  return (
    <Layout>
      <div className="px-8 py-4">
        <Index />
      </div>
    </Layout>
  );
};
