"use client";

import { ChartData } from "@/types";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

interface Props {
  data: ChartData;
}

const DoughnutGraph: FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Doughnut
        data={data}
        className="!w-full !h-full max-w-[530px] max-h-[530px]"
      />
    </div>
  );
};

export default DoughnutGraph;