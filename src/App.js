import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import SignUp from './panels/SignUp';
import InfoCompany from './panels/InfoCompany';

import pagesId from './utils/pagesId';
import ApplyMe from './panels/ApplyMe';
import Connect from './panels/Сonnect';

const App = () => {
	const [activePanel, setActivePanel] = useState(pagesId.home);
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
						data={data}
						setData={setData}
					/>
					<SignUp
						id={pagesId.signUp}
						fetchedUser={fetchedUser}
						go={go}
					/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;

