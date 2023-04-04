import "./FormSelect.css";

export const FormSelect = (props) => {
  return (
    <div id={props.id} className="form-element-layout row">
      <div className="col-12">
        <div className="field-control-wrapper">
          <label className="form-label" htmlFor={props.htmlFor}>
            <span className="form-required"></span>
          </label>
          <select
            className="form-item-select form-control"
            id="country"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          >
            {props.children}
          </select>
        </div>
      </div>
    </div>
  );
};
