import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menu!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private ServiceService: ServiceService) {
    this.ServiceService.hola()
  }


  ngOnInit() {
    this.menu = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
