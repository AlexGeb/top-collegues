export class Collegue {
  constructor(
    private _nom: string,
    private _imageUrl: string,
    public score: number = 10
  ) {}
  get nom(): string {
    return this._nom;
  }
  get imageUrl(): string {
    return this._imageUrl;
  }
}
