const express = require('express');
const axios = require('axios');
const app = express();

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjcm9wd2lzZUpXVCIsImF1ZCI6IjkxNzg3NTczNzY0OUlOIiwic3ViIjoiYzBlNGE2NzAtODMwZS00MzgwLTg0ZTktNDVmNDk1YWViNWFhIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImNvdW50cnlDb2RlIjoiSU4iLCJpYXQiOjE2Nzg3NzI1Mjl9.DMsJbMC5S0WKfP9Xl78TLmz5oUylSFsFnlndnXCTKk0QLDGbb-pOPNs7a1OZziHVlPp_W2-xtRi_Wuf3LhnyYg';

app.get('/fetchData', async (req, res) => {
  try {
    const response = await axios.get('https://qa-in.api.cropwise-smallgrowers.syndpe.com/api/v1/services', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from the external API' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App: React.FC = () => {
//   const [data, setData] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/fetchData'); // Assuming the server is running locally
//         setData(response.data);
//       } catch (error) {
//         setError('Error fetching data from the server');
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data Fetching Example</h1>
//       {error && <p>{error}</p>}
//       {data && (
//         <div>
//           <h2>Fetched Data</h2>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// const express = require('express');
// const axios = require('axios');
// const app = express();

// const token = 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjcm9wd2lzZUpXVCIsImF1ZCI6IjkxNzg3NTczNzY0OUlOIiwic3ViIjoiYzBlNGE2NzAtODMwZS00MzgwLTg0ZTktNDVmNDk1YWViNWFhIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImNvdW50cnlDb2RlIjoiSU4iLCJpYXQiOjE2Nzg3NzI1Mjl9.DMsJbMC5S0WKfP9Xl78TLmz5oUylSFsFnlndnXCTKk0QLDGbb-pOPNs7a1OZziHVlPp_W2-xtRi_Wuf3LhnyYg';

// app.get('/fetchData', async (req, res) => {
//   try {
//     const response = await axios.get('https://qa-in.api.cropwise-smallgrowers.syndpe.com/api/v1/services', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching data from the external API' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App: React.FC = () => {
//   const [data, setData] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/fetchData'); // Assuming the server is running locally
//         setData(response.data);
//       } catch (error) {
//         setError('Error fetching data from the server');
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data Fetching Example</h1>
//       {error && <p>{error}</p>}
//       {data && (
//         <div>
//           <h2>Fetched Data</h2>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;