import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weeklyDownloads',
})
export class WeeklyDownloadsPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000) {
      const roundedValue = Math.floor(value / 1000);
      return `${roundedValue} K`;
    } else {
      return value.toString();
    }
  }
}
