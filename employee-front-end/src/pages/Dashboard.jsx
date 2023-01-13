import DashboardStats from "../components/DashboardStats";
import DashboardChart from "../components/DashboardChart";
const Dashboard = () => {
  return (
    <main className="m-6 w-auto">
      <header className="py-4">
        <h2 className="mb-2 text-left text-xl font-extrabold text-primary">
          Dashboard
        </h2>
      </header>

      <DashboardStats />

      {/* <DashboardChart /> */}

    </main>
  );
};

export default Dashboard;
