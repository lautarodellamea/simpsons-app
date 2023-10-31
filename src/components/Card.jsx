import PropTypes from "prop-types";

export const Card = ({ data: {docs}, character, characterVisible }) => {
  
  return (

    <div className="card">
      <img style={{filter: characterVisible ? "" : "brightness(0) invert(1)"}}
        src={docs[character].Imagen}
        alt={docs[character].Nombre}
      />
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    docs: PropTypes.arrayOf(
      PropTypes.shape({
        Imagen: PropTypes.string.isRequired,
        Nombre: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  character: PropTypes.number.isRequired,
  characterVisible: PropTypes.bool.isRequired,
};