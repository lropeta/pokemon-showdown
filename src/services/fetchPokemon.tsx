async function fetchPokemon(name: string){ //parameter syntax in c "String pokemon"
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`); //backtics for to allow for variables in strings, await similar to wait PID, fetch pulls from given url
    const data = await response.json(); //await pauses the function while downloading the data via .json() method
    
    //get the move data
    const moveResponse0 = await fetch(`https://pokeapi.co/api/v2/move/${data.moves[0].move.name}/`);
    const moveData0 = await moveResponse0.json();

    const moveResponse1 = await fetch(`https://pokeapi.co/api/v2/move/${data.moves[1].move.name}/`);
    const moveData1 = await moveResponse1.json();

    const moveResponse2 = await fetch(`https://pokeapi.co/api/v2/move/${data.moves[2].move.name}/`);
    const moveData2 = await moveResponse2.json();

    const moveResponse3 = await fetch(`https://pokeapi.co/api/v2/move/${data.moves[3].move.name}/`);
    const moveData3 = await moveResponse3.json();

    //copy the desired stats
    const stats = {
        name: data.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        front: data.sprites.front_default,
        back: data.sprites.back_default,
        moves: [
            {
                name: moveData0.name,
                accuracy : moveData0.accuracy,
                pp : moveData0.pp,
                power : moveData0.power
            },
            {
                
                name: moveData1.name,
                accuracy : moveData1.accuracy,
                pp : moveData1.pp,
                power : moveData1.power
            },
            {
                
                name: moveData2.name,
                accuracy : moveData2.accuracy,
                pp : moveData2.pp,
                power : moveData2.power
            },
            {
                
                name: moveData3.name,
                accuracy : moveData3.accuracy,
                pp : moveData3.pp,
                power : moveData3.power
            }
        ]
    }

    console.log(stats);
    return stats;
}

export {
    fetchPokemon
}