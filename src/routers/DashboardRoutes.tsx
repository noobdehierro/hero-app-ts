import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from "../pages/DcScreen";
import { HeroScreen } from "../pages/HeroScreen";
import { MarvelScreen } from "../pages/MarvelScreen";
import { SearchScreen } from "../pages/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />

        <Route path="/search" element={<SearchScreen />} />
        <Route path="/hero/:heroId" element={<HeroScreen />} />

        <Route path="/" element={<MarvelScreen />} />
      </Routes>
    </>
  );
};
