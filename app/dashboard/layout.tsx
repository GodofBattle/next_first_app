export default function DashboardLayout(props: {
    children: React.ReactNode,
    auth: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>
                NAVBAR Tag
            </nav>
            { props.children }
            { props.auth }
        </section>
    )
}