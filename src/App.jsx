import React,{memo} from "react";
import HellowWord from "./components/hellow";

const app = memo(()=>{
    return (
        <div>app
            <HellowWord/>
        </div>
    )
})

export default app
