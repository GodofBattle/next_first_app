import { Links } from "./components/links";

export default function Template(props: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Links/>
            { props.children }
        </div>
    );
}