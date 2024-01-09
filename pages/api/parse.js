export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Only POST requests are allowed');
    return;
  }

  // Assuming the URL is sent in the request body under the key 'url'
  const { url } = req.body;

  if (!url) {
    res.status(400).send('No URL provided');
    return;
  }

  const apikey = 'tgzJal8RPB9lyq9NYp9GgFaG0V9V6vWs'; // Replace with your actual API key
  const resumeParserUrl = `https://api.apilayer.com/resume_parser/url?url=${encodeURIComponent(url)}`;

  fetch(resumeParserUrl, {
    method: 'GET',
    headers: { 'apikey': apikey },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error parsing resume');
      }
      return response.json();
    })
    .then(data => res.json(data))
    .catch(error => {
      console.error(error);
      res.status(500).send('Error parsing resume');
    });
}
