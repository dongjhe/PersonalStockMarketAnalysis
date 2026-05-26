import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Report, ReportGroup, ReportPaginationHelper } from '../shared/report-utils';

type PortfolioReportGroup = ReportGroup;

interface StockReportGroup extends PortfolioReportGroup {
  region: 'TW' | 'US';
}

@Component({
  selector: 'app-stocks',
  imports: [RouterLink],
  templateUrl: './stocks.html',
  styleUrl: './stocks.scss',
})
export class Stocks {
  readonly intro = '這裡集中所有個股專頁。';
  private readonly regionStorageKey = 'stocks.activeRegion';

  readonly pageSize = 10;
  activePageIndex = 0;
  activeRegion: 'TW' | 'US' = this.loadActiveRegion();

  readonly reportGroups: StockReportGroup[] = [
    {
      region: 'TW',
      label: '一般庫存分析',
      reports: [
        {
          title: '智邦 (2345) 產業策略白皮書',
          date: '2026-05-25',
          path: '/stocks/2345-accton-industry-whitepaper-20260525',
          summary:
            '依最新股價、2025 年報、2026 月營收、102.4T / 800G AI 網通與資料中心升級主軸製作。',
        },
        {
          title: '川湖 (2059) 產業策略白皮書',
          date: '2026-05-25',
          path: '/stocks/2059-kingslide-industry-whitepaper-20260525',
          summary: '依 2025 年報、2026 Q1 法說、AI 伺服器導軌、機櫃升級與北美產能佈局製作。',
        },
        {
          title: '華通 (2313) 產業策略白皮書',
          date: '2026-05-19',
          path: '/stocks/2313-compeq-industry-whitepaper-20260519',
          summary: '依最新股價、2025 年報、2026 Q1 財報、低軌衛星、AI 伺服器與光模組成長主軸製作。',
        },
        {
          title: '聯詠 (4916) 產業策略白皮書',
          date: '2026-05-10',
          path: '/stocks/4916-novatek-industry-whitepaper-20260510',
          summary: '依最新股價、Q1 2026 財報、4 月營收、三年財務趨勢與顯示驅動 IC 復甦狀況製作。',
        },
        {
          title: '台積電 (2330) 產業策略白皮書',
          date: '2026-05-07',
          path: '/stocks/2330-tsmc-industry-whitepaper-20260507',
          summary: '依最新股價、近三年財報、AI 需求、先進製程與方舟庫存框架製作。',
        },
      ],
    },
    {
      region: 'US',
      label: '一般庫存分析',
      reports: [
        {
          title: 'FLY Firefly Aerospace 產業策略白皮書',
          date: '2026-05-26',
          path: '/stocks/fly-industry-whitepaper-20260526',
          summary: '依最新盤前大漲、德州製造基地擴建、Alpha/Beta/Gamma 與月球/軌道任務鏈製作。',
        },
        {
          title: 'DPRO Draganfly 產業策略白皮書',
          date: '2026-05-22',
          path: '/stocks/dpro-industry-whitepaper-20260522',
          summary: '依最新 Q1 2026 財報、國防/C-UAS 訂單、FPV 與公共安全應用動能製作。',
        },
        {
          title: 'CEG Constellation Energy 產業策略白皮書',
          date: '2026-05-11',
          path: '/stocks/ceg-industry-whitepaper-20260511',
          summary:
            '依最新股價、Q1 2026 8-K、2025 年報、Calpine 整合、資料中心需求與核能基載優勢製作。',
        },
        {
          title: 'TSLA Tesla 產業策略白皮書',
          date: '2026-05-07',
          path: '/stocks/tsla-industry-whitepaper-20260507',
          summary: '依最新股價、近三年財報、電動車競爭、能源儲能、FSD 與 Robotaxi 選擇權製作。',
        },
        {
          title: 'BKSY BlackSky 產業策略白皮書',
          date: '2026-05-07',
          path: '/stocks/bksy-industry-whitepaper-20260507',
          summary: '依最新 Q1 2026 財報、新合約、Gen-3 衛星、國防 ISR 需求與股價波動製作。',
        },
      ],
    },
  ];

  get activeReportGroups(): StockReportGroup[] {
    return this.reportGroups.filter((group) => group.region === this.activeRegion);
  }

  get currentReports(): Report[] {
    return this.activeReportGroups[0]?.reports ?? [];
  }

  get totalPages(): number {
    return ReportPaginationHelper.getTotalPages(this.currentReports, this.pageSize);
  }

  get pageNumbers(): number[] {
    return ReportPaginationHelper.getPageNumbers(this.currentReports, this.pageSize);
  }

  get pagedReports(): Report[] {
    return ReportPaginationHelper.getPagedReports(
      this.currentReports,
      this.activePageIndex,
      this.pageSize,
    );
  }

  private loadActiveRegion(): 'TW' | 'US' {
    if (typeof window === 'undefined') {
      return 'TW';
    }

    const stored = window.localStorage.getItem(this.regionStorageKey);
    return stored === 'US' ? 'US' : 'TW';
  }

  private saveActiveRegion(region: 'TW' | 'US'): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(this.regionStorageKey, region);
  }

  selectRegion(region: 'TW' | 'US'): void {
    this.activeRegion = region;
    this.activePageIndex = 0;
    this.saveActiveRegion(region);
  }

  selectPage(index: number): void {
    this.activePageIndex = index;
  }
}
