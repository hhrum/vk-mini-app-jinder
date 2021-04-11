import React from "react";
import { Icon28UserOutgoingOutline, Icon28UserAddedOutline, Icon28ChecksOutline } from '@vkontakte/icons'
import { Panel, PanelHeader, Group, Cell, Div } from "@vkontakte/vkui";

import pagesId from '../utils/pagesId';

function PanelMenu({ go }) {
  return <Panel>
    <PanelHeader>Ещё</PanelHeader>
    <Div>
      <Group>
        <Cell before={<Icon28UserOutgoingOutline />} onClick={() => go(pagesId.sentRequests)}>Мои заявки</Cell>
        <Cell before={<Icon28UserAddedOutline />} onClick={() => go(pagesId.applyMe)}>Меня готовы принять</Cell>
        <Cell before={<Icon28ChecksOutline />} onClick={() => go(pagesId.connect)}>Взаимный коннект</Cell>
      </Group>
    </Div>

  </Panel>;
}
export default PanelMenu;
