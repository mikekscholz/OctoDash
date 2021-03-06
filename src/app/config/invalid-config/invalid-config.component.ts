import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-invalid-config',
  templateUrl: './invalid-config.component.html',
  styleUrls: ['./invalid-config.component.scss']
})


export class InvalidConfigComponent implements OnInit {
  errors: string[];
  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.errors = this.configService.getErrors();
  }
}
