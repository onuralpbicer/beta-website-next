import {redirect} from "next/navigation";

export async function generateStaticParams() {
    return ['tr-TR' , 'en-US'].map((locale) => ({
        locale
    }))
}

export default function Home() {
    redirect('./home')
}
