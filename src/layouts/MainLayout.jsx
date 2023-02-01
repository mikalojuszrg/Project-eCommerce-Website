import TopBar from "./TopBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default MainLayout;
