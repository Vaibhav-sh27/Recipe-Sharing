import Sidebar from "./Sidebar";
// import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <main
        className="content"
        style={{ marginLeft: "15vw", marginTop: "35px" }}
      >
        {children}
      </main>
    </div>
  );
};
export default Layout;
