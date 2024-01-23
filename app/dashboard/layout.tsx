import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import Error from "./error"

export default function DashboardLayout({
    children,
    auth
}:{
    children: React.ReactNode,
    auth: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <ErrorBoundary errorComponent={ Error }>
                <nav>
                    NAVBAR Tag
                </nav>
                { children }
                { auth }
            </ErrorBoundary>
        </section>
    )
}