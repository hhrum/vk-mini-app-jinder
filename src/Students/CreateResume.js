import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { FormItem, Select, Input, Spacing, FormLayout  } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';


const CreateResume = ({ go, fetchedUser }) => {
	const [professions, setProfessions] = useState([]);
	
	useEffect(()=>{

	}, []);

	return (
		<Panel>
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
			
			<FormLayout>
				<FormItem top="Кто вы?">
					<Select 
						placeholder="Выберите профессию"
						options= {professions}
					/>
				</FormItem>
				
				<FormItem top="Сколько вы хотите получать?">
					<Input placeholder="10000$"/>
				</FormItem>
				
				<Spacing size={50} />
				<Div>
					<Button stretched type="submit" mode="commerce">Далее</Button>
				</Div>
			</FormLayout>
		</Panel>
	)
};

CreateResume.propTypes = {
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

export default CreateResume;
