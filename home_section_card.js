import React from "react";

function HomeSectionCard() {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdress&psig=AOvVaw1i2JkZ6cfBlnpy5Qia_YgX&ust=1705693703172000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCOCbyq3a54MDFQAAAAAdAAAAABAE"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">lorem</h3>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          expedita repellendus, explicabo non eum tempore repudiandae reiciendis
          vero consequatur corrupti similique minima, veritatis adipisci vitae
          obcaecati sed tenetur itaque voluptas.
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCard;