import React from "react";

import { Esquerra } from "./Esquerra.jsx";
import { Central } from "./Central.jsx";
import { Dreta } from "./Dreta.jsx";

import "./Cos.css";

/* ============ COS ============ */
// >> ESQUERRA: Menu lateral
// >> CENTRAL: Frame
//    >> Detall del Video seleccionat
//    >> Llista Videos relacionats amb el seleccionat
// >> DRETA: Menu lateral Videos trobats
// =====================================

/* ============ COS ============ */
export const Cos = ({ oSelectedVideo, oLlistaVideos, fSetterVideo }) => {
  // >> Frame Central

  return (
    <div className="Cos">
      {/* >> ESQUERRA Menu lateral */}
      {/*       <div className="cosEsquerra">
        <Esquerra />
      </div>
 */}
      {/* >> CENTRAL Frame */}
      <div className="cosCentral">
        <Central oSelectedVideo={oSelectedVideo} />
      </div>

      {/* >> DRETA: Menu lateral Videos trobats */}
      <div className="cosDreta">
        <Dreta
          oLlistaVideos={oLlistaVideos} /* Passem llista videos trobats */
          fSetterVideo={fSetterVideo} /* Recollim video clickat/escollit */
        />
      </div>
    </div>
  );
};
