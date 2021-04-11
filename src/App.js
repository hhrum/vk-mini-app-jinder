import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import HomeStudents from './Students/HomeStudents';
import HomeCompany from './Company/HomeCompany';
import CreateResume from './Students/CreateResume';

import pagesId from './utils/pagesId';

const UserContext = React.createContext();

const App = () => {
	const [activePanel, setActivePanel] = useState();
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
			const res = await axios.get('/auth');
			const vkuser = await bridge.send('VKWebAppGetUserInfo');
			const user = {
				...res.data.user,
				...vkuser
			}

			if (res.data.user.resume) {
				setActivePanel(pagesId.homeStudents);
			} else {
				setActivePanel(pagesId.homeStudents);
			}

			console.log(user);

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
				{fetchedUser &&
					<UserContext.Provider value={fetchedUser}>
						<View activePanel={activePanel} popout={popout}>
							<HomeStudents
								id={pagesId.homeStudents}
								go={go}
								data={data}
								setData={setData}
							/>
							<HomeCompany
								id={pagesId.homeCompany}
								go={go}
								data={data}
								setData={setData}
							/>
							<CreateResume
								id={pagesId.createResume}
								fetchedUser={fetchedUser}
								go={go}
							/>
						</View>
					</UserContext.Provider>
				}
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;

