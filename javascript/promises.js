function getPokemon(){
    return new Promise(async (resolve, reject) => {
        let pokemon=await fetch("https://pokeapi.co/api/v2/pokemon/dittooo",{
            method:"get"
        });
        if(pokemon.status==200){
            resolve(pokemon.json())
            
        }else{
            reject("Cannot get the pokemon")
        }

        // fetch("https://pokeapi.co/api/v2/pokemon/ditto",{
        //     method:"get"
        // }).then((result) => {
        //     if(result.status==200){
        //             resolve(result.json())
                    
        //         }else{
        //             reject("Cannot get the pokemon")
        //         }

        // })
    })
}

addUser("Junaid").then((id,name) => {
    console.log(id, name)

}).catch((err) => {
    console.log(err)
})

getPokemon().then((id,name) => {
    console.log(id, name)
}).catch((errInfo) => {
    console.log(errInfo)
})