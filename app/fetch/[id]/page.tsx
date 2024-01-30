import getData from "../../lib/lotto";
import MyButtons from "../myButton";
import AddForm from "./add-form";
import Entry from "./entry";
import OptimisticTester from "./optimistic-form";

const Page = async ({
    params: { id }
}: {
    params: { id: string }
}) =>  {
    let data = await getData(id);

    return (
        <main>
            <h1>Data Fetch Test</h1>
            <MyButtons newData={data} />
            <div>
                <h4>{ JSON.stringify(data) }</h4>
            </div>

            <AddForm/>

            <OptimisticTester/>

            <div style={{padding: '0.5rem 2rem'}}>
                <Entry/>
            </div>
        </main>
    );
}

export default Page;