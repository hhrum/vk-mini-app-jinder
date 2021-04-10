import { Avatar, Banner, Button, List, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui"

const SentRequests = ({ go }) => {
  return <Panel>
    <PanelHeader
      left={<PanelHeaderBack onClick={go} data-to='home' />}
    >Мои заявки</PanelHeader>
    <List>
      <Banner
          before={<Avatar size={56} src="https://sun9-49.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1" />}
          header="First company"
          subheader="Junior Flutter developer"
          asideMode="expand"
          actions={<Button mode="tertiary">Отозвать</Button>}
        />
    </List>
  </Panel>
}
export default SentRequests;