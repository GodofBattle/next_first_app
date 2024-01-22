import { Metadata } from "next";
import { GoToTop } from "../components/top";
import SortProducts from "../components/sortProducts";
import { LocaleSwitcher } from "../components/localeSwitcher";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'First Next.js App - Dashboard'
}

export default async function Page() {
    return (
        <section>
            <div style={{ height: '100vh' }}>
                <h1>Hello, Dashboard Page!!</h1>
                <br/>
                <Suspense fallback={<p>Loading Feed...</p>}>
                    <SortProducts/>
                </Suspense>
            </div>
            <div id="settings" style={{ height: '100vh' }}>
                <h2>Settings</h2>
                <br/>
                <GoToTop/>
                <br/>
                <br/>
                <SortProducts/>
                <br/>
                <br/>
                <LocaleSwitcher/>
            </div>
        </section>
    );
}