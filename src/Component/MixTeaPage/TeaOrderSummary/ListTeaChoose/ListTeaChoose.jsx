import React from "react";
import "./ListTeaChoose.css";

function ListTeaChoose({
  selectedMilk,
  getOptionText,
  selectedTea,
  selectedSweet,
  selectedTopping,
}) {
  return (
    <div className="ListTeaChoose">
      {(selectedMilk || selectedTea || selectedSweet || selectedTopping) && (
        <div className="SelectedOptionText">
          <div className="SelectTextMilk">
            {selectedMilk && (
              <h3 className="SelectTextMilk">
                x {getOptionText(selectedMilk)}
              </h3>
            )}
          </div>
          <div className="SelectTextTea">
            {selectedTea && <h3>x {getOptionText(selectedTea)}</h3>}
          </div>
          <div className="SelectTextSweet">
            {selectedSweet && (
              <h3 className="SelectTextSweet">
                x {getOptionText(selectedSweet)}
              </h3>
            )}
          </div>
          <div className="SelectTextTopping">
            {selectedTopping && (
              <h3 className="SelectTextTopping">
                x {getOptionText(selectedTopping)}
              </h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListTeaChoose;
