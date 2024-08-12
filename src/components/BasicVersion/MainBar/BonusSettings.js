import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statsActions } from "../../../store/statistics";

const BonusSettings = ({ isOpen }) => {
  const dispatch = useDispatch();

  const armyBonus = useSelector((state) => Math.round(state.stats.armyBonus) || 0);
  const guardsmanBonus = useSelector((state) => Math.round(state.stats.guardsmanBonus) || 0);
  const specialistsBonus = useSelector((state) => Math.round(state.stats.specialistsBonus) || 0);
  const leadership = useSelector((state) => Math.round(state.stats.leadership) || 0);

  const handleInput = (action) => (event) => {
    const value = parseInt(event.target.value, 10);
    dispatch(action(isNaN(value) ? 0 : value));
  };

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div className="inputDesktop">
        <table>
          <tbody>
            <tr>
              <th>Bonus do całej armii:</th>
              <th>
                <input
                  type="number"
                  value={armyBonus}
                  onChange={handleInput(statsActions.setArmyBonus)}
                  step="1"
                />
              </th>

              <th>Bonus gwardzistów:</th>
              <th>
                <input
                  type="number"
                  value={guardsmanBonus}
                  onChange={handleInput(statsActions.setGuardsmanBonus)}
                  step="1"
                />
              </th>
            </tr>
            <tr>
              <th>Zakres specjalistów:</th>
              <th>
                <input
                  type="number"
                  value={specialistsBonus}
                  onChange={handleInput(statsActions.setSpecialistsBonus)}
                  step="1"
                />
              </th>
              <th>Dowodzenie:</th>
              <th>
                <input
                  type="number"
                  value={leadership}
                  onChange={handleInput(statsActions.setLeadership)}
                  step="1"
                />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BonusSettings;
