import React from "react";
import { Cell, Group, Header, InfoRow, List, MiniInfoCell, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui"

const InfoCompany = ({ companyId, goBack }) => {
  const company = {
    id: 0,
    title: 'First company',
  }
  return <Panel>
    <PanelHeader
      left={<PanelHeaderBack onClick={goBack} />}
    >
      {company.title}
    </PanelHeader>
    {/* <img src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" /> */}
    <Group>
      <SimpleCell>
        <InfoRow header="Название">
          {company.title}
        </InfoRow>
      </SimpleCell>
    </Group>
  </Panel>
}
export default InfoCompany;