import { useFetch } from "../hooks/useFetch";
export const SelectList = ({ manejadorcambio, title, url }) => {
  const key = `select-${title}`;
  const label = title;

  const { data, error, loading } = useFetch(url);
  if (!data) {
    return null;
  }

  if (error) {
    return <p>Ha ocurrido un error: {error}</p>;
  }

  let options = data;
  console.log(data);
  return (
    <>
      <div className="label-select">
        <label htmlFor={key}>{label}</label>

        <select name={key} id={key} onChange={manejadorcambio}>
          <option value="">Seleccione un {title}</option>
          {data &&
            options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
        </select>
      
      </div>
    </>
  );
};
