import { Component, Input } from '@angular/core';
import { IPackage } from '../../models/packageType';

@Component({
  selector: 'app-packageItem',
  templateUrl: './packageItem.component.html',
  styleUrls: ['./packageItem.component.scss'],
})
export class PackageItemComponent {
  @Input() package: IPackage;
  @Input() matchClass: string = '';
}
