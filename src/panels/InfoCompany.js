import { Cell, Group, Header, InfoRow, List, MiniInfoCell, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui"

import pagesId from '../utils/pagesId';

const InfoCompany = ({ companyId, goBack }) => {
  return <Panel>
    <PanelHeader
      left={<PanelHeaderBack onClick={goBack} />}
    >{companyId}</PanelHeader>
    <img src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" />
    <Group header={<Header>О компании</Header>}>
      <SimpleCell>
        <MiniInfoCell
          textWrap="full"
          textLevel="primary"
        >
          ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.
        </MiniInfoCell>
      </SimpleCell>
      <SimpleCell>
        <InfoRow header="Сайт">
          <a href="http://site.com" target="blank">Site.com</a>
        </InfoRow>
      </SimpleCell>
      <SimpleCell>
        <InfoRow header="Email">
          email@company.com
        </InfoRow>
      </SimpleCell>
    </Group>
  </Panel>
}
export default InfoCompany;