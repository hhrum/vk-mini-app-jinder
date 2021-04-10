import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Banner, FormItem, Select, Input, FixedLayout  } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './Register.css';


const Register = ({ id, go, fetchedUser }) => {
	const [professions, setProfessions] = useState([]);

	return (
		<Panel id={id}>
			<PanelHeader>Регистрация</PanelHeader>
			{fetchedUser &&
			<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
				<SimpleCell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</SimpleCell>
			</Group>}
			<Banner
				header="Анкета"
				subheader="Мы возьмём ваши данные из анкеты Вконтакте. Если ваша анкета заполнена неполностью, то, пожалуйста, заполните её"
				asideMode="dismiss"
				actions={<Button>Заполнить</Button>}
				/>
			<FormItem top="Кто вы?">
				<Select 
				placeholder="Выберите профессию"
				options= {professions}
				/>
			</FormItem>
			
			<FormItem top="Сколько вы хотите получать?">
				<Input placeholder="10000$"/>
			</FormItem>
			<Button type="submit" mode="commerce">Далее</Button>
		</Panel>
	)
};

Register.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Register;
