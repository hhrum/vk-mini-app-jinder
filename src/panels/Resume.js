import React from "react";
import { Icon28SlidersOutline } from "@vkontakte/icons";
import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
// import { Icon } from "@vkontakte/icons";


function PanelResume() {
  const [ professions, setProfessions] = useState([]);
  return <Panel id="resume">
    <PanelHeader>Резюме</PanelHeader>
    <FormLayout>
      <FormItem top="Я">
          <Select 
              placeholder="Выберите профессию"
              options= {professions}
          />
      </FormItem>
      <FormItem top="Сколько я хочу получать?">
        <Input placeholder="10000$"/>
      </FormItem>
      <FormItem top="Занятость">
          <NativeSelect>
              <option value="0">Постоянная</option>
              <option value="1">Частичная</option>
              <option value="2">Неполная</option>
          </NativeSelect> 
      </FormItem>
      <FormItem top="Обо мне">
          <Textarea placeholder="Обо мне"/>
      </FormItem>
      <Spacing separator="bottom" size={12} />
      <FormItem top="Навыки">
        <ChipsInput placeholder="Навыки">
        </ChipsInput>
      </FormItem>
      <Spacing size={12} />
      <Div>
          <Button stretched mode="commerce">Сохранить</Button>
      </Div>
    </FormLayout>

  </Panel>;
}
export default PanelResume;