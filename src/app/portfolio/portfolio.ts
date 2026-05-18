import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type PortfolioReport = {
  title: string;
  date: string;
  path: string;
  summary: string;
};

type PortfolioReportGroup = {
  label: string;
  reports: PortfolioReport[];
};

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  readonly intro =
    '這裡整理庫存分析報告；清單資料集中放在 portfolio.ts，新增報告時只要補資料即可。';

  readonly reportGroups: PortfolioReportGroup[] = [
    {
      label: '一般庫存分析',
      reports: [
        {
          title: '方舟複盤｜台美股庫存與水位分析',
          date: '2026-05-18',
          path: '/portfolio/ark-inventory-water-level-20260518',
          summary: '依最新台美股庫存與水位截圖，重做 10 段方舟複盤與操作判斷。',
        },
        {
          title: '方舟複盤｜台美股庫存與水位分析',
          date: '2026-05-16',
          path: '/portfolio/ark-inventory-water-level-20260516',
          summary: '依最新台美股庫存與水位截圖，重做 10 段方舟複盤與操作判斷。',
        },
        {
          title: '方舟複盤｜台美股庫存與水位分析',
          date: '2026-05-12',
          path: '/portfolio/ark-inventory-water-level-20260512',
          summary:
            '依東東最新台美股清單截圖整理，更新 22.83% 持股水位、62.1% 建議水位、部位結構與前日差異。',
        },
        {
          title: '方舟複盤｜台美股庫存與水位分析',
          date: '2026-05-11',
          path: '/portfolio/ark-inventory-water-level-20260511',
          summary:
            '依東東最新台美股清單截圖整理，延續既有框架更新水位、部位結構、日對日差異與操作建議。',
        },
        {
          title: '方舟複盤｜台美股庫存與水位分析',
          date: '2026-05-08',
          path: '/portfolio/ark-inventory-water-level-20260508',
          summary: '依最新台美股庫存截圖更新 25.75% 水位、日對日差異、風控與今晚分批策略。',
        },
        {
          title: '方舟複盤｜台美股庫存與水位分析',
          date: '2026-05-07',
          path: '/portfolio/ark-inventory-water-level-20260507',
          summary: '依最新台美股庫存截圖更新水位、部位差異、風控與分批加碼順序。',
        },
        {
          title: '方舟複盤｜台美股庫存與水位分析',
          date: '2026-05-06',
          path: '/portfolio/ark-inventory-water-level-20260506',
          summary: '依最新台美股庫存與最新財經資訊更新判斷依據，整理水位、主線配置與操作節奏。',
        },
        {
          title: '方舟複盤｜台美股庫存與水位分析',
          date: '2026-05-05',
          path: '/portfolio/ark-inventory-water-level-20260505',
          summary: '完整整合桌面 HTML 報告，保留台美股庫存總覽、水位判斷與分批布局節奏。',
        },
      ],
    },
  ];
}
