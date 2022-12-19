import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {logDOM} from "@testing-library/react";

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', ([0, 100])))

    const change = (event: Event, value: number | number[]) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        if (event && !Array.isArray(value)) {
            setValue1(value)
            setValue2([value, value2[1]])
        }
    }
    const changeSec = (event: Event, value: number | number[]) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        if (event && Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value)
        }
    }


    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            max={100}
                            min={0}
                            value={value1}
                            id={'hw11-single-slider'}
                            onChange={change}
                            // сделать так чтоб value1 изменялось // пишет студент

                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value2[0]}</span>
                        <SuperRange
                            value={value2}
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            onChange={changeSec}

                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
