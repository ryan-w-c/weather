export default async (req, context) => {
  const url = new URL(req.url);
  const lat = url.searchParams.get('lat');
  const lng = url.searchParams.get('lng');
  const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;

  const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}&units=imperial`;

  const response = await fetch(weatherUrl);
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://cavanagh.dev',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};