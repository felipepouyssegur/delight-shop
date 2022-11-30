
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <div className="glasses">
      <div className="container-fluid">
        <div className="row col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="glasses_box">
            <p className="nombre">{data.nombre}</p>
            <img src={data.imagen} alt="foto del producto" />
            <br />
            <Link to={`/${data.id}`}>
              <button className="botondetalle"> Ver Detalle </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
