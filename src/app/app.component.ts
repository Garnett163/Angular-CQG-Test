import { Component, OnInit, Input } from '@angular/core';
import { IPackage } from './models/packageType';
import { PackageService } from './services/package.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular - CQG';
  // @Input() matchClass: string = '';
  packages: IPackage[] = [];
  filteredPackages: IPackage[] = [];
  searchQuery = ''
  isHovered = false;
  currentPackage: IPackage | null = null;

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.packageService.getPackages().subscribe((packages) => {
      this.packages = packages;
      this.filteredPackages = packages;
      console.log(packages);
    });
  }


  onPackageHover(item: IPackage): void {
    if (
      !this.isHovered ||
      (this.currentPackage && this.currentPackage.id !== item.id)
    ) {
      this.packageService.getDependencies(item.id).subscribe((res) => {
        const dependencies = res;

        const matchingPackage = this.packages.filter((p) =>
          dependencies.includes(p.id)
        );

        console.log(matchingPackage);

        matchingPackage.forEach((matchedItem) => {
          matchedItem.isHovered = true;
        });

        this.isHovered = true;
        this.currentPackage = item;
      });
    }
  }

  onPackageLeave(): void {
    this.packages.forEach((item) => {
      item.isHovered = false;
    });
    this.isHovered = false;
  }

  onSearch(query: string): void {
    this.filteredPackages = this.packages.filter((item) =>
      item.id.toLowerCase().includes(query.toLowerCase())
    );
  }

  resetSearch(): void {
    this.searchQuery = '';
    this.filteredPackages = this.packages;
  }
}
