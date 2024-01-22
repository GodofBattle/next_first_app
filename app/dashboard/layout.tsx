import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import Error from "./error"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <ErrorBoundary errorComponent={ Error }>
                <nav>
                    NAVBAR Tag
                </nav>
                { children }
            </ErrorBoundary>
        </section>
    )
}