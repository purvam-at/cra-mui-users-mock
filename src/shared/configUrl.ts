interface IConfig {
	// mock development
	// mockApiServer: string;
	// dev api
	apiServer: string;
}

const config: IConfig = {
	// mock json-server
	// mockApiServer: 'https://454c1aaf-279c-4a23-a611-0b4c4026f1cc.mock.pstmn.io',
	// apiServer: 'http://localhost:3000/',
	// development
	apiServer: 'http://localhost:3000/api/master',
};

if (process.env.REACT_APP_STAGE === 'production') {
	config.apiServer = '/api/master';
}

if (process.env.REACT_APP_STAGE === 'staging') {
	config.apiServer = '/api/master';
	//config.apiServer = 'http://13.127.238.198:9000/api';
}

export default config;
