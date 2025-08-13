import { Component } from '@angular/core';

interface Agent {
  name: string;
  type: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  agents: Agent[] = [
    { name: 'Consultor Financeiro', type: 'financeiro' },
    { name: 'Coach de Vida', type: 'coach' }
  ];
}
