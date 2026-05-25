import { Routes } from '@angular/router';
import { ReportDetail } from '../report-detail/report-detail';
import { TsmcIndustryWhitepaper20260507 } from './report-detail/2330-tsmc-industry-whitepaper-20260507/2330-tsmc-industry-whitepaper-20260507';
import { NovatekIndustryWhitepaper20260510 } from './report-detail/4916-novatek-industry-whitepaper-20260510/4916-novatek-industry-whitepaper-20260510';
import { BksyIndustryWhitepaper20260507 } from './report-detail/bksy-industry-whitepaper-20260507/bksy-industry-whitepaper-20260507';
import { CegIndustryWhitepaper20260511 } from './report-detail/ceg-industry-whitepaper-20260511/ceg-industry-whitepaper-20260511';
import { CompeqIndustryWhitepaper20260519 } from './report-detail/2313-compeq-industry-whitepaper-20260519/2313-compeq-industry-whitepaper-20260519';
import { KingslideIndustryWhitepaper20260525 } from './report-detail/2059-kingslide-industry-whitepaper-20260525/2059-kingslide-industry-whitepaper-20260525';
import { DproIndustryWhitepaper20260522 } from './report-detail/dpro-industry-whitepaper-20260522/dpro-industry-whitepaper-20260522';
import { TslaIndustryWhitepaper20260507 } from './report-detail/tsla-industry-whitepaper-20260507/tsla-industry-whitepaper-20260507';
import { Stocks } from './stocks';

export const stocksRoutes: Routes = [
  { path: 'stocks', component: Stocks },
  {
    path: 'stocks/tsla-industry-whitepaper-20260507',
    component: TslaIndustryWhitepaper20260507,
  },
  {
    path: 'stocks/bksy-industry-whitepaper-20260507',
    component: BksyIndustryWhitepaper20260507,
  },
  {
    path: 'stocks/2330-tsmc-industry-whitepaper-20260507',
    component: TsmcIndustryWhitepaper20260507,
  },
  {
    path: 'stocks/ceg-industry-whitepaper-20260511',
    component: CegIndustryWhitepaper20260511,
  },
  {
    path: 'stocks/2059-kingslide-industry-whitepaper-20260525',
    component: KingslideIndustryWhitepaper20260525,
  },
  {
    path: 'stocks/2313-compeq-industry-whitepaper-20260519',
    component: CompeqIndustryWhitepaper20260519,
  },
  {
    path: 'stocks/4916-novatek-industry-whitepaper-20260510',
    component: NovatekIndustryWhitepaper20260510,
  },
  {
    path: 'stocks/dpro-industry-whitepaper-20260522',
    component: DproIndustryWhitepaper20260522,
  },
  { path: 'stocks/:slug', component: ReportDetail },
];
