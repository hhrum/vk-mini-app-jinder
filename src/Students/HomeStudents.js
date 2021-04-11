import React, { useState } from 'react';
import { PanelHeaderBack, Placeholder, SplitCol, SplitLayout, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import * as icons from '@vkontakte/icons';
import { Epic } from '@vkontakte/vkui/dist/components/Epic/Epic';

import PanelVacancies from './Vacancies';
import PanelResume from './Resume';
import PanelMenu from '../panels/PanelMenu';
import pagesId from '../utils/pagesId';

const HomeStudents = ({ id, go, data, setData }) => {
	const [activeTab, setActiveTab] = useState(pagesId.vacancies);
	const onStoryChange = (e) => setActiveTab(e.currentTarget.dataset.story);


	return <Epic activeStory={activeTab} tabbar={<Tabbar>
		<TabbarItem
			onClick={onStoryChange}
			selected={activeTab === pagesId.vacancies}
			data-story={pagesId.vacancies}
			text="Вакансии"
		>
			<icons.Icon28SearchOutline />
		</TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={activeTab === pagesId.resume}
			data-story={pagesId.resume}
			text="Резюме"
		>
			<icons.Icon28ListOutline />
		</TabbarItem>
		<TabbarItem
			onClick={onStoryChange}
			selected={activeTab === pagesId.menu}
			data-story={pagesId.menu}
			text="Ещё"
		>
			<icons.Icon28MenuOutline />
		</TabbarItem>
	</Tabbar>
	}>
		<PanelVacancies
			id={pagesId.vacancies}
			data={data}
			setData={setData}
			go={go}
		/>
		<PanelResume id={pagesId.resume} />
		<PanelMenu
			id={pagesId.menu}
			go={go}
			setActiveTab={setActiveTab}
			data={data}
			setData={setData}
		/>
	</Epic>
};

export default HomeStudents;
