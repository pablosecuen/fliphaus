import Filters from "@/app/components/form/filters";
import SearchForm from "@/app/components/form/search-form";
import React from "react";

function Propiedades() {
  return (
    <div className="min-h-screen pt-24  flex justify-center px-8">
      <nav className="flex flex-col  border w-1/2">
        <h2 className="tracking-widest py-8 text-xl font-semibold">PROPIEDADES</h2>
        <SearchForm />
        <div>
          <Filters />
        </div>
      </nav>
      <aside className="w-1/2 border"></aside>
    </div>
  );
}

export default Propiedades;
