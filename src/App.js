import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Register from './panels/Register';
import SentRequests from './panels/SentRequests';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [activeTab, setActiveTab] = useState('vacancies');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(/*<ScreenSpinner size='large' />*/null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const res = await axios.get('/auth');
			const vkuser = await bridge.send('VKWebAppGetUserInfo');
			const user = {
				...res.data.user,
				...vkuser
			}

			if (!res.data.user.resume) {
				setActivePanel('register')
			} else {
				setActivePanel('home')
			}

			console.log(user);

			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				{fetchedUser &&
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' go={go} activeTab={activeTab} setActiveTab={setActiveTab} />
					<Register id='register' fetchedUser={fetchedUser} go={go} />
					<SentRequests id='sentRequests' go={go} />
				</View>
				}
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;

