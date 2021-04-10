import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import SignUp from './panels/SignUp';
import SentRequests from './panels/SentRequests';
import InfoCompany from './panels/InfoCompany';

import pagesId from './utils/pagesId';
import ApplyMe from './panels/ApplyMe';
import Connect from './panels/Сonnect';

const App = () => {
	const [activePanel, setActivePanel] = useState(pagesId.home);
	const [activeTab, setActiveTab] = useState('vacancies');
	const [data, setData] = useState({ currentCompany: "0" });
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(/*<ScreenSpinner size='large' />*/null);

	useEffect(() => {

		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			// fetch  
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = (to) => {
		setActivePanel(to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home
						id={pagesId.home}
						go={go}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						data={data}
						setData={setData}
					/>
					<SignUp
						id={pagesId.signUp}
						fetchedUser={fetchedUser}
						go={go}
					/>
					<SentRequests
						id={pagesId.sentRequests}
						go={go}
						data={data}
						setData={setData}
					/>
					<InfoCompany
						id={pagesId.infoCompany}
						go={go}
						companyId={data.companyId}
					/>
					<ApplyMe
						id={pagesId.applyMe}
						go={go}
						companyId={data.companyId}
						data={data}
						setData={setData}
					/>
					<Connect
						id={pagesId.connect}
						go={go}
						companyId={data.companyId}
						data={data}
						setData={setData}
					/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;

