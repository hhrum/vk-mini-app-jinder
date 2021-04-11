import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import * as icons from '@vkontakte/icons';
import { Epic } from '@vkontakte/vkui/dist/components/Epic/Epic';

import PanelMenu from '../panels/PanelMenu';
import PanelResumes from './Resumes';

const HomeCompany = ({ id, go, fetchedUser, data, setData }) => {
	const [activeTab, setActiveTab] = useState('resumes');
	const onStoryChange = (e) => setActiveTab(e.currentTarget.dataset.story);


	return <Epic activeStory={activeTab} tabbar={<Tabbar>
		<TabbarItem
			onClick={onStoryChange}
			selected={activeTab === 'resumes'}
			data-story="resumes"
			text="Резюме"
		>
			<icons.Icon28SearchOutline />
		</TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={activeTab === 'menu'}
			data-story="menu"
			text="Ещё"
		>
			<icons.Icon28MenuOutline />
		</TabbarItem>
	</Tabbar>
	}>
		<PanelResumes
			id="resumes"
			data={data}
			setData={setData}
			go={go}
		/>
		<PanelMenu
			id="menu"
			go={go}
			setActiveTab={setActiveTab}
			data={data}
			setData={setData}
		/>
	</Epic>
};

export default HomeCompany;
