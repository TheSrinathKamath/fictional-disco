import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/helpers/network.service';
import { NotifierService } from 'src/app/helpers/notifier.service';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
})
export class OfflineComponent implements OnInit {
  constructor(
    private networkService: NetworkService,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {}
  public checkConnection() {
    if (!this.networkService.online) {
      return this.notifier.showNotification(
        'Poor connection or no internet.',
        'OK',
        'error'
      );
    }

    this.notifier.showNotification(
      "Awesome! We're back online!",
      'OK',
      'success'
    );
    return window.location.replace('');
  }
}
