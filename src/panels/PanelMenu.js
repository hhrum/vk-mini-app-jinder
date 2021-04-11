import React from "react";
import { Icon28UserOutgoingOutline, Icon28UserAddedOutline, Icon28ChecksOutline } from '@vkontakte/icons'
import { Panel, PanelHeader, Group, Cell, Div, View, Root, ConfigProvider } from "@vkontakte/vkui";
import { useState } from 'react';
import bridge from "@vkontakte/vk-bridge";

import pagesId from '../utils/pagesId';
import ApplyMe from './ApplyMe';
import InfoCompany from '../Students/InfoCompany';
import MyRequests from './MyRequests';
import Connect from './Сonnect';

function PanelMenu({data, setData}) {
  const [activeView, setActiveView] = useState('main');
  const [history, setHistory] = useState(['main']);
  function go(name) {
    window.history.pushState({ panel: name }, name);
    setActiveView(name);
    history.push(name);
  };
  const goBack = () => {
    if (history.length === 1) {
      bridge.send("VKWebAppClose", { "status": "success" });
    } else if (history.length > 1) {
      history.pop();
      setActiveView(history[history.length - 1]);
    }
  }

  return <ConfigProvider isWebView={true}>
    <Root activeView={activeView}>
      <View id="main" activePanel="main">
        <Panel id="main">
          <PanelHeader>Ещё</PanelHeader>
          <Div>
            <Group>
              <Cell before={<Icon28UserOutgoingOutline />} onClick={() => go(pagesId.myRequests)}>Мои заявки</Cell>
              <Cell before={<Icon28UserAddedOutline />} onClick={() => go(pagesId.applyMe)}>Предложения</Cell>
              <Cell before={<Icon28ChecksOutline />} onClick={() => go(pagesId.connect)}>Взаимный коннект</Cell>
            </Group>
          </Div>
        </Panel>
      </View>
      <View id={pagesId.applyMe} activePanel={pagesId.applyMe}>
        <ApplyMe
          id={pagesId.applyMe}
          go={go}
          goBack={goBack}
          data={data}
          setData={setData}
        />
      </View>
      <View id={pagesId.myRequests} activePanel={pagesId.myRequests}>
        <MyRequests
          id={pagesId.myRequests}
          go={go}
          goBack={goBack}
          data={data}
          setData={setData}
        />
      </View>
      <View id={pagesId.connect} activePanel={pagesId.connect}>
        <Connect
          id={pagesId.connect}
          go={go}
          goBack={goBack}
          data={data}
          setData={setData}
        />
      </View>
      <View id={pagesId.infoCompany} activePanel={pagesId.infoCompany}>
        <InfoCompany
          id={pagesId.infoCompany}
          goBack={goBack}
          companyId={data.companyId}
        />
      </View>
    </Root>
  </ConfigProvider>;
}
export default PanelMenu;
