import { gql, request, GraphQLClient } from 'graphql-request'
import { deepStrictEqual } from 'assert';

(async () => {				
    console.log('START')
    const document = gql`
    {
    allFilms {
      films {
        title
      }
    }
  }
  `
  const resp: any =  await request('https://swapi-graphql.netlify.app/.netlify/functions/index', document);
  const data = await  resp.allFilms.films
  console.log(data)
  deepStrictEqual(data[data.length-1].title, 'Revenge of the Sith')
  console.log('FINISH')			
          
})();				
          