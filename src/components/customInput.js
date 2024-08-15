import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statsActions } from '../store/statistics';

const CustomInput = ({ amount, name }) => {
    const guardsmanBonus = useSelector((state) => Math.max(0, state.stats.guardsmanBonus || 0));
    const dispatch = useDispatch();

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>{guardsmanBonus}</td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => dispatch(statsActions.largeDecreaseGuardsmanBonus())}>-10</button>
                            <button onClick={() => dispatch(statsActions.mediumDecreaseGuardsmanBonus())}>-1</button>
                            <button onClick={() => dispatch(statsActions.smallDecreaseGuardsmanBonus())}>-0.1</button>
                            <button onClick={() => dispatch(statsActions.smallIncreaseGuardsmanBonus())}>+0.1</button>
                            <button onClick={() => dispatch(statsActions.mediumIncreaseGuardsmanBonus())}>+1</button>
                            <button onClick={() => dispatch(statsActions.largeIncreaseGuardsmanBonus())}>+10</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomInput;
