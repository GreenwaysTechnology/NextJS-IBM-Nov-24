import { MyClient } from "./components/myclient";
import MyServer from "./components/myserver";

export default function ClientComponentPage(){
    return <div>
            <MyClient>
                {/* Pass server as prop */}
                <MyServer/>
            </MyClient>
    </div>
}