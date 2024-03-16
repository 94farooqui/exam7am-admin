import React, { useState } from "react";
import countriesIcon from "./../../assets/Driving/countries-icon.png";
import { regions, globe } from "./../../data/driving-data";

const DrivingCountries = () => {
  const [selectedRegion, setSelectedregion] = useState(regions[0]);
  const [selectedRegionCountries, setselectedRegionCountries] = useState(
    globe.find((data) => data.region === selectedRegion)
  );
  return (
    <div className="bg-[#0E416D] p-4">
      <div className="flex gap-8 items-center py-4 pl-8">
        <img src={countriesIcon} className="self-start" />
        <div className="text-white">
          <h2 className="text-3xl">Countries</h2>
          <p>
            An overview of the countries of {selectedRegion}, select the country
            of which you want to learn the traffic rules!
          </p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-4 py-4">
        {regions.map((region) => (
          <div
            className={`p-4 border border-slate-300 bg-white text-xl rounded-md hover:cursor-pointer ${
              region === selectedRegion ? "bg-[#245682] text-white" : ""
            }`}
            onClick={() => setSelectedregion(region)}
          >
            <h2>{region}</h2>
          </div>
        ))}
      </div>

      {selectedRegionCountries && (
        <div className="bg-white w-full rounded-md p-4">
          <h2 className="text-3xl  mb-4">{selectedRegion}</h2>
          <hr />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {selectedRegionCountries.countries.map((country) => (
              <div className="flex flex-col items-center border-2 border-slate-200 p-4">
                <h2 className="text-lg text-blue-800">{country.name}</h2>
                <img className="w-28 h-32 object-contain " src={country.image} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DrivingCountries;
