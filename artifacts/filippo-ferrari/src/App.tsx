import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoManager from "@/components/SeoManager";
import Home from "@/pages/Home";
import ChiSono from "@/pages/ChiSono";
import Partner from "@/pages/Partner";
import Galleria from "@/pages/Galleria";
import Contatti from "@/pages/Contatti";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      <ScrollToTop />
      <SeoManager />
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/chi-sono" component={ChiSono} />
          <Route path="/partner" component={Partner} />
          <Route path="/galleria" component={Galleria} />
          <Route path="/contatti" component={Contatti} />
          <Route path="/privacy" component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
