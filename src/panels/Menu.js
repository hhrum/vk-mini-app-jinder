import React from "react";
import { Icon28SlidersOutline } from "@vkontakte/icons";
import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
// import { Icon } from "@vkontakte/icons";


function PanelMenu({go}) {
  return <Panel>
    <PanelHeader>Ещё</PanelHeader>
    <Group>
        <Cell before={<Icon28UserOutgoingOutline/>} onClick={go} data-to="sentRequests">Мои заявки</Cell>
        <Cell before={<Icon28UserAddedOutline/>}>Меня готовы принять</Cell>
        <Cell before={<Icon28ChecksOutline/>}>Взаимный коннект</Cell>
    </Group>

  </Panel>;
}
export default PanelMenu;
