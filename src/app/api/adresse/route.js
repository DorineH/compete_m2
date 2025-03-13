// app/api/adresse/route.ts
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  const limit = searchParams.get('limit') || '10';

  console.log('Search Parameters:', searchParams);
  console.log('Limit:', limit);
  console.log('Query:', query);

  const apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=${limit}`;
  const response = await fetch(apiUrl);

  console.log('API URL:', apiUrl);

  if (!response.ok) {
    console.error('Error fetching data:', response.statusText);
    return NextResponse.json({ error: 'Erreur lors de la récupération des données.' }, { status: 500 });
  }

  const data = await response.json();
  console.log('Data:', data);

  // Assuming data.features is an array of results
  if (data.features && data.features.length > 0) {
    console.log('First result label:', data.features[0].properties.label);
  } else {
    console.log('No results found');
  }

  return NextResponse.json(data);
}
