import React, { useState } from 'react';
import { PanelHeaderBack, Placeholder, SplitCol, SplitLayout, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import * as icons from '@vkontakte/icons';
import { Epic } from '@vkontakte/vkui/dist/components/Epic/Epic';

import PanelVacancies from './Vacancies';
import PanelResume from './Resume';
import PanelMenu from './Menu';

import pagesId from '../utils/pagesId';
import InfoCompany from './InfoCompany';

const Home = ({ id, go, fetchedUser, data, setData }) => {
	const [activeTab, setActiveTab] = useState('vacancies');
	const onStoryChange = (e) => setActiveTab(e.currentTarget.dataset.story);


	return <Epic activeStory={activeTab} tabbar={<Tabbar>
		<TabbarItem
			onClick={onStoryChange}
			selected={activeTab === 'vacancies'}
			data-story="vacancies"
			text="Вакансии"
		>
			<icons.Icon28SearchOutline />
		</TabbarItem>
		{
			true &&
			<TabbarItem
				onClick={onStoryChange}
				selected={activeTab === 'resume'}
				data-story="resume"
				text="Резюме"
			>
				<icons.Icon28ListOutline />
			</TabbarItem>
		}
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
		<PanelVacancies
			id="vacancies"
			data={data}
			setData={setData}
			go={go}
		/>
		<View id="resume" activePanel="resume">
			<PanelResume id="resume" />
		</View>
		<View id="company" activePanel="company">
			<PanelResume id="company" />
		</View>
		<PanelMenu
			id="menu"
			go={go}
			setActiveTab={setActiveTab}
			data={data}
			setData={setData}
		/>
		<View id={pagesId.infoCompany} activePanel={pagesId.infoCompany}>
			<InfoCompany
				id={pagesId.infoCompany}
				go={go}
				companyId={data.companyId}
			/>
		</View>
	</Epic>
};

export default Home;
