import { useState } from "react"

export default function BattleInterface(){
    const [menu, setMenu] = useState({})
    //Visual
    //[  ][  ]
    //[  ][  ]



    return(
        <>
            <div className="w-full h-48 bg-gray-950 grid grid-cols-2 gap-2">
                <div className="h-full rounded border-2">Fight</div>
                <div className="h-full rounded border-2" ></div>
                <div className="h-full rounded border-2"></div>
                <div className="h-full rounded border-2"></div> 
            </div>
        </>
    )
}