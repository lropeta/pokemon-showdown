

export default function HUD({pokemonObj, currHealth}){
    //Step 1: set the name and current health

    //display name
    const name = pokemonObj.name;
    //max hp (outer bar)
    const maxHP = pokemonObj.hp;
    //curr hp (inner bar)
    let innerBarLength = (currHealth / maxHP) * 100;

    //bar color
    let innerBarColor = "bg-green-500"
    if(innerBarLength  < 30){
        innerBarColor = "bg-red-500"
    } else if(innerBarLength < 70){
        innerBarColor = "bg-yellow-500"
    }

    let innerBar = <div className={`${innerBarColor} h-full rounded transition-all duration-300`} style={{ width: `${innerBarLength}%` }}></div>

    return(
        <>
            <div className="bg-gray-800 rounded-lg flex flex-col gap-2 p-4 w-72">
                <p className="font-bold capitalize">{name}</p>
                <div className="w-full h-4 bg-gray-600 rounded">
                    {innerBar}
                </div>
                <p className="text-sm text-gray-400">{currHealth} / {maxHP} HP</p>
            </div>
        </>
    )
}