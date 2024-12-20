import PageTitle from "@/components/PageTitle";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import { ReportService } from "@/lib/server/services/reportService";

export default async function DashboardPage() {
  const reportService = new ReportService();
  const reportsWithUserLog = await reportService.getAllJoinedReportUserLog();
  const iotDevices = await reportService.getAllIotDevices();

  return (
    <div className="flex overflow-hidden flex-1 flex-col gap-3 p-4 lg:gap-3 lg:p-6">
      {/* <div className="flex items-center justify-between space-y-2">
        <PageTitle title="Dashboard" />
        <div className="flex items-center space-x-2">
          <Button>Download</Button>
          <Button>Create</Button>
        </div>
      </div> */}
      <PageTitle title="Dashboard" />

      <AnalyticsDashboard data={reportsWithUserLog} iotDevices={iotDevices} />
    </div>
  );
}
