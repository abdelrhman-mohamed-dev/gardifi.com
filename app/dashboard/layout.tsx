import AdminPanelLayout from "@/components/admin-panal/admin-panel-layout";
import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";
import { SidebarLayout } from "@/components/SidebarLayout";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (


        <ProtectedRoute>
            <AdminPanelLayout>
                <SidebarLayout>
                    <main className="flex w-full flex-col h-full overflow-y-scroll ">
                        <Header />
                        {children}
                    </main>
                </SidebarLayout>
            </AdminPanelLayout>
        </ProtectedRoute>
    );
}
