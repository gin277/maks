import { Header } from "../ui/header/header";
import AppContent from "./AppContent";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className="AppContent">
        <AppContent />
      </div>
    </>
  );
};
