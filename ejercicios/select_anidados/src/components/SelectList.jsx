export const SelectList = ({ title }) => {
   
    const key = `select-${title}`;
    const label = title;
    const options = [];
  
    return (
      <>
      <div className="label-select">
        <label  htmlFor={key}>{label}</label>
            <select name={key} id={key}>
            <option value="">Seleccione un {title}</option>
            </select>
      </div>
        
      </>
    );
  };