// import { auth } from "@/auth";
import { Sidebar } from "@/components/navbar/Sidebar";
import { Topbar } from "@/components/navbar/TopBar";
import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuth();
  console.log(session?.user);

  // Redirect or handle cases where session or user is undefined
  if (!session || !session.user) {
    console.log(session);
    console.log("Redirecting to /login");
    // Replace with your app's redirection logic
    redirect("/login4");
  }

  // const tempUser = {
  //   name: "John Doe",
  //   email: "dmalkdmwakldmwkal@gmail.com",
  //   role: "admin",
  //   id: "123",
  // };

  return (
    <div className="flex h-screen ">
      <Sidebar userSession={session.user} />
      <div className="flex flex-col flex-1">
        <Topbar userSession={session.user} />
        <main
          className="flex-1 custom-scrollbar "
          role="main"
          aria-label="Dashboard Content"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
