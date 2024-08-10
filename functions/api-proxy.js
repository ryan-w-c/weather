export default async (req, context) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    return new Response(response);
};