import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statsActions } from "../../../store/statistics";

const BonusSettings = ({ isOpen }) => {
  const dispatch = useDispatch();

  // Remove Math.round to allow decimal values
  const armyBonus = useSelector((state) => Math.max(0, state.stats.armyBonus || 0));
  const guardsmanBonus = useSelector((state) => Math.max(0, state.stats.guardsmanBonus || 0));
  const specialistsBonus = useSelector((state) => Math.max(0, state.stats.specialistsBonus || 0));
  const leadership = useSelector((state) => Math.max(0, state.stats.leadership || 0));

  const handleInput = (action) => (event) => {
    const value = Math.max(0, parseFloat(event.target.value)); // Allow decimal values
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
                  step="0.1" // Allow decimal input
                  min="0" // Set minimum value to 0
                />
              </th>

              <th>Bonus gwardzistów:</th>
              <th>
                <input
                  type="number"
                  value={guardsmanBonus}
                  onChange={handleInput(statsActions.setGuardsmanBonus)}
                  step="0.1" // Allow decimal input
                  min="0" // Set minimum value to 0
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
                  step="0.1" // Allow decimal input
                  min="0" // Set minimum value to 0
                />
              </th>
              <th>Dowodzenie:</th>
              <th>
                <input
                  type="number"
                  value={leadership}
                  onChange={handleInput(statsActions.setLeadership)}
                  step="0.1" // Allow decimal input
                  min="0" // Set minimum value to 0
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
