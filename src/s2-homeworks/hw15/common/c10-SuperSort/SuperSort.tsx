import React from 'react'
import s from './SuperSort.module.css'
import downIc from './1.png'
import upIc from './2.png'
import defIc from './3.png'
// добавить в проект иконки и импортировать
const downIcon = downIc
const upIcon = upIc
const noneIcon = defIc

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // if (sort === down ) {
    //     return up
    // }
    // if (sort === up) {
    //     return ''
    // }
    // return down
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    else return down
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                id={id + '-icon-' + sort}
                className={s.img}
                src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
