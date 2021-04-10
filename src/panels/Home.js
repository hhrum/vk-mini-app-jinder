import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import { Cell } from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { PanelHeaderBack, Placeholder, SplitCol, SplitLayout, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import * as icons from '@vkontakte/icons';
import { Epic } from '@vkontakte/vkui/dist/components/Epic/Epic';

import PanelVacancies from './Vacancies';
import PanelResume from './Resume';
import PanelMenu from './Menu';

const Home = ({ id, go, fetchedUser }) => {
	const [activeStory, setActiveStory] = React.useState('vacancies');
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);


	return <Epic activeStory={activeStory} tabbar={<Tabbar>
		<TabbarItem
			onClick={onStoryChange}
			selected={activeStory === 'vacancies'}
			data-story="vacancies"
			text="Вакансии"
		>
			<icons.Icon28SearchOutline />
		</TabbarItem>
		{
			true ?
				<TabbarItem
					onClick={onStoryChange}
					selected={activeStory === 'resume'}
					data-story="resume"
					text="Резюме"
				>
					<icons.Icon28ListOutline />
				</TabbarItem>
				:
				<TabbarItem
					onClick={onStoryChange}
					selected={activeStory === 'company'}
					data-story="company"
					text="Компания"
				>
					<icons.Icon28ListOutline />
				</TabbarItem>
		}
		<TabbarItem
			onClick={onStoryChange}
			selected={activeStory === 'menu'}
			data-story="menu"
			text="Ещё"
		>
			<icons.Icon28MenuOutline />
		</TabbarItem>
	</Tabbar>
	}>
		<View id="vacancies" activePanel="vacancies">
			<PanelVacancies id="vacancies" />
		</View>
		<View id="resume" activePanel="resume">
			<PanelResume id="resume" />
		</View>
		<View id="resume" activePanel="resume">
			<PanelResume id="company" />
		</View>
		<View id="menu" activePanel="menu">
			<PanelMenu id="menu" />
		</View>
	</Epic>
};

export default Home;
