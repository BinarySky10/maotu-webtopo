// WaterShape.ts
type WaterProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export class WaterShape {
  private originY: number;
  private originHeight: number;
  private rect: SVGRectElement;

  private _data: WaterProps;

  constructor(svgRoot: SVGSVGElement, rectId = 'water') {
    if (svgRoot) this.init(svgRoot, rectId);
  }

  public init(svgRoot: SVGSVGElement, rectId: string) {
    const rect = svgRoot.getElementById(rectId) as SVGRectElement;
    if (!rect) throw new Error(`找不到 #${rectId}`);
    this.rect = rect;

    const getNum = (s: string | null) => {
      const n = Number(s);
      return Number.isNaN(n) ? 0 : n;
    };

    this._data = {
      x: getNum(rect.getAttribute('x')),
      y: getNum(rect.getAttribute('y')),
      width: getNum(rect.getAttribute('width')),
      height: getNum(rect.getAttribute('height'))
    };

    this.originY = this._data.y;
    this.originHeight = this._data.height;
  }

  public get x() {
    return this._data.x;
  }
  public set x(v: number) {
    this._data.x = v;
    this.rect.setAttribute('x', String(v));
  }

  public get y() {
    return this._data.y;
  }
  public set y(v: number) {
    this._data.y = v;
    this.rect.setAttribute('y', String(v));
  }

  public get width() {
    return this._data.width;
  }
  public set width(v: number) {
    this._data.width = v;
    this.rect.setAttribute('width', String(v));
  }

  public get height() {
    return this._data.height;
  }
  public set height(v: number) {
    this._data.height = v;
    this.rect.setAttribute('height', String(v));
  }

  public setLevel(val: number) {
    const tmp = typeof val === 'number' && !Number.isNaN(val) ? val : 0;
    const num = Math.max(0, Math.min(1, tmp));
    this.height = this.originHeight * num;
    this.y = this.originY + (this.originHeight - this.height);
  }
}
