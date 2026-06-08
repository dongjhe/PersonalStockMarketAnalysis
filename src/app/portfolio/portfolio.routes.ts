import { Routes } from '@angular/router';
import { ReportDetail } from '../report-detail/report-detail';
import { Portfolio } from './portfolio';
import { ArkInventoryWaterLevel20260605 } from './report-detail/ark-inventory-water-level-20260605/ark-inventory-water-level-20260605';
import { ArkInventoryWaterLevel20260505 } from './report-detail/ark-inventory-water-level-20260505/ark-inventory-water-level-20260505';
import { ArkInventoryWaterLevel20260506 } from './report-detail/ark-inventory-water-level-20260506/ark-inventory-water-level-20260506';
import { ArkInventoryWaterLevel20260507 } from './report-detail/ark-inventory-water-level-20260507/ark-inventory-water-level-20260507';
import { ArkInventoryWaterLevel20260508 } from './report-detail/ark-inventory-water-level-20260508/ark-inventory-water-level-20260508';
import { ArkInventoryWaterLevel20260511 } from './report-detail/ark-inventory-water-level-20260511/ark-inventory-water-level-20260511';
import { ArkInventoryWaterLevel20260512 } from './report-detail/ark-inventory-water-level-20260512/ark-inventory-water-level-20260512';
import { ArkInventoryWaterLevel20260516 } from './report-detail/ark-inventory-water-level-20260516/ark-inventory-water-level-20260516';
import { ArkInventoryWaterLevel20260518 } from './report-detail/ark-inventory-water-level-20260518/ark-inventory-water-level-20260518';
import { ArkInventoryWaterLevel20260519 } from './report-detail/ark-inventory-water-level-20260519/ark-inventory-water-level-20260519';
import { ArkInventoryWaterLevel20260520 } from './report-detail/ark-inventory-water-level-20260520/ark-inventory-water-level-20260520';
import { ArkInventoryWaterLevel20260601 } from './report-detail/ark-inventory-water-level-20260601/ark-inventory-water-level-20260601';
import { ArkInventoryWaterLevel20260528 } from './report-detail/ark-inventory-water-level-20260528/ark-inventory-water-level-20260528';

export const portfolioRoutes: Routes = [
  { path: 'portfolio', component: Portfolio },
  {
    path: 'portfolio/ark-inventory-water-level-20260605',
    component: ArkInventoryWaterLevel20260605,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260601',
    component: ArkInventoryWaterLevel20260601,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260528',
    component: ArkInventoryWaterLevel20260528,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260520',
    component: ArkInventoryWaterLevel20260520,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260519',
    component: ArkInventoryWaterLevel20260519,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260518',
    component: ArkInventoryWaterLevel20260518,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260516',
    component: ArkInventoryWaterLevel20260516,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260512',
    component: ArkInventoryWaterLevel20260512,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260511',
    component: ArkInventoryWaterLevel20260511,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260508',
    component: ArkInventoryWaterLevel20260508,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260507',
    component: ArkInventoryWaterLevel20260507,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260506',
    component: ArkInventoryWaterLevel20260506,
  },
  {
    path: 'portfolio/ark-inventory-water-level-20260505',
    component: ArkInventoryWaterLevel20260505,
  },
  { path: 'portfolio/:slug', component: ReportDetail },
];
