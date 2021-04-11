import React, {useState} from 'react';
import { Avatar, Banner, Button, Group, List, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui"

import pagesId from '../utils/pagesId';

const MyRequests = ({ go, goBack, setData, data }) => {
  return <Panel>
    <PanelHeader
      left={<PanelHeaderBack onClick={goBack} />}
    >Мои заявки</PanelHeader>
    <List>
      <Banner
        before={<Avatar size={56} src="https://sun9-49.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1" />}
        header="First company"
        subheader="Junior Flutter developer"
        actions={
          <>
            <Button
              onClick={() => {
                setData(Object.assign(data, { companyId: "FirstCompany" }));
                go(pagesId.infoCompany);
              }}
            >Посмотреть</Button>
            <Button
              onClick={() => console.log('s')}
              mode="tertiary"
            >Отозвать</Button>
          </>
        }
      />
    </List>
  </Panel>
}
export default MyRequests;