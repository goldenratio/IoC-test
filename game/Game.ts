import { injectable } from 'inversify';
import { SlotGame } from '../src/game/api';

@injectable()
export class Game implements SlotGame {

  constructor() {
    console.log('game ');
  }

  foo(): void {
    console.log('foo');
  }

}