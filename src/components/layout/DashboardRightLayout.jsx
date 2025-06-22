import Header from "../Header";

const DashboardRightLayout = ({ openDrawer, children }) => {
  return (
    <main className="flex-1 w-full h-screen bg-[var(--background)]">
      <Header openDrawer={openDrawer} />
      <div
        className="p-4 md:p-8 bg-[var(--background)] overflow-y-auto"
        style={{ height: "calc(100% - 64px)" }}
      >
        {children}
      </div>
    </main>
  );
};

export default DashboardRightLayout;
