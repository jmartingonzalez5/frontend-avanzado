import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('add hace crecer el array', inject([MessageService], (service: MessageService) => {
      service.add("mensaje 1");
      service.add("mensaje 2");
      service.add("mensaje 3");
      expect(service.messages.length).toBe(3);
  }));

  it('add: el valor es el ultimo de la lista', inject([MessageService], (service: MessageService) => {
    service.add("mensaje 1");
    service.add("mensaje 2");
    service.add("mensaje 3");
    expect(service.messages[service.messages.length-1]).toBe("mensaje 3");
  }));

  it('clear: se borra el contenido si no contiene mensajes la lista', inject([MessageService], (service: MessageService) => {
    service.clear();
    expect(service.messages.length).toBe(0);
  }));

  it('clear: se borra el contenido si contiene mensajes la lista', inject([MessageService], (service: MessageService) => {
    service.add("mensaje 1");
    service.add("mensaje 2");
    service.clear();
    expect(service.messages.length).toBe(0);
  }));

});
