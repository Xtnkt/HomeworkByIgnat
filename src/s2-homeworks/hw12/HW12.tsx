import React, {useEffect, useReducer} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType, changeThemeIdAC, InitStateType, store, themeReducer} from './bll/themeReducer'
import {getValue} from "@testing-library/user-event/dist/utils";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useSelector<AppRootStateType, InitStateType>((store) => store.theme)

    const dispatch = useDispatch()

    const change = (id: number) =>
        dispatch(changeThemeIdAC(id))


    useEffect(() => {

        document.documentElement.dataset.theme = themeId.themeId + ''
    }, [themeId.themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    onChange={(event) => change(parseInt(event.currentTarget.value))}
                    // сделать переключение тем

                />
            </div>
        </div>
    )
}

export default HW12
