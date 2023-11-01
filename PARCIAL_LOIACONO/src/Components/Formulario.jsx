import { useState } from "react";
import Card from "./Card";

const Formulario = () => {
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();
    if (persona.nombre.length > 2 && persona.apellido.length > 5) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSumbit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>Nombre</label>
        <input
          type="text"
          value={persona.nombre}
          onChange={(event) =>
            setPersona({ ...persona, nombre: event.target.value.trim() })
          }
        />

        <label>Apellido</label>
        <input
          type="text"
          value={persona.apellido}
          onChange={(event) =>
            setPersona({ ...persona, apellido: event.target.value })
          }
        />

        <button>Enviar</button>
      </form>
      {show && <Card nombre={persona.nombre} apellido={persona.apellido} />}
      {error && (
        <h5 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h5>
      )}
    </div>
  );
};

export default Formulario;
