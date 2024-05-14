import { PageWrapper } from "../../styles/styles.js";
import Footer from "../footer/Footer";
import AdminHeader from "../header/AdminHeader";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <PageWrapper>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default AdminLayout;
