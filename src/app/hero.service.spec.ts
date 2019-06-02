import { TestBed, inject } from '@angular/core/testing';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {MessageService} from './message.service';
import {isMethodMetadata} from '@angular/compiler-cli';

describe('HeroService', () => {
  let httpClientSpy: { get: jasmine.Spy };

  let heroService: HeroService;
  let messageService: MessageService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService, HeroService]
    });
  });

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    messageService = new MessageService();
    heroService = new HeroService(<any> httpClientSpy, messageService);

  });


  it('getHeroes: should return expected heroes (HttpClient called once)', () => {
    const expectedHeroes: Hero[] =
      [{id: 1, name: 'A'}, {id: 2, name: 'B'}];

    // AL PARECER HAY QUE CAMBIAR LA SIGUIENTE SENTENCIA PARA QUE SE PROCESE CON "OBSERVABLES":
    //httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));
    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    heroService.getHeroes().subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });



  it('getHeroNo404', () => {
    const expectedHeroes: Hero[] =
      [{id: 1, name: 'A'}, {id: 2, name: 'B'}];

    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    heroService.getHeroNo404(123).subscribe(
      hero => {
        // El método getHeroNo404 del service siempre retorna
        // el objeto: Object{id: 1, name: 'A'}
        //      ¿¿¿????

        //console.log(hero);
        expect(hero.id).toEqual(1)
      }
    )

  });


  it('getHero: should return expected hero', () => {
    const expectedHeroes: Hero[] = [{id: 100, name: 'ABC'}, {id: 200, name: 'BCD'}];
    const mockHero2: Hero = {id: 200, name: 'BCD'};

    httpClientSpy.get.and.returnValue(of(expectedHeroes));


    heroService.getHero(200)
      .subscribe(hero => {
            // El método getHero del service siempre retorna
            // el array de objetos Hero[]: [Object{id: 100, name: 'ABC'}, Object{id: 200, name: 'BCD'}]
            //        ¿¿¿????

            // ¿Como es posible ... si getHero retorna solo un Hero????

          //console.log(hero);
          // ¿Se debería comparar con mockHero2??
          expect(hero).toEqual(mockHero2, 'expected hero');

        }
      );

  });

  /*

  // ADDHERO

  //    ERROR:    THIS.HTTP.POST IS NOT A FUNCTION???


  it('addHero', done => {
    const hero= { id:12, name:'Carlos Caballero' };
    const mockId=12;

    heroService.addHero(hero).subscribe(
      hero=> {
        expect(hero.id).toEqual(mockId);
        done();
      },
      error=> {
        console.log(error);
        done();
      }
    );
  });
  */


  /*
  it('addHero', () => {
    const expectedHeroes: Hero[] =
      [{id: 1, name: 'A'}, {id: 2, name: 'B'}];
    const mockHero: Hero = {id: 3, name: 'C' };

    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    heroService.addHero(mockHero);

    heroService.getHeroes().subscribe(
      heroes => expect(heroes.length).toBe(3),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
*/


  /*
    it('addHero', () => {
      const heroes: Hero[] = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
      const mockHero: Hero = {id: 3, name: 'C' };
      const mockId = 3;

      httpClientSpy.get.and.returnValue(of(heroes));
      heroService.addHero(mockHero).subscribe(
        hero => expect(hero.id).toEqual(mockId)
      );
    });
  */

  /*
    fit('addHero', done => {
      const hero= { id:12, name:'Carlos Caballero' };
      const mockId=12;

      heroService.addHero(hero).subscribe(
        hero=> {
          expect(hero.id).toEqual(mockId);
          done();
        },
        error=> {
          console.log(error);
          done();
        }
      );
    });
  */

});
