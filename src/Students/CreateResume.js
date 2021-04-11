import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {FormItem, Select, Input, Spacing, FormLayout} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";

const institutionTypes = [
    {
        value: "suz",
        label: "СУЗ"
    },
    {
        value: "vuz",
        label: "ВУЗ"
    }
]

const CreateResume = ({createResume, setPopout}) => {
    // во время написания этого компонента мозг перестал адекватно(надеюсь, что написал без ошибок) работать
    const [professions, setProfessions] = useState([]);
    const [profession, setProfession] = useState(null);

    const [salary, setSalary] = useState(null);

    const [institutions, setInstitutions] = useState([]);
    const [institutionType, setInstitutionType] = useState(null);
    const [institution, setInstitution] = useState(null);

    const [facultyTypes, setFacultyTypes] = useState([]);
    const [facultyType, setFacultyType] = useState(null);
    const [faculty, setFaculty] = useState(null);


    useEffect(() => {
        async function fetchData() {
            setPopout(<ScreenSpinner size="large"/>);
            let res = await axios.get("/professions");
            setProfessions(res.data.map(el => ({value: el._id, label: el.name})));

            res = await axios.get("/educations");
            setInstitutions(res.data.institutions);
            console.log(res.data.institutions)
            setFacultyTypes(res.data.faculty_types.map(el => ({value: el._id, label: el.name})));

            setPopout(null);
        }

        fetchData();
    }, []);

    const filteredInstitutions = () => {
        let insts
        if (institutionType === "suz") {
            insts = institutions.filter(el => !el.isHigh)
        } else {
            insts = institutions.filter(el => el.isHigh)
        }
        return insts.map(el => ({value: el._id, label: el.name}))
    }

    const filteredFacultyTypes = () => {
        const inst = institutions.find(el => el._id === institution);
        return facultyTypes.filter(el => {
            console.log(el, inst.faculties);
            return !!inst.faculties.find(fac => fac.faculty_type === el.value);
        })
    }

    const filteredFaculties = () => {
        const inst = institutions.find(el => el._id === institution)
        let faculties;
        if (institutionType === "suz") {
            faculties = inst.faculties;
        } else {
            faculties = inst.faculties.filter(el => el.faculty_type === facultyType)
        }

        return faculties.map(el => ({value: el._id, label: el.name}))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!profession || !salary || !faculty) {
            return;
        }

        createResume(profession, salary, faculty);
    }

    return (
        <Panel>
            <PanelHeader>Создание резюме</PanelHeader>
            <FormLayout onSubmit={onSubmit}>
                <FormItem top="Кто вы?">
                    <Select
                        placeholder="Выберите профессию"
                        options={professions}
                        onChange={e => setProfession(e.target.value)}
                    />
                </FormItem>

                <FormItem top="Сколько вы хотите получать?">
                    <Input
                        placeholder="10000$"
                        onChange={e => setSalary(e.target.value)}
                    />
                </FormItem>

                <FormItem top="Тип учебного заведения">
                    <Select
                        placeholder="Выберите тип"
                        options={institutionTypes}
                        onChange={e => setInstitutionType(e.target.value)}
                    />
                </FormItem>

                {institutionType &&
                <FormItem top="Учебное заведение">
                    <Select
                        placeholder="Выберите учебное заведение"
                        options={filteredInstitutions()}
                        onChange={e => setInstitution(e.target.value)}
                    />
                </FormItem>
                }

                {institutionType && institution && institutionType === "vuz" &&
                <FormItem top="Тип образования">
                    <Select
                        placeholder="Выберите учебное заведение"
                        options={filteredFacultyTypes()}
                        onChange={e => setFacultyType(e.target.value)}
                    />
                </FormItem>
                }

                {institutionType && institution && filteredFaculties().length > 0 &&
                <FormItem top="Направление">
                    <Select
                        placeholder="Выберите направление"
                        options={filteredFaculties()}
                        onChange={e => setFaculty(e.target.value)}
                    />
                </FormItem>
                }
                <Div>
                    <Button stretched type="submit" mode="commerce" size="l">Создать</Button>
                </Div>
            </FormLayout>
        </Panel>
    )
};

CreateResume.propTypes = {
    id: PropTypes.string.isRequired,
    createResume: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default CreateResume;
