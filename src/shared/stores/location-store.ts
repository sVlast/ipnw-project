import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class ThemeStore {
  color = '#121212';
  backgroundColor = '#ffffff';

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'themeStore',
      properties: ['color', 'backgroundColor'],
      storage: window.localStorage,
    });
  }

  setTheme(theme: any) {
    this.color = theme.color;
    this.backgroundColor = theme.backgroundColor;
  }
  getTheme() {
    return this;
  }

  reset() {
    this.color = '#121212';
    this.backgroundColor = '#ffffff';
  }
}

export const themeStore = new ThemeStore();
