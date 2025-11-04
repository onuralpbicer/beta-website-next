import {redirect} from "next/navigation";
import {SupportedLocales} from "@beta/lib/contentful";

export default function Home() {
    redirect(`${SupportedLocales.Turkish}/home`)
}
