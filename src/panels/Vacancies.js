import React, { useState } from "react";
import { Icon28SlidersOutline } from "@vkontakte/icons";
import { Panel, PanelHeader, Group, Card, ContentCard, Spacing, Div, Footer, SplitLayout, SplitCol, Button, Cell, HorizontalCell } from "@vkontakte/vkui";
// import { Icon } from "@vkontakte/icons";


function PanelVacancies() {
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

  return <Panel sizeX={400}>
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
        <Group>
          <Div>
            <ContentCard
              mode="shadow"
              image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
              subtitle={vacancies[currentCompany].search}
              header={vacancies[currentCompany].name}
              text={vacancies[currentCompany].desc}
              caption={vacancies[currentCompany].time + " · " + vacancies[currentCompany].salary + "₽"}
              maxHeight={150}
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
        </Group>
    }


  </Panel>;
}
export default PanelVacancies;