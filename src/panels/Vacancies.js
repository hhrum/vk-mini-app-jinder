import { Icon28SlidersOutline } from "@vkontakte/icons";
import { Panel, PanelHeader, Group, Card, ContentCard, Spacing, Div, Footer, SplitLayout, SplitCol, Button, Cell, HorizontalCell } from "@vkontakte/vkui";
// import { Icon } from "@vkontakte/icons";


function PanelVacancies() {
  const vacancies = [
    {
      name: 'First Company',
      search: 'Juniort Flutter-dev',
      desc: 'Description',
      time: 'Полная',
      salary: 10000
    }
  ];
  return <Panel sizeX={400}>
    <PanelHeader>Вакансии</PanelHeader>
    <Spacing size={16} />
    <Div>
      <ContentCard
        mode="shadow"
        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
        subtitle="Junior Flutter Developer"
        header="First Company"
        text="Descriptions"
        caption="Занятость полная · 10000₽"
        maxHeight={150}
      />
    </Div>
    <Spacing/>
    <Footer style={{position: "absolute", bottom: "50px"}}>
      <SplitLayout>
        <SplitCol width="50%">
          <Button mode="tertiary">Дальше</Button>
        </SplitCol>
        <SplitCol width="50%">
          <Button mode="commerce">Подходит</Button>
        </SplitCol>
      </SplitLayout>
    </Footer>
  </Panel>;
}
export default PanelVacancies;