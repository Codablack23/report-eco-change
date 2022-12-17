import HomeLayout from "~/components/layout/Home";
import { RedAlert } from "~/components/widgets/Home/RedAlerts";
import { alertData } from "~/utils/data";

export default function RedAlerts(){
    const data = alertData
    return (
        <HomeLayout>
         <div className="collabo-container mx-auto my-10">
         <ul className="md:grid grid-cols-2 gap-5">
            {data.map(d=>(
                <RedAlert key={d.id} alert={d}/>
            ))}
          </ul>
         </div>
        </HomeLayout>
    )
}