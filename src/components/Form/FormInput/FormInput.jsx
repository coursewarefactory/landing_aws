import "./FormInput.css";

export const FormInput = (props) => {
  return (
    <div className="form-element-layout row">
      <div className="col-12 ">
        <div className="field-control-wrapper">
          <label className="form-label" htmlFor={props.htmlFor}>
            <span className="form-required"></span>
          </label>
          <input
            type={props.type}
            className="form-item-input form-control "
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
};
