
export default function HUD(pokemonObj, currHealth){

    const name = pokemonObj.name;
    const health = currHealth;

    return(
        <>
            <div className="border">
                <p>{name}</p>
                <div className="border">
                    <div className = "bg-green500"></div>
                </div>
            </div>
        </>
    )
}