import { Component } from '@angular/core';

interface CustomField {
  key: string;
  value: string;
  useAtStart: boolean;
}

@Component({
  selector: 'app-agent-edit',
  templateUrl: './agent-edit.component.html'
})
export class AgentEditComponent {
  fields: CustomField[] = [{ key: '', value: '', useAtStart: false }];
}
