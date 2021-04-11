import React, { useState } from "react";
import { Icon28MoonOutline, Icon28SlidersOutline, Icon56CheckCircleOutline } from "@vkontakte/icons";
import { Panel, PanelHeader, Group, Card, ContentCard, Spacing, Div, Footer, SplitLayout, SplitCol, Button, Cell, HorizontalCell, Placeholder, ConfigProvider, Root, View } from "@vkontakte/vkui";

import pagesId from '../utils/pagesId';
import InfoCompany from "./InfoCompany";
import bridge from "@vkontakte/vk-bridge";

function PanelVacancies({ data, setData, go }) {
  const [activeView, setActiveView] = useState('main');
  const [history, setHistory] = useState(['main']);
  const [currentCompany, setCurrentCompany] = useState(0);
  const vacancies = [
    {
      name: 'First Company',
      search: 'Juniort Flutter-dev',
      desc: 'Description',
      time: 'Занятость полная',
      salary: 10000
    },
    {
      name: 'Second Company',
      search: 'Senior Flutter-dev',
      desc: 'Description',
      time: 'Занятость полная',
      salary: 10000
    },
  ];

  const clickButtonYes = (_) => {
    console.log('Yes');
    setCurrentCompany(currentCompany + 1);
  }
  const clickButtonNo = (_) => {
    console.log('No');
    setCurrentCompany(currentCompany + 1);
  }

  function go(name) {
    window.history.pushState({ panel: name }, name);
    setActiveView(name);
    history.push(name);
    console.log(history);
  };
  const goBack = () => {
    console.log(history);
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
        <Panel id="main" sizeX={400}>
          <PanelHeader>Вакансии</PanelHeader>
          <Spacing size={16} />
          {
            currentCompany > vacancies.length - 1 ?
              <Placeholder
                icon={<Icon56CheckCircleOutline />}
              >
                Больше нет вакансий
              </Placeholder>
              :
              <>
                <Div>
                  <ContentCard
                    mode="shadow"
                    image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    subtitle={vacancies[currentCompany].search}
                    header={vacancies[currentCompany].name}
                    text={vacancies[currentCompany].desc}
                    caption={vacancies[currentCompany].time + " · " + vacancies[currentCompany].salary + "₽"}
                    maxHeight={150}
                    onClick={(e) => {
                      setData(Object.assign(data, { companyId: "SecondCompany" }));
                      go(pagesId.infoCompany);
                    }}
                  />
                </Div>
                <Spacing />
                <Footer style={{ position: "absolute", bottom: "50px", width: "100%" }}>
                  <SplitLayout
                    style={{ justifyContent: "center" }}
                  >
                    <SplitCol spaced width="100%">
                      <Button onClick={clickButtonNo} mode="tertiary">Дальше</Button>
                    </SplitCol>
                    <SplitCol spaced width="100%">
                      <Button onClick={clickButtonYes} mode="commerce">Подходит</Button>
                    </SplitCol>
                  </SplitLayout>
                </Footer>
              </>
          }
        </Panel>
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
export default PanelVacancies;