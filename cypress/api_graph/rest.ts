

(async () => {				
  console.log('START')
 const resp =  await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
 const jsonData = await resp.json();
 console.log(jsonData.abilities)
 console.log('FINISH')			
          
 assert(jsonData)
  })();				       