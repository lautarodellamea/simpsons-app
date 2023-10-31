import PropTypes from "prop-types"

export const Option = ({ selectOption, el, pick }) => {
  return (
    <>
      {!pick && (
        <button
          className="button"
          type="submit"
          onClick={selectOption}
          key={el._id}
          id={el.Nombre}
        >
          {el.Nombre}
        </button>
      )}
    </>
  );
};

Option.propTypes = {
  selectOption: PropTypes.func.isRequired,
  el: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Nombre: PropTypes.string.isRequired,
  }).isRequired,
  pick: PropTypes.bool.isRequired,
}

