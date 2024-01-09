// Replace with the actual API endpoint and your API key
const apiUrl = 'https://example.com/api/world-crime-rate';
const apiKey = 'YOUR_API_KEY';

fetch(apiUrl, {
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
})
.then(response => response.json())
.then(data => {
    // Display the crime data in the HTML elements
    const crimeDataElement = document.getElementById('crime-data');
    crimeDataElement.innerHTML = `
        <h2>Crime Rate by Country</h2>
        <table>
            <thead>
                <tr>j
                    <th>Country</th>
                    <th>Crime Rate</th>
                </tr>
            </thead>
            <tbody>
                </tbody>
        </table>
    `;
})
.catch(error => {
    console.error('Error fetching data:', error);
    // Handle errors gracefully, e.g., display an error message to the user
});
 