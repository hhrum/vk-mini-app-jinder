import React, { useEffect, useState } from "react";
import { Icon28MoonOutline, Icon28SlidersOutline, Icon56CheckCircleOutline } from "@vkontakte/icons";
import { Panel, PanelHeader, Group, Card, ContentCard, Spacing, Div, Footer, SplitLayout, SplitCol, Button, Cell, HorizontalCell, Placeholder, ConfigProvider, Root, View } from "@vkontakte/vkui";

import pagesId from '../utils/pagesId';
import InfoCompany from "./InfoCompany";
import bridge from "@vkontakte/vk-bridge";
import getVacancies from "../data/getVacancies";

function PanelVacancies({ data, setData, go }) {
  const [activeView, setActiveView] = useState('main');
  const [history, setHistory] = useState(['main']);
  const [vacancies, setVacancies] = useState([]);

  const clickButtonYes = (_) => {
    console.log('Yes');
    setVacancies(vacancies.slice(1));
  }
  const clickButtonNo = (_) => {
    console.log('No');
    setVacancies(vacancies.slice(1));
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

  useEffect(()=>{
    getVacancies().then((value)=>{
      console.log(value)
      setVacancies(value);
    });
  }, []);

  return <ConfigProvider isWebView={true}>
    <Root activeView={activeView}>
      <View id="main" activePanel="main">
        <Panel id="main" sizeX={400}>
          <PanelHeader>Вакансии</PanelHeader>
          <Spacing size={16} />
          {
            vacancies.length == 0 ?
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
                    subtitle={vacancies[0].profession.name}
                    header={vacancies[0].company.name}
                    text={vacancies[0].description}
                    caption={vacancies[0].time + " · " + vacancies[0].salary + "₽"}
                    maxHeight={150}
                    onClick={(e) => {
                      setData(Object.assign(data, { companyId: vacancies[0].company.name }));
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
                      <Button size="l" stretched onClick={clickButtonNo} mode="tertiary">Дальше</Button>
                    </SplitCol>
                    <SplitCol spaced width="100%">
                      <Button size="l"  stretched onClick={clickButtonYes} mode="commerce">Подходит</Button>
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