import React from "react";
import { Icon28SlidersOutline } from "@vkontakte/icons";
import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
// import { Icon } from "@vkontakte/icons";


function PanelResume() {
  const [ professions, setProfessions] = useState([]);
  const [ subprofessions, setSubprofessions] = useState([]);
  return <Panel id="resume">
    <PanelHeader>Резюме</PanelHeader>
    <FormLayout>
			<FormItem top="Моя профессия">
        <Select options={professions}/>
			</FormItem>
      <FormItem top="Моя компетенция">
        <Select options={subprofessions}/>
      </FormItem>
      <FormItem top="Занятость">
        <NativeSelect>
          <option value="0">Полная</option>
          <option value="1">Неполная</option>
          <option value="2">Частичная</option>
        </NativeSelect>
      </FormItem>
      <FormItem top="Желаемая заработная плата">
        <Input placeholder="10000$"/>
      </FormItem>
      <FormItem top="Образование">
        <NativeSelect>
          <option value="0">Среднее специальное</option>
          <option value="1">Неоконченное высшее</option>
          <option value="2">Высшее</option>
        </NativeSelect>
      </FormItem>
      <FormItem top="Опыт работы">
        <NativeSelect>
          <option value="0">Меньше года</option>
          <option value="1">1 год</option>
          <option value="2">2 года</option>
          <option value="3">3 года</option>
          <option value="4">4 года</option>
          <option value="5">5 лет</option>
        </NativeSelect>
      </FormItem>

      <Spacing size={12} />
      <Div>
          <Button stretched mode="commerce">Сохранить</Button>
      </Div>
    </FormLayout>

  </Panel>;
}
export default PanelResume;