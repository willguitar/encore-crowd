import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TypographyUpdate from "@/components/TypographyUpdate";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignDetails from "./pages/CampaignDetails";
import Dashboard from "./pages/Dashboard";
import VenueDashboard from "./pages/VenueDashboard";
import ArtistDashboard from "./pages/ArtistDashboard";
import Explore from "./pages/Explore";
import ArtistProfile from "./pages/ArtistProfile";
import Voting from "./pages/Voting";
import Rankings from "./pages/Rankings";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import FanProfile from "./pages/FanProfile";
import PaymentDemoPage from "./components/PaymentDemoPage";
import AppLayout from "./components/AppLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Dark theme aplicado globalmente */}
      <div className="dark min-h-screen bg-background text-foreground font-sans">
        <TypographyUpdate />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Index />} />
              <Route path="explore" element={<Explore />} />
              <Route path="voting" element={<Voting />} />
              <Route path="rankings" element={<Rankings />} />
              <Route path="create-campaign" element={<CreateCampaign />} />
              <Route path="campaign/:id" element={<CampaignDetails />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="venue-dashboard" element={<VenueDashboard />} />
              <Route path="artist-dashboard" element={<ArtistDashboard />} />
              <Route path="artist/:id" element={<ArtistProfile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="fan-profile/:id" element={<FanProfile />} />
              <Route path="payment-demo" element={<PaymentDemoPage />} />
            </Route>
            {/* Auth routes without sidebar */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
