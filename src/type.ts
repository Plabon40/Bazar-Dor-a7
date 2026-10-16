type market = {
  market: string;
  division: string;
  min: number;
  max: number;
};
export interface Itype {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
  markets: market[];

  //     {
  //       market: string;
  //       division: string;
  //       min: number;
  //       max: number;
  //     },
  //     {
  //       market: string;
  //       division: string;
  //       min: number;
  //       max: number;
  //     },
  //     {
  //       market: string;
  //       division: string;
  //       min: number;
  //       max: number;
  //     },
  //     {
  //       market: string;
  //       division: string;
  //       min: number;
  //       max: number;
  //     },
  //     {
  //       market: string;
  //       division: string;
  //       min: number;
  //       max: number;
  //     },
  //     {
  //       market: string;
  //       division: string;
  //       min: number;
  //       max: number;
  //     },
  //     {
  //       market: string;
  //       division: string;
  //       min: number;
  //       max: number;
  //     },
  //     {
  //       market: "চৌর বাজার";
  //       division: "ময়মনসিংহ";
  //       min: 135;
  //       max: 155;
  //     },
  //     {
  //       market: "বাজারহাট";
  //       division: "খুলনা";
  //       min: 134;
  //       max: 151;
  //     },
  //     {
  //       market: "ডবলগেট বাজার";
  //       division: "খুলনা";
  //       min: 139;
  //       max: 154;
  //     },
  //     {
  //       market: "আমবাজার";
  //       division: "সিলেট";
  //       min: 143;
  //       max: 165;
  //     },
  //     {
  //       market: "চৌরাস্তা বাজার";
  //       division: "সিলেট";
  //       min: 141;
  //       max: 158;
  //     },
  //   ];
}
