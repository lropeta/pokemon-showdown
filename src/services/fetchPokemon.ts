//This file contains the fetch pokemon function
//It takes a pokemon name and returns the desired information of the pokemon using the pokeAPI

async function fetchPokemon(name: string){ //parameter syntax in c "String pokemon"
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`); //backtics for to allow for variables in strings, await similar to wait PID, fetch pulls from given url
    //error case pokeomn not found
    if(!response.ok){
        alert("Pokemon not found!");
        return
    }
    const data = await response.json(); //await pauses the function while downloading the data via .json() method

    //get the move data

    const moves = [];
    let moveCount = data.moves.length;
    let count = 0;
    while(count < 4 && moveCount != 0){
        const moveResponse = await fetch(`https://pokeapi.co/api/v2/move/${data.moves[count].move.name}/`);
        const moveData = await moveResponse.json();
        moves[count] = moveData;

        moveCount--;
        count++;
    }

    //copy the desired stats
    const stats = {
        name: data.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        front: data.sprites.front_default,
        back: data.sprites.back_default,
        moves: []
    }

    //Fill the moves
    count = 0;
    while(count < moves.length){
        stats.moves[count] = {
            name: moves[count].name,
            accuracy: moves[count].accuracy,
            pp: moves[count].pp,
            power: moves[count].power,
        }

        count++;
    }

    return stats;
}

export {
    fetchPokemon
}