import React, {useState} from 'react';
import { Avatar, Banner, Button, Group, List, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui"

import pagesId from '../utils/pagesId';

const Connect = ({ go, goBack, setData, data }) => {
  return <Panel>
    <PanelHeader
      left={<PanelHeaderBack onClick={goBack} />}
    >Коннект</PanelHeader>
    <List>
      <Banner
        before={<Avatar size={56} src="https://sun9-49.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1" />}
        header="First company"
        subheader="Junior Flutter developer"
        actions={
          <>
            <Button>Отозваться</Button>
            <Button
              onClick={(e) => {
                // setData(Object.assign(data, { companyId: "FirstCompany" }));
                go(pagesId.infoCompany);
              }}
              mode="tertiary"
            >Посмотреть</Button>
          </>
        }
      />
    </List>
  </Panel>
}
export default Connect;