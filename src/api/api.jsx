const headers = new Headers();
headers.append('Content-type', 'application/json');
headers.append(
  'Cache-Control',
  'public, max-age=31536000, immutable, no-store'
);

const options = {
  method: 'GET',
  headers: headers,
};

export const getData = async (url) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
