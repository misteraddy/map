import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <div className="min-h-screen font-sans overflow-y-hidden">
      <Header />
      <main><Outlet/></main>
    </div>
  );
}
