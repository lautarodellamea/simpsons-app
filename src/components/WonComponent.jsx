import PropTypes from "prop-types"

export const WonComponent = ({ data, character, hasWon }) => {
  return (
    <div>
      {hasWon && (
        <div className="data-character">
          <p className="won">Correcto!</p>
          <p className="data-p"><span>Nombre:</span> {data.docs[character].Nombre}</p>
          <p className="data-p"><span>Historia:</span> {data.docs[character].Historia}</p>
          <p className="data-p"><span>Genero:</span> {data.docs[character].Genero}</p>
          <p className="data-p"><span>Estado:</span> {data.docs[character].Estado}</p>
          <p className="data-p"><span>Ocupación:</span> {data.docs[character].Ocupacion}</p>
        </div>
      )}

      {hasWon === false && (
        <div className="data-character">
          <p className="lost">Incorrecto!</p>
          <p className="data-p"><span>Nombre:</span> {data.docs[character].Nombre}</p>
          <p className="data-p"><span>Historia:</span> {data.docs[character].Historia}</p>
          <p className="data-p"><span>Genero</span>: {data.docs[character].Genero}</p>
          <p className="data-p"><span>Estado:</span> {data.docs[character].Estado}</p>
          <p className="data-p"><span>Ocupación:</span> {data.docs[character].Ocupacion}</p>
        </div>
      )}

    </div>
  );
};

WonComponent.propTypes = {
  data: PropTypes.shape({
    docs: PropTypes.arrayOf(
      PropTypes.shape({
        Nombre: PropTypes.string.isRequired,
        Historia: PropTypes.string.isRequired,
        Genero: PropTypes.string.isRequired,
        Estado: PropTypes.string.isRequired,
        Ocupacion: PropTypes.string.isRequired,
        // Otras propiedades de docs que puedas tener
      })
    ).isRequired,
  }).isRequired,
  character: PropTypes.number.isRequired,
  hasWon: PropTypes.bool.isRequired,
};