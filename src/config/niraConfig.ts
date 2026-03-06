// NIRA Configuration File

const niraConfig = {
    apiEndpoint: 'https://api.nira.go.ug/v1/',
    authentication: {
        apiKey: '<YOUR_API_KEY>',  // Add your API key here
        clientId: '<YOUR_CLIENT_ID>', // Add your Client ID here
        clientSecret: '<YOUR_CLIENT_SECRET>' // Add your Client Secret here
    },
    endpoints: {
        getCitizen: 'citizen',
        verifyCitizen: 'verify',
        register: 'register',
    }
};

export default niraConfig;