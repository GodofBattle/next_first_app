import './parallel.css';

export default function ParallelLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <div>
            { props.children }
            { props.modal }
            <div id="modal-root"></div>
        </div>
    );
}