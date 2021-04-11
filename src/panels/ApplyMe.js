import { Avatar, Banner, Button, Group, List, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui"

import pagesId from '../utils/pagesId';

const ApplyMe = ({ go, goBack, setData, data }) => {
  return <Panel>
    <PanelHeader
      left={<PanelHeaderBack onClick={goBack} />}
    >Предложения</PanelHeader>
    <List>
      <Banner
        before={<Avatar size={56} src="https://sun9-49.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1" />}
        header="First company"
        subheader="Junior Flutter developer"
        actions={
          <>
            <Button>Принять</Button>
            <Button
              onClick={(e) => {
                console.info(pagesId.infoCompany);
                setData(Object.assign(data, { companyId: "FirstCompany" }));
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
export default ApplyMe;