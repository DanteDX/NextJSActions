import {useRouter} from "next/router";

export default function Veg(){
    const router = useRouter();
    console.log(router);
    return(
        <div>
            This is under veg
        </div>
    )
}