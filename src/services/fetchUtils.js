import { client, checkError } from './client';

export async function getPokeMonCards(from = 0, to = 20) {
  
  const response = await client
    .from('pokemon')
    .select()
    .range(from, to);

  return checkError(response);
  
  
}
export async function getSinglePokeMonCard(id) {
  const response = await client
    .from('pokemon')
    .select()
    .match({ id })
    .single();
  
  return checkError(response);
  
}
