// WaterShape.ts
type WaterProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};
type OriginProps = {
  originY: number;
  originHeight: number;
};
import gsap from 'gsap';

export class WaterShape {
  private origins: Array<OriginProps> = [];

  private waterList: Array<SVGRectElement> = [];

  private animTls: Array<gsap.core.Tween | null> = [];

  private _data: Array<WaterProps> = [];
  public data: WaterProps[];
  private waterlevel: number = 0;
  private waterlevels: Array<number> = [];

  private readonly DURATION = 300;

  constructor(svgRoot: SVGSVGElement, ...rectIds: Array<string>) {
    if (svgRoot) this.init(svgRoot, ...rectIds);
  }

  public init(svgRoot: SVGSVGElement, ...rectIds: Array<string>) {
    if (!rectIds) {
      return;
      // throw new Error(`找不到 #${rectId}`);
    }
    const getNum = (s: string | null) => {
      const n = Number(s);
      return Number.isNaN(n) ? 0 : n;
    };

    rectIds.forEach((rectId, index) => {
      //
      const rect = svgRoot.getElementById(rectId) as SVGRectElement;

      if (!rect) {
        return;
        // throw new Error(`找不到 #${rectId}`);
      }
      //   this.rect = rect;
      this.waterList[index] = rect;
      //
      this._data[index] = {
        x: getNum(rect.getAttribute('x')),
        y: getNum(rect.getAttribute('y')),
        width: getNum(rect.getAttribute('width')),
        height: getNum(rect.getAttribute('height'))
      };
      //
      this.origins[index] = {
        originY: this._data[index].y,
        originHeight: this._data[index].height
      };
      this.animTls[index] = null;
    });

    // 创建数组代理
    this.data = new Proxy(this._data, {
      // 拦截数组下标赋值：data[index] = 新对象
      set: (target, prop: string, newVal: WaterProps) => {
        const idx = Number(prop);
        if (!isNaN(idx) && this.waterList[idx]) {
          target[idx] = newVal;
          // 整体替换对象，同步全部属性到DOM

          const rect = this.waterList[idx];
          rect.setAttribute('x', String(newVal.x));
          rect.setAttribute('y', String(newVal.y));
          rect.setAttribute('width', String(newVal.width));
          rect.setAttribute('height', String(newVal.height));
        }
        return true;
      },
      // 拦截数组下标读取，返回子对象代理
      get: (target, prop: string) => {
        const idx = Number(prop);
        const originObj = target[idx];
        // 数字下标，返回对象代理，拦截 .y .height 等赋值
        if (!isNaN(idx) && originObj) {
          return new Proxy(originObj, {
            set: (obj, key: keyof WaterProps, value: number) => {
              obj[key] = value;
              // 赋值后同步DOM
              const rect = this.waterList[idx];
              rect.setAttribute(key, String(value));
              //todelete
              console.log('赋值', rect, key, value);
              return true;
            }
          });
        }
        return Reflect.get(target, prop);
      }
    });
    //
  }
  public setLevel(val1: number, val2: number) {
    val1 && this.waterList[0] && this.setLevel2(val1, 0);
    val2 && this.waterList[1] && this.setLevel2(val2, 1);
  }
  public setLevel2(val: number, index: number) {
    // 原值校验、边界截断逻辑完全保留
    const tmp = typeof val === 'number' && !Number.isNaN(val) ? val : 0;
    const targetNum = Math.max(0, Math.min(1, tmp));
    const targetH = this.origins[index].originHeight * targetNum;
    const targetY = this.origins[index].originY + (this.origins[index].originHeight - targetH);

    // 目标数值完全一致，直接退出
    if (this.waterlevels[index] === val && this.data[index].height === targetH) return;

    this.startAnim(targetH, targetY, index);
    // 更新基准水位标识
    this.waterlevels[index] = val;
  }

  private startAnim(targetH: number, targetY: number, index: number) {
    // 中断上一轮未完成动画，防止动画叠加错乱
    if (this.animTls[index]) {
      this.animTls[index].kill();
    }
    // GSAP 同时插值 height / y
    this.animTls[index] = gsap.to(this.data[index], {
      height: targetH,
      y: targetY,
      duration: this.DURATION / 1000, // gsap 单位是秒
      ease: 'linear', // 水位匀速过渡最合适
      onUpdate: (target) => {},
      onComplete: () => {
        this.animTl = null;
      }
    });
  }
}
