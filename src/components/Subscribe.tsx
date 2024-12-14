import React from "react";
import Container from "./Container";

function Subscribe() {
  return (
    <div className="bg-primary py-24 text-white">
      <Container>
        <div className="grid grid-cols-5 gap-24">
          <div className="col-span-3 text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel optio
            at, explicabo quia, quam pariatur atque, dicta eum omnis.
          </div>
          <div className="col-span-2">
            <button className="px-5 py-3 border-2 rounded-full border-white min-w-fit">
              Connect With Us
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Subscribe;
