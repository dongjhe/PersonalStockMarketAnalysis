export type Report = {
  title: string;
  date: string;
  path: string;
  summary: string;
};

export type ReportGroup = {
  label: string;
  reports: Report[];
};

export type ReportMonthGroup = {
  month: string;
  label: string;
  reports: Report[];
};

export class ReportPaginationHelper {
  static getTotalPages(reports: Report[], pageSize: number): number {
    return Math.max(1, Math.ceil(reports.length / pageSize));
  }

  static getPageNumbers(reports: Report[], pageSize: number): number[] {
    const totalPages = this.getTotalPages(reports, pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  static getPagedReports(reports: Report[], pageIndex: number, pageSize: number): Report[] {
    const start = pageIndex * pageSize;
    return reports.slice(start, start + pageSize);
  }

  static groupReportsByMonth(reports: Report[]): ReportMonthGroup[] {
    const groupMap = new Map<string, Report[]>();

    for (const report of reports) {
      const month = report.date.slice(0, 7);
      const existing = groupMap.get(month);
      if (existing) {
        existing.push(report);
      } else {
        groupMap.set(month, [report]);
      }
    }

    return Array.from(groupMap.entries()).map(([month, reports]) => ({
      month,
      label: this.formatMonthLabel(month),
      reports,
    }));
  }

  static formatMonthLabel(month: string): string {
    const [year, monthNumber] = month.split('-');
    return `${year} 年 ${monthNumber} 月`;
  }
}
