import { Links } from "./components/links";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{ backgroundColor: '#ffaa0010' }}
        >
            <Links/>
            {children}
        </div>
    );
}